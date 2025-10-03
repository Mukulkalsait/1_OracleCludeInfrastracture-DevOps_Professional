## Dockerfile:

```lua
  FROM Create a new build stage from a base image.
  RUN Execute build commands.
  WORKDIR Change working directory.
ADD Add local or remote files and directories.
ARG Use build-time variables.
CMD Specify default commands.
COPY Copy files and directories.
ENTRYPOINT Specify default executable.
ENV Set environment variables.
EXPOSE Describe which ports your application is listening on.
HEALTHCHECK Check a containers health on startup.
LABEL Add metadata to an image.
MAINTAINER Specify the author of an image.
ONBUILD Specify instructions  for_when the image is used in a build.
SHELL Set the default shell of an image.
STOPSIGNAL Specify the system call signal for_exiting a container.
USER Set user and group IDs.
VOLUME Create volume mounts.
```

## Core Concepts

- Docker Image: Read-only snapshot of a container.
- Docker Container: Executable package with software and dependencies.
- Docker Client: Tool to interact with Docker.
- Docker Daemon: Service managing Docker objects.
- Docker Registry: Storage for Docker images.

Perfect 👌 you’re at the stage where you know the **basics of Docker** (run, build, compose, Dockerfile, multistage builds).
If you want to go **deep** (DevOps-level mastery), you’ll need to cover:

---

## 🔹 `docker run` – Full Options (Important Flags)

You already know the most common ones. Here’s a deeper list:

<!-- Y: Basic-->

- `docker run <name> <any COMMAND of os> atribute` -> directly pass COMMAND inside the os.
- `--name <name>` → Name container.

- `-d, --detach` → Run in background.
- `-i` → Keep STDIN open && `-t` → Allocate TTY (usually used as `-it`).

- `--rm` → Remove container on exit.

- `-p, --publish hostPort:containerPort` → Publish container ports.

- `--network <network>` → Attach to a network.

<!-- IMP: USED IMP -->

- `-e, --env KEY=VALUE` → Set env vars.
- `--env-file <file>` → Load env vars from file.

- `-v, --volume <host:container>` → Mount a volume.
- `--mount type=bind|volume|tmpfs,...` → More advanced mounting.

- `--network-alias <alias>` → Alias inside custom networks.
- `--ipc` → Share IPC namespace.
- `--pid` → Share PID namespace.
- `--hostname` → Set hostname.

- `--workdir <dir>` → Set working directory.

<!-- G: Optimese -->

- `--cpus <n>` → Limit CPU usage.
- `-m, --memory <bytes>` → Limit memory usage.
- `--restart no|on-failure|always|unless-stopped` → Restart policy.
- `--health-cmd`, `--health-interval`, `--health-retries`, `--health-timeout` → Health checks.
- `--log-driver`, `--log-opt` → Configure logging.

<!-- DX: Addvanced Privilegeds -->

- `--privileged` → Give full access to host (dangerous).
- `--user <uid:gid>` → Run as a different user.

- `--entrypoint <command>` → Override default entrypoint.
- `--device <hostDev:containerDev>` → Give container access to host device (e.g. GPU).
- `--gpus all|<count>` → Run with GPU access (NVIDIA).

- `--cap-add / --cap-drop` → Add/remove Linux capabilities.

👉 Pro tip: run `docker run --help` for **all 100+ flags**.

---

## 🔹 `docker build` – Full Options

Used to build Docker images from a Dockerfile.

- `-t, --tag name:tag` → Name/tag image.
- `-f, --file <path>` → Specify Dockerfile.
- `--build-arg key=value` → Pass build arguments.
- `--target <stage>` → Target stage (for multi-stage builds).
- `--no-cache` → Ignore build cache.
- `--pull` → Always pull base image.
- `--network <mode>` → Network during build.
- `--secret id=mysecret,src=secret.txt` → Pass secrets securely (BuildKit).
- `--ssh default` → Forward SSH keys (BuildKit).
- `--progress plain|tty` → Control build output.
- `--platform linux/amd64,linux/arm64` → Cross-build multi-arch images.

👉 Use **BuildKit** (`DOCKER_BUILDKIT=1 docker build ...`) for more advanced builds.

---

## 🔹 `docker compose` – Key Features

Docker Compose manages **multi-container apps**.

Commands:

- `docker compose up -d` → Start services in background.
- `docker compose down` → Stop & remove containers, networks, volumes.
- `docker compose logs -f` → View logs.
- `docker compose ps` → Show running services.
- `docker compose exec <service> <cmd>` → Exec inside a running container.
- `docker compose build` → Build services.
- `docker compose pull` → Pull images.

YAML features you should know:

- `services`: Containers (image, build, ports, env, volumes, restart).
- `volumes`: Named/shared volumes.
- `networks`: User-defined networks.
- `depends_on`: Define container startup order.
- `secrets` & `configs`: Secure storage.
- `profiles`: Enable/disable optional services.
- `deploy` (in Swarm/K8s): Replicas, resources, placement.

---

## 🔹 Other Important Docker Concepts

If you’re going **DevOps**, you need more than `run` and `build`:

1. **Volumes & Persistent Storage**
   - Bind mounts vs Named Volumes. ✅
   - Sharing data across containers.

2. **Networking**
   - Bridge (default), host, overlay.
   - Service discovery (via container names).
   - Exposing ports vs internal networking.

3. **Image Optimization**
   - Small base images (`alpine`, `distroless`). ✅
   - Multi-stage builds. ✅
   - Layer caching. ✅

4. **Security**
   - Drop root privileges (`USER` in Dockerfile).
   - Use `--read-only` filesystem.
   - Scan images (`docker scan`, Trivy, Grype).
   - Secrets management (not plain ENV vars).

5. **Docker Swarm & Orchestration** (basic before Kubernetes)
   - `docker swarm init`, `docker service create`, `docker stack deploy`.
   - Rolling updates.
   - Scaling (`docker service scale`).

6. **Monitoring & Logging**
   - `docker stats`, `docker logs`.
   - Log drivers (json-file, syslog, fluentd, etc.).

7. **Registry Management**
   - Pushing/pulling from Docker Hub, GHCR, ECR, GCP.
   - Running your own registry.

---

## 🔹 Beyond Docker – For DevOps Role

Docker is **entry-level containerization**. To go deeper for **DevOps**, you should learn:

- **Container Orchestration** → Kubernetes (k8s) is the real deal after Docker.
- **CI/CD Pipelines** → Integrating Docker builds with GitHub Actions, GitLab CI, Jenkins, ArgoCD.
- **Cloud-native Tools** → Helm, Kustomize, Operators.
- **Service Mesh** → Istio, Linkerd.
- **Container Security** → Trivy, Clair, Aqua.
- **Observability** → Prometheus, Grafana, ELK/EFK stack.

---

✅ So your roadmap if you want to become **DevOps-ready with Docker**:

1. Master `docker run`, `docker build`, `docker compose` (all flags + tricks).
2. Learn advanced **Dockerfile writing** (multi-stage, security, optimization).
3. Get deep into **volumes, networks, logging, and healthchecks**.
4. Practice **docker-compose for real apps** (DB + backend + frontend).
5. Try **Swarm** → then move to **Kubernetes**.
6. Explore **CI/CD integration** and **monitoring**.

---

Would you like me to make you a **Docker → DevOps roadmap (step-by-step)** so you know what to learn in which order?
