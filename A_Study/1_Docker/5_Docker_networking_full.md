Exactly 👍 — you **cannot change the default network (`--network`) of a running container**.
But you **can connect/disconnect it from additional networks** while it’s running.
For example:
if i create a container with

```bash
docker run -d --name ubuntuX --network host ubuntu:latest #
```

it get created with host network which is default network.

```bash
docker network connect mynet ubuntuX   # add container to new network
docker network disconnect mynet ubuntuX  # remove container from network
```

So:

- The **primary network (given at `docker run`) is fixed**.
- But you can attach/detach extra networks dynamically.

---

Here’s the `.md` file you asked for 👇

```markdown
# Docker Network Commands Cheat Sheet

### Basics

- `docker network ls` → List all networks.
- `docker network inspect <network>` → Show details of a network.
- `docker network create <name>` → Create a new bridge network.
- `docker network create --driver bridge --subnet 192.168.5.0/24 mynet` → Create custom bridge network with subnet.

### Connecting / Disconnecting

- `docker network connect <network> <container>` → Connect a running container to a network.
- `docker network disconnect <network> <container>` → Disconnect a container from a network.

### Running with Networks

- `docker run -it --network bridge ubuntu` → Run in default bridge network.
- `docker run -it --network host ubuntu` → Run with host’s networking stack.
- `docker run -it --network none ubuntu` → Run with networking disabled.
- `docker run -it --network mynet ubuntu` → Run inside custom network.

### Managing

- `docker network rm <network>` → Remove a user-defined network.
- `docker network prune` → Remove all unused networks.

### Advanced

- `docker network create --driver overlay myoverlay` → Create an overlay network (requires Swarm).
- `docker network connect --alias db mynet mysql` → Connect with a custom alias hostname.

---

👉 Notes:

- Containers in the same user-defined bridge network can talk via **container name** as hostname.
- The **primary network** assigned at `docker run` cannot be changed later, but you can **attach/detach secondary networks** dynamically.
```

---

Do you want me to also add **practical ping/test examples** (like running two Ubuntu containers in different networks and testing communication) in that `.md` so you can practice hands-on?

---

## 🐳 Docker Networking Concepts

### 1. **Bridge Network (default)**

- Default network driver when you run `docker run` without `--network`.
- Each container gets a private IP (usually `172.17.x.x`).
- Containers on the same bridge can talk to each other via IP.
- **User-defined bridge networks** are more powerful → they provide **automatic DNS-based service discovery** (you can use container names instead of IPs).

  ```bash
  docker network create mynet
  docker run -it --network mynet --name app1 ubuntu
  docker run -it --network mynet --name app2 ubuntu
  # inside app1:
  ping app2    # works by name
  ```

---

### 2. **Host Network**

- Container shares the **host’s network namespace**.
- No isolation → container’s ports = host’s ports.
- Useful for performance-sensitive apps (like databases, monitoring agents).
- Example:

  ```bash
  docker run -d --network host nginx
  # nginx will bind directly to localhost:80 of host
  ```

---

### 3. **Overlay Network**

- Multi-host networking driver.
- Lets containers running on different Docker hosts talk to each other (requires **Docker Swarm** or another orchestrator).
- Useful in clustering / distributed setups.
- Example:

  ```bash
  docker swarm init
  docker network create --driver overlay myoverlay
  docker service create --name web --network myoverlay nginx
  ```

---

### 4. **Service Discovery (via container names)**

- On user-defined bridge or overlay networks, Docker provides an **internal DNS**.
- Containers can resolve each other’s **names** automatically.
- Example:
  - Run `db` and `web` containers in the same custom network.
  - Inside `web`, you can connect to DB using `db:5432` instead of IP.

---

### 5. **Exposing Ports vs Internal Networking**

- **Exposing/Publishing Ports** = make a container’s port reachable from outside Docker.
  - `docker run -p 8080:80 nginx` → maps host `8080` → container `80`.
  - Required if you want to access services from your host or internet.

- **Internal Networking** = containers in the same network can talk without publishing ports.
  - `docker run --network mynet --name app nginx`
  - Another container in `mynet` can do `curl http://app:80` without needing `-p`.

---

## 📝 Add to Cheat Sheet (`network.md`)

```markdown
# Docker Networking Concepts

### Network Types

- **Bridge (default)** → Isolated private network, containers get `172.x.x.x` IPs.
- **User-defined Bridge** → Adds DNS-based service discovery (containers reach each other via names).
- **Host** → Shares host’s network stack, no isolation.
- **Overlay** → Multi-host networking for Docker Swarm / clusters.
- **None** → Completely disable networking (only loopback works).

### Service Discovery

- Containers in the same user-defined bridge/overlay network can resolve each other by **name**.
- Example: `ping app2` inside `app1`.

### Ports

- `-p host:container` → Publish ports to host.  
  Example: `docker run -p 8080:80 nginx` → access on `http://localhost:8080`.
- No `-p` needed for containers talking internally on the same Docker network.

---
```

---

👉 Do you want me to also make a **mini-lab demo** in `.md` (step-by-step run 2–3 containers, test bridge, host, service discovery, and port publishing), so you can practice them hands-on?
