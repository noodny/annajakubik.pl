# Deployment

This app is deployed to a [Dokku](https://dokku.com) VPS via GitHub Actions.

| Trigger                       | Workflow                                          | Target Dokku app            | GH Environment |
| ----------------------------- | ------------------------------------------------- | --------------------------- | -------------- |
| Push to `main`                | [`deploy-production.yml`](.github/workflows/deploy-production.yml) | `annajakubik`               | `Production`   |
| PR opened / updated / reopened| [`deploy-preview.yml`](.github/workflows/deploy-preview.yml)       | `annajakubik-pr-<PR_NUMBER>`| `Preview`      |
| PR closed (merged or not)     | [`cleanup-preview.yml`](.github/workflows/cleanup-preview.yml)     | destroys the preview app    | `Preview`      |

Dokku builds the app from the repo's [`Dockerfile`](Dockerfile) on every `git push`.

## One-time setup

### 1. GitHub Environments

In **Settings → Environments**, create two environments: **`Production`** and **`Preview`**.
These show up in the repo's *Deployments* view and let you add protection rules
(e.g. require a reviewer before a production deploy).

### 2. Repository secrets and variables

In **Settings → Secrets and variables → Actions**:

**Secret**

| Name                    | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `DOKKU_SSH_PRIVATE_KEY` | Private SSH key whose public key is added to Dokku (`dokku ssh-keys:add`).  |

**Variables**

| Name                  | Example                | Description                                                                       |
| --------------------- | ---------------------- | --------------------------------------------------------------------------------- |
| `DOKKU_HOST`          | `dokku.example.com`    | Hostname/IP of the Dokku VPS (SSH on port 22).                                    |
| `DOKKU_APP`           | `annajakubik`          | Base app name. Optional — defaults to `annajakubik`.                              |
| `DOKKU_DOMAIN`        | `preview.example.com`  | Wildcard domain for previews. A PR is served at `<app>-pr-<n>.<DOKKU_DOMAIN>`.    |
| `DOKKU_PRODUCTION_URL`| `https://annajakubik.pl` | Optional — shown as the link in the Production deployment.                       |

> Variables can be set per-environment if you want different values for
> Production vs Preview; the workflows read whichever scope applies to the run.

### 3. Dokku host

```bash
# Production app (once)
dokku apps:create annajakubik
dokku domains:set annajakubik annajakubik.pl

# Add the CI key (paste the PUBLIC key matching DOKKU_SSH_PRIVATE_KEY)
dokku ssh-keys:add github-actions /path/to/id.pub

# For predictable preview URLs, point a wildcard DNS record
# (*.preview.example.com) at the VPS. Preview apps then resolve automatically.
```

Preview apps are created on demand by the workflow (`apps:create`), so no manual
setup per PR is needed.

## Time-based cleanup of preview deployments

> **Q: Can Dokku kill preview deployments over time?**
>
> Dokku has **no built-in TTL / auto-expiry** for apps, and there's no official
> plugin for it. The supported approach is event- and cron-based cleanup, which
> this repo sets up in two layers:

1. **On PR close** — `cleanup-preview.yml` runs `dokku apps:destroy` as soon as a
   PR is merged or closed. This handles the normal case.

2. **Time/inactivity sweep (safety net)** — for previews that slip through (the
   cleanup job failed, the PR was deleted, etc.), install
   [`scripts/dokku-prune-previews.sh`](scripts/dokku-prune-previews.sh) on the
   VPS via cron. It destroys any `annajakubik-pr-*` app that hasn't been deployed
   to in `MAX_AGE_DAYS` (default 7):

   ```bash
   sudo cp scripts/dokku-prune-previews.sh /usr/local/bin/dokku-prune-previews.sh
   sudo chmod +x /usr/local/bin/dokku-prune-previews.sh

   # Daily at 04:00 — only touches "<prefix>-pr-*" apps, never production.
   echo '0 4 * * * MAX_AGE_DAYS=7 /usr/local/bin/dokku-prune-previews.sh >> /var/log/dokku-prune-previews.log 2>&1' \
     | sudo tee /etc/cron.d/dokku-prune-previews
   ```

   Test first with `DRY_RUN=1 ./scripts/dokku-prune-previews.sh`.
