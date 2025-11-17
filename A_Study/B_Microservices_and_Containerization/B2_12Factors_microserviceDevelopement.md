# Microservices Design & 12-Factor App Methodology – Summary

## 12-Factor App Principles (Heroku, 2011)

1. **Codebase** – One repo per service; independent CI/CD.
2. **Dependencies** – Explicit via package managers (Maven, Gradle, Dockerfile).
3. **Configuration** – Externalize configs (env variables, Ansible, Chef).
4. **Backing Services** – Replace providers via config only (DB swap example).
5. **Build/Release/Run** – Separate stages; Docker images as artifacts.
6. **Processes** – Stateless services; store state in Redis/Memcached.
7. **Port Binding** – Services self-contained; access via APIs only.
8. **Concurrency** – Prefer horizontal scaling (containers).
9. **Disposability** – Fast start/stop, minimal crash impact.
10. **Dev/Prod Parity** – Keep environments similar (containers help).
11. **Logs** – Stream logs centrally (observability, monitoring).
12. **Admin Processes** – Separate admin tasks (cleanup, analytics, A/B testing).

---

## Benefits of Microservices

- **Loosely coupled, business-oriented components** → independent dev, replace, scale.
- **Polyglot programming** & parallel team development → higher productivity.
- **Fault tolerance & isolation** → one failure doesn’t stop system.
- **Horizontal scalability** → duplicate services, avoid bottlenecks.
- **Simplified security** → isolation improves monitoring & threat control.
- **Autonomous teams** → focus on specific services/features.

---

## Drawbacks of Microservices

- **Complex communication** (many services, secure interactions).
- **Higher costs** (infra, security, skilled teams).
- **Cultural shift** required (mature Agile/DevOps needed).
- **Debugging complexity** (distributed logs, tracing issues).
- **Difficult global testing** (unit easy, integration harder).

---

## Exam Notes (OCI DevOps Context)

- **12-factor app** aligns with microservices + OCI DevOps CI/CD practices.
- **OCI DevOps** automates build, release, deploy, monitor → matches 12-factor best practices.
- **Key focus areas**:
  - Stateless services, horizontal scaling, automation.
  - Externalized config & portability.
  - Monitoring & logs → observability.
  - Canary/blue-green deployments reduce risk.
