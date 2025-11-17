# 🐳 Podman Command Bible (Docker Equivalent Reference)

A complete cheat sheet covering **basic to advanced Podman commands** — mapped with **Docker equivalents** and **examples** for each scenario.

---

## 🧩 1. Basic Info & Help

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Check version | `docker --version` | `podman --version` | `podman --version` |
| View system info | `docker info` | `podman info` | `podman info` |
| View all subcommands | `docker help` | `podman help` | `podman help` |
| Help for specific command | `docker run --help` | `podman run --help` | `podman run --help` |

---

## 📦 2. Image Management

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| List local images | `docker images` | `podman images` | `podman images` |
| Search for image | `docker search nginx` | `podman search nginx` | `podman search nginx` |
| Pull image | `docker pull nginx` | `podman pull nginx` | `podman pull nginx` |
| Inspect image | `docker inspect nginx` | `podman inspect nginx` | `podman inspect nginx` |
| Remove image | `docker rmi nginx` | `podman rmi nginx` | `podman rmi nginx` |
| Build from Dockerfile | `docker build -t myapp .` | `podman build -t myapp .` | `podman build -t webapp .` |
| Tag image | `docker tag nginx mynginx:latest` | `podman tag nginx mynginx:latest` | `podman tag nginx nginx:v1` |
| Save image to tar | `docker save nginx > nginx.tar` | `podman save -o nginx.tar nginx` | `podman save -o web.tar webapp` |
| Load image from tar | `docker load < nginx.tar` | `podman load -i nginx.tar` | `podman load -i web.tar` |
| Push image to registry | `docker push repo/myapp` | `podman push repo/myapp` | `podman push docker.io/user/webapp` |

---

## 🧱 3. Container Lifecycle

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Run container | `docker run -d nginx` | `podman run -d nginx` | `podman run -d -p 8080:80 nginx` |
| Name container | `docker run --name web nginx` | `podman run --name web nginx` | `podman run -d --name myweb nginx` |
| Run interactively | `docker run -it ubuntu bash` | `podman run -it ubuntu bash` | `podman run -it fedora sh` |
| Stop/start/restart | `docker stop/start/restart` | `podman stop/start/restart` | `podman restart myweb` |
| Remove container | `docker rm web` | `podman rm web` | `podman rm myweb` |
| Prune stopped | `docker container prune` | `podman container prune` | `podman container prune` |

---

## 🧭 4. Inspecting Containers

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| List running containers | `docker ps` | `podman ps` | `podman ps` |
| List all containers | `docker ps -a` | `podman ps -a` | `podman ps -a` |
| View logs | `docker logs web` | `podman logs web` | `podman logs -f myweb` |
| Inspect details | `docker inspect web` | `podman inspect web` | `podman inspect myweb` |
| Resource usage | `docker stats` | `podman stats` | `podman stats` |
| Top processes | `docker top web` | `podman top web` | `podman top myweb` |

---

## ⚙️ 5. Executing in Containers

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Execute command | `docker exec web ls /` | `podman exec web ls /` | `podman exec myweb ls /usr` |
| Interactive shell | `docker exec -it web bash` | `podman exec -it web bash` | `podman exec -it myweb bash` |
| Copy files host→container | `docker cp file.txt web:/tmp/` | `podman cp file.txt web:/tmp/` | `podman cp app.py myweb:/app/` |
| Copy files container→host | `docker cp web:/tmp/file.txt ./` | `podman cp web:/tmp/file.txt ./` | `podman cp myweb:/logs ./` |

---

## 🌐 6. Networking

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| List networks | `docker network ls` | `podman network ls` | `podman network ls` |
| Create network | `docker network create mynet` | `podman network create mynet` | `podman network create backend` |
| Connect container | `docker network connect mynet web` | `podman network connect mynet web` | `podman network connect backend myweb` |
| Remove network | `docker network rm mynet` | `podman network rm mynet` | `podman network rm backend` |

---

## 📁 7. Volumes

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| List volumes | `docker volume ls` | `podman volume ls` | `podman volume ls` |
| Create volume | `docker volume create myvol` | `podman volume create myvol` | `podman volume create data` |
| Mount host dir | `docker run -v $(pwd):/app nginx` | `podman run -v $(pwd):/app nginx` | `podman run -v /data:/app nginx` |
| Inspect volume | `docker volume inspect myvol` | `podman volume inspect myvol` | `podman volume inspect data` |
| Remove volume | `docker volume rm myvol` | `podman volume rm myvol` | `podman volume rm data` |

---

## 🧰 8. System Cleanup

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Remove stopped containers | `docker container prune` | `podman container prune` | `podman container prune` |
| Remove unused images | `docker image prune` | `podman image prune` | `podman image prune -a` |
| Remove all unused | `docker system prune -a` | `podman system prune -a` | `podman system prune -a` |
| Disk usage summary | `docker system df` | `podman system df` | `podman system df` |

---

## 🧑‍💻 9. Compose & Pods

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Run multi-container app | `docker compose up` | `podman compose up` | `podman compose up -d` |
| Stop and remove | `docker compose down` | `podman compose down` | `podman compose down` |
| View logs | `docker compose logs` | `podman compose logs` | `podman compose logs -f` |
| Create pod | — | `podman pod create --name mypod -p 8080:80` | `podman pod create --name webpod -p 8080:80` |
| Run in pod | — | `podman run --pod mypod nginx` | `podman run --pod webpod redis` |

---

## 🧩 10. Advanced / DevOps Level

| Task | Docker | Podman | Example |
|------|---------|--------|----------|
| Commit container | `docker commit web myimage:v1` | `podman commit web myimage:v1` | `podman commit myweb webapp:v1` |
| Rename container | `docker rename old new` | `podman rename old new` | `podman rename test prod` |
| Export container | `docker export web > web.tar` | `podman export web > web.tar` | `podman export myweb > web.tar` |
| Import container | `docker import web.tar` | `podman import web.tar` | `podman import web.tar` |
| Attach to running | `docker attach web` | `podman attach web` | `podman attach myweb` |
| Check health | `docker inspect --format='{{.State.Health}}' web` | `podman inspect --format '{{.State.Health}}' web` | `podman inspect --format '{{.State.Health.Status}}' myweb` |

---

## 🧮 11. Security & Rootless Features (Podman Only)

| Task | Podman Command | Example |
|------|----------------|----------|
| Check rootless mode | `podman info | grep rootless` | `podman info | grep rootless` |
| Run as root | `sudo podman run ...` | `sudo podman run -d nginx` |
| Manage user service | `systemctl --user start podman.socket` | `systemctl --user enable --now podman.socket` |
| Generate systemd service | `podman generate systemd --name web` | `podman generate systemd --name myweb > web.service` |

---

## 🧾 12. Troubleshooting

| Task | Podman Command | Example |
|------|----------------|----------|
| View container logs | `podman logs <container>` | `podman logs -f myweb` |
| Inspect error events | `podman events` | `podman events` |
| Show system info | `podman system info` | `podman system info` |
| Debug container creation | `podman run --log-level=debug ...` | `podman run --log-level=debug nginx` |

---

## 🧠 Bonus Tips

```bash
# View container IP
podman inspect -f '{{.NetworkSettings.IPAddress}}' myweb

# Check filesystem diff
podman diff myweb

# Generate systemd autostart service
podman generate systemd --name myweb > ~/.config/systemd/user/container-myweb.service

# Enable auto-start
systemctl --user enable --now container-myweb.service
```

---

✅ **Tip:** Podman commands are 99% Docker-compatible — just replace `docker` with `podman` in most cases!
