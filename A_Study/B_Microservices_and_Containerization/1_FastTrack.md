===================================================================================================================================================

# B1_Microservice_arch_overview.md

===================================================================================================================================================

## Definition & Core Concept = microservice = 1. independent deployable services >communication> APIs (HTTP, gRPC, TCP/UDP) => independent development-deployment, scaling, and fault isolation.

## Key Characteristics = LooseCouple(not much dependent on other)= isolation + repair without affecting other | Independent Deploy | PolyGlot (different lang per service) | service vise scalability | policies to save failure of service.

## Microservices vs. Monolithic Architecture

    ASPECT                  MICROSERVICES                   MONOLITHIC
    UNIT DESIGN             Loosely coupled services        Single unit
    FUNCTIONALITY REUSE     API-driven                      Limited
    COMMUNICATION           REST/gRPC                       Internal function calls
    TECH FLEXIBILITY        Multiple languages              One language
    DATA MANAGEMENT         Decentralized DB                Centralized DB
    DEPLOYMENT              Independent                     All-at-once
    MAINTAINABILITY         Easier                          Complex
    RESILIENCE              High                            Low
    SCALABILITY             Independent per service         Whole app only

## Microservices Communication Mechanisms – Summary

### communication: |distributed | each with own instance | communication on Network Layer => http/https, gRPC , AMQP (kafka, RabbitMQ) |

### Classification Criteria:

      A. Protocol type [Sync=> HTTP/S, gRPC | req/response pattern (client waits.) | eg REST API.] [A-Sync => | Non-blocking | AMQP(Addvanced Message Queuing Protocol) | Kafka & RabbitMQ | ++Scalability. ]
      B. Receiver Number (single/multiple) [SingleReciever => 1 req = 1 service | eg. command] [Multiple Receiver=> Broadcasts updates/event. (event driven architec bus message broker.)]

### 3. Key Considerations: |Network traffic => high -> optimized | Serialization format | payload size | Speed.| ++gRPC internal-service-communication: (binary,highPerformance,smallPayload)

### CommonPractice: combination of communication styles | mostly - single receiver+A-Sync protocol(http/https)

===================================================================================================================================================

# Microservices Design & 12-Factor App Methodology – Summary

## 12-Factor App Principles (Heroku, 2011)

1. **Codebase** – 1Repo-1Service independent CI/CD;
2. **Dependencies** – Explicit pkg.mgt - (Maven, Gradle, Dockerfile).
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
