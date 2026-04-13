#!/bin/bash
# 904 Dumpster - Scheduled Blog Rebuild Script
# Runs every 2 days at 6 AM via cron to publish scheduled blog posts
# Cron: 0 6 */2 * * /opt/904dumpster/rebuild.sh >> /var/log/904dumpster-rebuild.log 2>&1

set -e

DEPLOY_DIR="/var/www/html/904dumpster"
LOG_PREFIX="[904-rebuild $(date '+%Y-%m-%d %H:%M:%S')]"

echo "$LOG_PREFIX Starting rebuild..."

cd "$DEPLOY_DIR"

# Pull latest changes
echo "$LOG_PREFIX Pulling latest from main..."
git pull origin main

# Rebuild and restart frontend
echo "$LOG_PREFIX Building frontend..."
docker build -t 904dumpster-frontend:latest ./frontend

echo "$LOG_PREFIX Restarting frontend..."
docker stop 904dumpster-frontend && docker rm 904dumpster-frontend
docker run -d --name 904dumpster-frontend -p 3001:3000 --restart unless-stopped 904dumpster-frontend:latest

echo "$LOG_PREFIX Rebuild complete."
