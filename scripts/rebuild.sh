#!/bin/bash
# 904 Dumpster - Scheduled Blog Rebuild Script
# Runs every 2 days at 6 AM via cron to publish scheduled blog posts
# Cron: 0 6 */2 * * /opt/904dumpster/rebuild.sh >> /var/log/904dumpster-rebuild.log 2>&1

set -e

DEPLOY_DIR="/opt/904dumpster/904dumpster-webservice"
LOG_PREFIX="[904-rebuild $(date '+%Y-%m-%d %H:%M:%S')]"

echo "$LOG_PREFIX Starting rebuild..."

cd "$DEPLOY_DIR"

# Pull latest changes
echo "$LOG_PREFIX Pulling latest from main..."
git pull origin main

# Rebuild frontend (static build picks up posts where publishedDate <= now)
echo "$LOG_PREFIX Building frontend..."
docker compose build frontend --no-cache

# Restart frontend service
echo "$LOG_PREFIX Restarting frontend..."
docker compose up -d frontend

echo "$LOG_PREFIX Rebuild complete."
