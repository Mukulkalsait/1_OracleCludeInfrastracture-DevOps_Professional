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
