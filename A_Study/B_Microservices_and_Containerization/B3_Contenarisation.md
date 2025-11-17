# Containerization Overview (OCI DevOps Exam Focus)

## What is Containerization?

- **Form of Virtualization** → runs apps in isolated user spaces (containers) sharing the **same OS kernel**.
- **Container Engine** = runtime that manages creation, deployment, execution.

## Key Concepts

- Container = portable, self-contained package (binaries, libraries, configs, dependencies).
- Runs consistently across **bare metal, VMs, cloud**.\
- Lightweight → no guest OS, fast startup.

## Difference: Containers vs Virtual Machines

- **VMs** → heavy, each has full OS.\
- **Containers** → share host OS, isolated user space, lightweight.

## Benefits

- **Portability**: uniform across environments/platforms .\
- **Efficiency**: reduced cost, fast start, better server utilization, reusable layers + OS kernel share.\
- **Speed**: light weight, low cost, low resources.\
- **Agility**: Open source Engin => cross platfor flexible.\
- **Fault Isolation**: one container fails, others unaffected, reliable falut isolation.\
- **Scalability**: orchestration (e.g., Kubernetes) automates deployment & management.\
- **Security**: isolation & permissions safeguard infra.\
- **Ideal for microservices** architecture.

## OCI Relevance

- Containers widely used in **OCI DevOps pipelines** for CI/CD.\
- **Kubernetes (OKE)** handles orchestration & scaling.\
- Ensures faster deployments, agility, and cloud-native compatibility.

---

**Exam Tip**: Focus on differences from VMs, role of container engine, benefits (portability, efficiency, isolation), and orchestration (Kubernetes in OCI).
