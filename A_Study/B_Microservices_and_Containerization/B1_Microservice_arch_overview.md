===================================================================================================================================================

# B1_Microservice_arch_overview.md | microservice => Intigration | Api management | Cloud Deployment

===================================================================================================================================================

## Definition & Core Concept = microservice = 1. independent deployable services >communication> APIs (HTTP, gRPC, TCP/UDP) => independent development-deployment, scaling, and fault isolation.

    - Microservices = Decompose application functionality into
            1. independent deployable services
        communicating via
            2. APIs (HTTP, gRPC, TCP/UDP).
        Enableing
            3. independent development-deployment, scaling, and fault isolation.

## Key Characteristics = LooseCouple(not much dependent on other)= isolation + repair without affecting other | Independent Deploy | PolyGlot (different lang per service) | service vise scalability | policies to save failure of service.

    1. Loose coupling → Isolate services, address slowdowns without affecting others.
    2. Independent deployability → Change/redeploy only the affected service.
    3. Polyglot development → Different services can use different programming languages & frameworks.
    4. Scalable & highly available → Scale individual services; use load balancers & API gateways.
    5. Failure resistance → Fault-tolerance policies prevent cascading failures.

## Architecture Layers

    API Layer – Entry point for client requests & inter-service communication.
    Logic Layer – Business functionality (independent per service, multilingual possible).
    Data Store Layer – Separate persistence for each service (decentralized databases).
    Containerization & Orchestration – Each service in its own container; managed by Kubernetes or similar.

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

===================================================================================================================================================

# Microservices Communication Mechanisms – Summary

## communication: |distributed | each with own instance | communication on Network Layer => http/https, gRPC , AMQP (kafka, RabbitMQ) |

## Classification Criteria:

      A. Protocol type [Sync=> HTTP/S, gRPC | req/response pattern (client waits.) | eg REST API.] [A-Sync => | Non-blocking | AMQP(Addvanced Message Queuing Protocol) | Kafka & RabbitMQ | ++Scalability. ]
      B. Receiver Number (single/multiple) [SingleReciever => 1 req = 1 service | eg. command] [Multiple Receiver=> Broadcasts updates/event. (event driven architec messageing agent, bus interface.)]

## 3. Key Considerations: |Network traffic => high -> optimized | Serialization format | payload size | Speed.| ++gRPC internal-service-communication: (binary,highPerformance,smallPayload)

## CommonPractice: combination of communication styles | mostly - single receiver+A-Sync protocol(http/https)

===================================================================================================================================================

## 1. Nature of Communication

- Microservices are **distributed** in nature.
- Each service has its **own instance & process**.
- Communication occurs over the **network layer**.
- Common protocols:
  - **HTTP / HTTPS**
  - **gRPC**
  - **AMQP** (via message brokers: Kafka, RabbitMQ)

---

## 2. Classification Criteria

### A. Based on Protocol Type

1. **Synchronous Communication**
   - Protocols: HTTP, HTTPS, gRPC
   - **Request/Response** pattern – client waits (blocks) until response.
   - Example: REST API calls.

2. **Asynchronous Communication**
   - Non-blocking.
   - Protocol: AMQP (Advanced Message Queuing Protocol).
   - Uses message brokers (Kafka, RabbitMQ).
   - Suitable for high scalability & decoupling.

---

### B. Based on Number of Receivers

1. **Single Receiver**
   - One service processes each request.
   - Example: Command Pattern.

2. **Multiple Receivers**
   - Broadcasts updates/events to multiple services.
   - Example: Event-Driven Architecture (via event bus or message broker).

---

## 3. Key Considerations

- **Network traffic** can be high → optimize:
  - Serialization format
  - Payload size
  - Speed
- **gRPC** recommended for **internal service communication** due to:
  - Binary protocol
  - High performance
  - Small payloads

---

## 4. Common Practice in Microservices

- Combination of communication styles is common.
- Most popular: **Single Receiver** + **Asynchronous Protocol** (HTTP/HTTPS widely used).

---
