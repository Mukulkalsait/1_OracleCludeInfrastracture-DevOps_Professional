====================================================================================================================================

# DevOps Overview – Key Exam & Practice Notes

====================================================================================================================================

## models: waterfall -> Agile -> scrum -> devops

    Waterfall: linear dev | stage by stage | returning to previous stage is hard, costly | best for building bridge or tower.
    Agile: flexible , iterative , adaptable | Accommodate changes & collab.
    Scrum: Sprints of Agile.
    DevOps: Collab + communication in development and operation team. => faster release | frequent developement | faster error resolvement => low risk of error.

## Story Context – Why DevOps? =

    Waterfall -> agile |
    $DEV: tight deadlines (code/bugfix, slow release) vs $OPS: resource content, constant redesign,rapid issue resolvement, customer demands |
    $DEV Wants frequent changes $OPS Wants Stability.

## What is DevOps? = continous delivery | collabaration dev+ops | Automation + programmable infra | fast release | ++quality | Agile+lean+OS oreanted. | Rapid Delivery.

## Why DevOps Matters => Unifide Infra & Workflow | + productivity, +Efficiency, +security | Dynamic Life Cycle | low error-> reduce reword | release frequency

## Dev Side: PCBT

1. Plan – Requirements, backlog, sprint planning.
2. Code – Develop features & fixes.
3. Build – Compile.
4. Test – Automated/manual.

## Ops Side: RDOM

5. Release – Approve & prepare for production.
6. Deploy – Push to production safely.
7. Operate – Manage live systems.
8. Monitor – Observe performance, collect feedback.

## CI, CD, and Continuous Everything => agile dev| CI-requent integration+ detect issues early CD-Automated Delivery | + continous Monitoring(stability improvement) |

- DevOps => CI + CD + Continuous Testing + Continuous Monitoring + Continuous Feedback → end-to-end business solution.

## Benefits of DevOps=> HIGI - Connection, engagement & colab | ++quality ++fastIssueResolv ++stability ++release ++flexibility ++innovation ++Predictability | --Cost --time |

====================================================================================================================================

# OCI DevOps Service – Key Points for Development & Examination

====================================================================================================================================

## DevOps Cloud => Cloud-Centric Auto. | pub/pri reop + CI/CD | --cost | ++governance ++control | Pipelines for => ( code_management | bug Tracking | Auto Testing | Deploy | Monitor )

## DevOps Cloud Benefits => --Time --Effort | no infra setup + pre_build Solutions=MicroService | ++colab | Automate full DevOps Cycle | --cost (devlop,test,deploy,operation) | ++Tracking of cost.

## OCI Services =>

          a. Code:  E2E CI/CD , building, testing, dev of OCI | pub/pri repo | git/lab/bitBucket/cloud integration |
          b. Build_pipeline: Trigger on commits, pull request | automated Builde & test.
          c. Deploy_pipeline: OKE_&_OKE_fn, Instances | Scalability ( Concurent Build ) | external(git)_&_internal_service(/VMs/Vault/OKE/) integration | Safe Deploy Stretergi | ++speed delivery | --Cost |
          d. OCI Monitoring: tracks ( CPU, memory, network, response )
          e. OCI Events Service → triggers actions/functions on events.
          f. OCI Logging → stores application/system logs.
          g. OCI Notifications → sends alerts on anomalies.
          h. Proactive anomaly detection & performance tuning.

====================================================================================================================================

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
