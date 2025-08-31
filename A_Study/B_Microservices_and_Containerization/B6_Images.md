# Dockerfile & Image Management – OCI DevOps Exam Notes

## Dockerfile Basics

- **Definition**: Text file defining a Docker image (custom runtime env).
- **Build**: `docker build -t <image_name> <path>`
- **Purpose**: When base images don’t meet requirements.

## Key Instructions

- `FROM <image>` → Base image (or `scratch`).
- `RUN <cmd>` → Execute command during build.
- `WORKDIR <path>` → Set working directory.
- `COPY <src> <dest>` → Copy files into image.
- `ENV <key>=<value>` → Define env vars.
- `EXPOSE <port>` → Open container port.
- `CMD ["executable", "arg"]` → Default container run command.
- `ENTRYPOINT ["executable", "arg"]` → Command with arguments, can combine with CMD.
- `LABEL key=value` → Metadata (e.g., maintainer).

## Image & Container Commands

- **Pull image**: `docker image pull <name>`
- **Build from Dockerfile**: `docker build -t <name> .`
- **Commit running container → image**:  
  `docker commit <container_id> <image_name>`
- **Tag image**: `docker tag <src_img> <repo>/<target_img>:<tag>`
- **Push image to Hub**:
  - Login: `docker login`
  - Push: `docker image push <repo>/<img>:<tag>`
- **List images**: `docker image ls` or `docker images`
- **Remove image**: `docker image rm <img>` or `docker rmi <img>`

## Key Notes for Exam

- **Dockerfile = Blueprint** for images.
- **Image Lifecycle**: build → tag → push → pull → run.
- **CMD vs ENTRYPOINT**: CMD = default args, ENTRYPOINT = main command.
- **Labels & ENV** often appear in OCI exam Qs.
