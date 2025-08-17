# Docker Architecture & Commands (OCI DevOps Exam Focus)

## Core Components

- **Docker Client**: Interface for developers/DevOps to send commands.
- **Docker Daemon**: Background process managing images, containers, networks, volumes. Communicates with client via **REST APIs**.
- **Docker Registries**: Store/distribute images(os copys).
  - Public: Docker Hub, Docker Cloud
  - Private: OCI Container Registry (OCIR)

## Containers vs Virtual Machines

- **VMs**:
  - Require hypervisor, each with its own guest OS.
  - Large (GBs), slower startup (minutes).
  - Use when: need different OS, high isolation, strict security.
- **Containers**:
  - Share host OS kernel, isolated user spaces.
  - Lightweight (MBs), fast startup (seconds).
  - Higher density: 2–3× more apps per server.
  - Ideal for portability, speed, efficiency.

## Essential Docker Commands

- `docker run <image>` → Create/run container (`-p` ports, `-d` detach).
- `docker start <id|name>` → Start stopped container.
- `docker stop <id|name>` → Stop running container.
- `docker restart <id|name>` → Restart container.
- `docker inspect <id|name>` → Details of container.
- `docker logs <id|name>` → View logs.
- `docker ps` → List running containers (ps - process Status).
- `docker ps -a` → List all containers (running + stopped).
- `docker rm <id|name>` → Remove container.

---

**Exam Tip**: Focus on Docker architecture (client, daemon, registry), OCI registry (OCIR), container vs VM differences, and key Docker commands.
