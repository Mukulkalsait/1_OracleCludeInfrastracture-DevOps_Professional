===================================================================================================================================================

# B1_Microservice_arch_overview.md

===================================================================================================================================================

## Definition & Core Concept = microservice = 1. independent deployable services >communication> APIs (HTTP, gRPC, TCP/UDP) => independent development-deployment, scaling, and fault isolation.

    - Microservices = Decompose application functionality into
            1. independent deployable services
        communicating via
            2. APIs (HTTP, gRPC, TCP/UDP).
        Enableing
            3. independent development-deployment, scaling, and fault isolation.

## Key Characteristics = LooseCouple= isolation+repari without affecting other | Indipendent Deploy | PolyGlot (different lang per service) | service vise scabality | policies to save falure of service.

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

## Definition & Core Concept = microservice = 1. independent deployable services >communication> APIs (HTTP, gRPC, TCP/UDP) => independent development-deployment, scaling, and fault isolation.

## Key Characteristics = LooseCouple= isolation+repari without affecting other | Indipendent Deploy | PolyGlot (different lang per service) | service vise scabality | policies to save falure of service.
