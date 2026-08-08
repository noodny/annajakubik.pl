# Deployment

This app is deployed to a [Dokku](https://dokku.com) VPS via GitHub Actions.

| Trigger                       | Workflow                                          | Target Dokku app            | GH Environment |
| ----------------------------- | ------------------------------------------------- | --------------------------- | -------------- |
| Push to `main`                | [`deploy-production.yml`](.github/workflows/deploy-production.yml) | `annajakubik`               | `Production`   |
| PR opened / updated / reopened| [`deploy-preview.yml`](.github/workflows/deploy-preview.yml)       | `annajakubik-pr-<PR_NUMBER>`| `Preview`      |

Dokku builds the app from the repo's [`Dockerfile`](Dockerfile) on every `git push`.

Preview apps are **not** torn down when a PR closes — they are reaped on an
inactivity schedule instead (see [Cleanup of preview deployments](#time-based-cleanup-of-preview-deployments)).

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
| `DOKKU_SSH_PRIVATE_KEY` | **Dedicated** deploy key for CI — generate a fresh keypair just for this, do not reuse your personal SSH key. Add the public half to Dokku with `dokku ssh-keys:add github-actions <pubkey>`. Revoke it any time with `dokku ssh-keys:remove github-actions`. |

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

# Generate a dedicated CI keypair (do NOT reuse your personal key), then add
# the PUBLIC half to Dokku. The PRIVATE half goes into the DOKKU_SSH_PRIVATE_KEY
# GitHub secret. Revoke later with: dokku ssh-keys:remove github-actions
#   ssh-keygen -t ed25519 -f ./dokku-ci -N "" -C github-actions
dokku ssh-keys:add github-actions /path/to/dokku-ci.pub

# For predictable preview URLs, point a wildcard DNS record
# (*.preview.example.com) at the VPS. Preview apps then resolve automatically.
```

Preview apps are created on demand by the workflow (`apps:create`), so no manual
setup per PR is needed.

## Time-based cleanup of preview deployments

> **Q: Can Dokku kill preview deployments over time?**
>
> Dokku has **no built-in TTL / auto-expiry** for apps, and there's no official
> plugin for it. The supported approach is a cron-based sweep on the VPS.

Preview apps are reaped purely on inactivity — there is no PR-close teardown.
Install [`scripts/dokku-prune-previews.sh`](scripts/dokku-prune-previews.sh) on
the VPS via cron. It destroys any `annajakubik-pr-*` app that hasn't been
deployed to in `MAX_AGE_DAYS` (default 7); reopening/pushing to a PR resets its
clock because each deploy touches the app's directory:

```bash
sudo cp scripts/dokku-prune-previews.sh /usr/local/bin/dokku-prune-previews.sh
sudo chmod +x /usr/local/bin/dokku-prune-previews.sh

# Daily at 04:00 — only touches "<prefix>-pr-*" apps, never production.
echo '0 4 * * * MAX_AGE_DAYS=7 /usr/local/bin/dokku-prune-previews.sh >> /var/log/dokku-prune-previews.log 2>&1' \
  | sudo tee /etc/cron.d/dokku-prune-previews
```

Test first with `DRY_RUN=1 ./scripts/dokku-prune-previews.sh`.
