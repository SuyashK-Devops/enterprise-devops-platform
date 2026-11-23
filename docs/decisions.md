# Architecture Decisions

## Decision 1: Use Docker Compose for Local Development

### Reason

Docker Compose provides a simple way to run multiple services locally while keeping the architecture close to production environments.

---

## Decision 2: Use Nginx as Reverse Proxy

### Reason

Nginx provides:

- Single entry point
- API routing
- Frontend asset serving
- Production-like networking model

---

## Decision 3: Keep Backend Services Internal

### Reason

Backend services are not directly exposed.

Traffic flow:

```
Browser
   |
Nginx
   |
Backend Services
```

Benefits:

- Reduced attack surface
- Clear service boundaries
- Similar to Kubernetes Service networking

---

## Decision 4: Use Environment Variables

### Reason

Configuration should not be hardcoded.

The same application should support:

- Development
- Testing
- Production

by changing configuration values.

---

## Decision 5: Prepare for Kubernetes Migration

The Docker architecture intentionally maps to Kubernetes concepts:

| Docker Compose | Kubernetes |
|---|---|
| Container | Pod |
| Service name | Service discovery |
| Environment variables | ConfigMap/Secret |
| Healthcheck | Probe |
| Resource limits | Resource requests/limits |

This allows gradual migration from local development to cloud-native deployment.
