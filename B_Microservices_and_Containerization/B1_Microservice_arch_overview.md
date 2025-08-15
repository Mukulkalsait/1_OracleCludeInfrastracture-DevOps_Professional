===================================================================================================================================================

# B1_Microservice_arch_overview.md

===================================================================================================================================================

## Definition & Core Concept

    - Microservices = Decompose application functionality into
            1. independent
            2. deployable
            3. services
        communicating via
            4. APIs (HTTP, gRPC, TCP/UDP).
        Enableing
            5. independent development, deployment, scaling, and fault isolation.

## Key Characteristics

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

4. Microservices vs. Monolithic Architecture
   Aspect Microservices Monolithic
   Unit Design Loosely coupled services Single unit
   Functionality Reuse API-driven Limited
   Communication REST/gRPC Internal function calls
   Tech Flexibility Multiple languages One language
   Data Management Decentralized DB Centralized DB
   Deployment Independent All-at-once
   Maintainability Easier Complex
   Resilience High Low
   Scalability Independent per service Whole app only
