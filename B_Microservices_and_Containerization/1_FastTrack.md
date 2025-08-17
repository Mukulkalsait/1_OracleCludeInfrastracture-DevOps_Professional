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
