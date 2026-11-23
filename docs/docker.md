# Docker Implementation

## Overview

Docker is used to containerize all application components.

Each service runs independently in its own container.

---

## Containers

Current containers:

| Service | Technology | Port |
|---|---|---|
| Frontend | React + Nginx | 5173 |
| User Service | FastAPI | 8000 |
| Product Service | FastAPI | 8001 |

---

## Docker Practices Implemented

### Separate Images

Each component has its own Dockerfile.

Benefits:

- Independent builds
- Independent deployments
- Better scalability

---

## Non-root Containers

Backend containers run using a dedicated application user instead of root.

Benefits:

- Reduced security risk
- Production-oriented container design

---

## Health Checks

Each backend service exposes:

```
/health
```

Docker Compose uses health checks to verify service availability before dependent services start.

---

## Environment Configuration

Configuration is managed using environment variables.

Example:

```
ENVIRONMENT=development
USER_SERVICE_VERSION=1.0.0
PRODUCT_SERVICE_VERSION=1.0.0
```

Local values are stored in `.env`.

A template is maintained in:

```
.env.example
```

---

## Resource Management

Containers have defined resource limits:

- CPU limits
- Memory limits

This prevents one service from consuming all host resources.

---

## Logging

Containers use Docker JSON logging with rotation:

```
max-size: 10m
max-file: 3
```

This prevents unlimited log growth.

---

## Running Locally

Start:

```
docker compose up -d
```

Check status:

```
docker compose ps
```

Stop:

```
docker compose down
```
