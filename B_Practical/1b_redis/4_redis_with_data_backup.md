Excellent idea 💡 — this will teach you **why volumes are important in Docker** (containers are ephemeral, but volumes persist data). Let’s walk through it step by step with Redis:

---

## 🔹 Step 1: Run Redis with a Volume

```bash
docker run -d --name redis1 \
  -v redis_data:/data \
  redis redis-server --appendonly yes
```

- `-v redis_data:/data` → creates a named volume (`redis_data`) mapped to Redis data folder.
- `--appendonly yes` → enables Append Only File (AOF), so Redis writes data changes to disk.

---

## 🔹 Step 2: Add Some Data

```bash
docker exec -it redis1 redis-cli
SET name "Mukul"
SET lang "Rust"
GET name
GET lang
```

Now data is saved inside the volume.

---

## 🔹 Step 3: Delete the Container (Data Safe in Volume)

```bash
docker stop redis1
docker rm redis1
```

⚡ Volume `redis_data` still exists — deleting a container does not delete volumes.

---

## 🔹 Step 4: Start New Container Using Same Volume

```bash
docker run -d --name redis2 \
  -v redis_data:/data \
  redis redis-server --appendonly yes
```

---

## 🔹 Step 5: Check the Data Again

```bash
docker exec -it redis2 redis-cli
GET name   # should return "Mukul"
GET lang   # should return "Rust"
```

✅ You’ll see your old data back — even though container `redis1` was deleted.

---

## 🔹 Key Takeaways

- Containers are **disposable**.
- Data persistence = use **volumes** or **bind mounts**.
- Named volumes (`-v name:/path`) live until you manually `docker volume rm`.
- This is exactly how databases (Redis, Postgres, MySQL) are run in production.

---

👉 Want me to also show you **how to inspect the volume directly** (see files Redis writes, like `appendonly.aof`) so you understand what’s happening under the hood?
