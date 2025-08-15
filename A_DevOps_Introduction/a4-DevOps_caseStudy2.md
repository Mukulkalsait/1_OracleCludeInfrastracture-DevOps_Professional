====================================================================================================================================

# CaseStudy: Architecture on OCI DevOps Infra

====================================================================================================================================

## Core :

### Microservices: 1. Costumer (Costumer Info) 2. Business ( Bus. Info ) 3. Booking/(3rd party handle) | >>> Each containerized (OKE) + Deployed.

## Integration & Access:

    - SERVERLESS : Hotel Details.
    - API : Control secure Backend.
    - DB : OCI DB = JSON
    - Notifications & Messaging: Admin and user (email/message).
    - OCI Vault: sensitive Cred.

## Frontend & Networking: VM Hosting | Load Balancer | OCI - Web App Firewall.

## DevOps Implementation: OCI repo | CICD | push/commit -build triggers | Pipelines | Blue-Green & canary build -> no downtime.

## Monitoring_Observation:

====================================================================================================================================

# Vision Stays – Key Architecture Points for OCI DevOps Role

====================================================================================================================================

Core Components

    Three Microservices:
        Customer Service – stores customer details
        Hotel Service – manages hotel info
        Booking Service – handles reservations
    Containerization & Orchestration: Each microservice is containerized and deployed to OKE (OCI Kubernetes).

Integration & Access

    Serverless Functions:
        create-booking-function
        get-hotel-details-function
    Secured via API Gateway → Controls and secures access to backend microservices.
    Database: Oracle Autonomous JSON Database for all microservice data.
    Notifications & Messaging:
        OCI Notifications – email alerts for hotel admin.
        OCI Streaming – stores messages for later analysis.
    Sensitive Credentials → Stored in OCI Vault.

Frontend & Networking

    Frontend hosted on OCI Compute VM.
    Load Balancer → distributes traffic.
    OCI Web Application Firewall (WAF) → protects from web threats.

DevOps Implementation

    Code Repo: OCI DevOps Code Repository.
    CI/CD Pipelines:
        On commit → build triggers.
        Builds → create artifacts/container images → stored in OCI Artifact/Container Registry.
        Deployment pipelines pull from registry → deploy latest version.
    Deployment Strategies: Blue-Green & Canary for minimal downtime.

Monitoring & Observability

    OCI Monitoring → tracks CPU, memory, network, response times.
    OCI Events Service → triggers actions/functions on events.
    OCI Logging → stores application/system logs.
    OCI Notifications → sends alerts on anomalies.
    Proactive anomaly detection & performance tuning.
