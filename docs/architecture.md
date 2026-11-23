# Enterprise DevOps Platform - Architecture

## Overview

Enterprise DevOps Platform is a containerized microservices application designed to demonstrate modern DevOps practices.

The platform currently consists of:

- Frontend application
- User microservice
- Product microservice
- Nginx reverse proxy
- Docker Compose orchestration

The project will later evolve into a Kubernetes-based deployment with CI/CD, monitoring, infrastructure automation, and cloud deployment.

---

## Current Architecture

```
                    Browser
                       |
                       |
                 localhost:5173
                       |
                       v
              +----------------+
              | Nginx Frontend |
              +----------------+
                    |
          -----------------------
          |                     |
          v                     v

 +----------------+    +----------------+
 | User Service   |    | Product Service|
 | FastAPI        |    | FastAPI        |
 | Port 8000      |    | Port 8001      |
 +----------------+    +----------------+

          |
          |
 enterprise-network
```

---

## Components

### Frontend

Technology:

- React
- Nginx

Responsibilities:

- Serve frontend assets
- Act as reverse proxy
- Route API requests to backend services

---

### User Service

Technology:

- Python
- FastAPI

Responsibilities:

- Provide user-related APIs
- Expose health endpoint
- Demonstrate independent microservice deployment

---

### Product Service

Technology:

- Python
- FastAPI

Responsibilities:

- Provide product-related APIs
- Expose health endpoint
- Demonstrate independent microservice deployment

---

## Networking

Services communicate using a Docker bridge network:

```
enterprise-network
```

Backend services are not directly exposed to the host.

Only the frontend container exposes a public port:

```
localhost:5173
```

---

## Future Evolution

The architecture will evolve into:

```
Docker Compose
        |
        v
Kubernetes
        |
        v
Helm
        |
        v
CI/CD Pipeline
        |
        v
AWS Infrastructure
```
