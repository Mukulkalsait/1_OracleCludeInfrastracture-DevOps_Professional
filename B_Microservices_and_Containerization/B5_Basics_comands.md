# Docker Basic Commands – OCI DevOps Exam Notes

## Environment

- **Cloud Shell**: Preconfigured Docker available.
- **Check version**: `docker -v`

## Core Commands

- **Run container**:
  - `docker run <img>` → Pulls if not local, runs container.
  - `docker run -it busybox sh` → Interactive shell.
  - `docker run -d -p <host_port>:<cont_port> <img>` → Detached + port mapping.

- **List**:
  - `docker ps` → Running containers.
  - `docker ps -a` → All containers (running + stopped).
  - `docker images` → List images.

- **Remove**:
  - `docker rm <cont_id>` → Remove container.
  - `docker rmi <img>` → Remove image.

- **Start/Stop/Restart**:
  - `docker stop <cont_id>`
  - `docker start <cont_id>`
  - `docker restart <cont_id>`

## Networking & Access

- **Port mapping**: `-p host:container`
- **Check mapping**: `docker port <cont_id>`
- **Test connectivity**: `curl localhost:<port>`

## Logs & Info

- **Logs**: `docker logs <cont_id>`
- **Inspect**: `docker inspect <cont_id>` → Detailed config (state, CPU, memory, network, etc.).
- **Processes**: `docker top <cont_id>`

## Exec & Access

- **Run cmd in container**:  
  `docker exec -it <cont_id> <cmd>`
  - Example: `docker exec -it <cont_id> sh` → Shell access.
  - `exit` → Leaves + stops shell (container may stop).
  - `Ctrl+D` → Leaves shell but keeps container running.

## Key Notes for Exam

- **docker run** auto-pulls image if missing.
- **-it** = interactive terminal, **-d** = detached.
- **Containers have ID + auto-generated name.**
- **docker inspect** often tested (resource details, commands, networking).
- **Lifecycle**: run → stop/start → restart → remove.
