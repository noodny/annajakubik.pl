#!/usr/bin/env bash
#
# Prune stale Dokku preview apps.
#
# Dokku has no built-in TTL/expiry for apps. Preview apps are reaped solely by
# this inactivity sweep (there is no PR-close teardown): it destroys preview
# apps that have not been deployed to in a while.
#
# "Staleness" is measured by the modification time of the app's Dokku home
# directory (/home/dokku/<app>), which is touched on every deploy. So this
# effectively kills previews that have been INACTIVE for longer than MAX_AGE_DAYS.
#
# Install on the Dokku host (run as root) via cron, e.g. daily at 04:00:
#   0 4 * * * /usr/local/bin/dokku-prune-previews.sh >> /var/log/dokku-prune-previews.log 2>&1
#
# Configuration via environment variables:
#   APP_PREFIX     - only apps matching "<prefix>-pr-*" are eligible (default: annajakubik)
#   MAX_AGE_DAYS   - destroy previews inactive for more than this many days (default: 7)
#   DRY_RUN        - set to "1" to only print what would be destroyed

set -euo pipefail

APP_PREFIX="${APP_PREFIX:-annajakubik}"
MAX_AGE_DAYS="${MAX_AGE_DAYS:-7}"
DRY_RUN="${DRY_RUN:-0}"

DOKKU_ROOT="${DOKKU_ROOT:-/home/dokku}"
now="$(date +%s)"
max_age_secs=$(( MAX_AGE_DAYS * 24 * 60 * 60 ))

# `dokku apps:list` prints a header line ("=====> My Apps") we skip with --quiet.
for app in $(dokku --quiet apps:list); do
  case "$app" in
    "${APP_PREFIX}-pr-"*) ;;   # eligible preview app
    *) continue ;;             # leave production / other apps alone
  esac

  app_dir="${DOKKU_ROOT}/${app}"
  [ -d "$app_dir" ] || continue

  mtime="$(stat -c %Y "$app_dir")"
  age_secs=$(( now - mtime ))

  if [ "$age_secs" -gt "$max_age_secs" ]; then
    age_days=$(( age_secs / 86400 ))
    echo "Destroying stale preview '${app}' (inactive ${age_days}d, limit ${MAX_AGE_DAYS}d)"
    if [ "$DRY_RUN" = "1" ]; then
      echo "  [dry-run] dokku apps:destroy ${app} --force"
    else
      dokku apps:destroy "$app" --force
    fi
  fi
done
