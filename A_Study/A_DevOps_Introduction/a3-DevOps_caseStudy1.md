# OCI Cloud Native Development – Vision Stays Case Study Summary

====================================================================================================================================

## CASE

    -  Requirment:static website -> booking functionality + third-party integration API's
    -  Solution: for scalability, agility, and maintainability Migration to OCI Cloud Native Architecture.

## Migration & Hosting

    - Static -> OCI instance.( HOST - Frontend,Media ) + Performance.
    - Load Balancer -> request Distribution in backend VM's + SSL termination, Session Persistency , Routing.
    - IAM Policies -> Secure Access | Roles | Privileges | Tracking.

## Transition -> Cloud_Native

    - Microservices => centered app -> microservice | improve scalability.
    - Containerization => Kubernetes (OKE) -> Auto Scalling.
    - Serverless fn() => OCI fun + event driven task.
    - Storage => img/Artifact -> Container_&_atrifact Registry | security.

## Integration & API Management

    - API Gateway -> Centralized access + microservice | Authenticat + Authorization, rate Limiting, routing.
    - Auto DB (SERVERLESS MICROSERVICE) -> persistencey | self-driven (scalling , patching).
    - WAF ( Web App Firewall ) -> OWASP_vulnerablity Protections.

## DevOps Automation

## DevOps Automation => CICD | Templates | Rolling Updates | blue-green deployments

## Advanced Architecture Features

    - OCI Service Mesh(microservice management )
    - OCI Logging & Notifications(Logging management + alert)
    - OCI Vault (Encrypt + Manage) credentials.

====================================================================================================================================

1.  Context & Requirements
    Client: Vision Stays (hotel chain) – currently a static website.
    Goal: Add hotel booking functionality + third-party integration for room availability & booking.
    Approach: Migrate to OCI Cloud Native architecture for scalability, agility, and maintainability.

2.  Migration & Hosting

    Step 1 – Migrate static site to OCI Compute Instance:
    Host HTML, CSS, JS, media assets.
    Utilize OCI Compute VM for reliability & performance.

    OCI Load Balancer:
    Distributes requests across backend VMs.
    Features: SSL termination, session persistence, content-based routing.

    IAM Policies:
    Secure resource access.
    Restrict roles & enforce least privilege.

3.  Transition to Cloud Native Architecture

    Microservices Approach: Break monolithic app into independent services for scalability & agility.
    Containerization: Deploy in OCI Container Engine for Kubernetes (OKE) for orchestration & auto-scaling.
    Serverless Functions: Use OCI Functions for event-driven lightweight tasks.
    Storage for Images/Artifacts: OCI Container Registry & OCI Artifact Registry for secure storage & distribution.

4.  Integration & API Management

    OCI API Gateway:
    Centralized API access for microservices.
    Handles authentication, authorization, rate limiting, routing.

    Autonomous Database (Serverless):
    Persistent data storage for microservices.
    Self-driving (provisioning, scaling, patching).

    Web Application Firewall (WAF):
    Protects against OWASP Top 10 vulnerabilities.

5.  DevOps & Automation

    OCI DevOps Project: CI/CD automation from development to deployment.
    OCI Resource Manager: Infrastructure as Code (IaC) with templates for repeatable deployments.
    Deployment Strategies: (Implied) Support for rolling updates, blue-green deployments.

6.  Advanced Architecture Features

    OCI Service Mesh: Secure, reliable, observable communication between microservices.
    OCI Logging & Notifications: Centralized logging for observability. Alerts for incidents.
    OCI Vault: Encrypt and manage sensitive credentials.

✅ Exam & Job Role Focus for OCI DevOps:

    Migration strategy (static → cloud native).
    Microservices + OKE deployment flow.
    CI/CD integration with OCI DevOps Project.
    Use of API Gateway + WAF for security.
    Autonomous DB for persistence.
    Observability (Logging, Notifications, Service Mesh).
    Security (IAM, Vault).
    Infrastructure automation with Resource Manager.
