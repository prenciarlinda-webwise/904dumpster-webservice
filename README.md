# 904 Dumpster Web Service

Dumpster rental service website for Jacksonville, FL area.

## Project Structure

```
904dumpster-webservice/
├── frontend/          # Next.js frontend
├── scripts/           # Deployment scripts
└── docker-compose.yml
```

## Deployment

```bash
cd /var/www/html/904dumpster && git pull origin main && docker build -t 904dumpster-frontend:latest ./frontend && docker stop 904dumpster-frontend && docker rm 904dumpster-frontend && docker run -d --name 904dumpster-frontend -p 3001:3000 --restart unless-stopped 904dumpster-frontend:latest
```
