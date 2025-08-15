Vision Stays – Key Architecture Points for OCI DevOps Role
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
