Perfect timing 🚀
Let’s go step by step: **basic Redis commands → common use cases → Docker use cases → Redis & Rust importance.**

---

## 🔹 1. Basic Redis Commands

Redis stores data as _key-value_ pairs. You interact with it via `redis-cli`.

**String operations**

```redis
SET user "Mukul"        # set key
GET user                # get key
DEL user                # delete key
EXISTS user             # check if key exists
```

**Expiration (cache style)**

```redis
SET session "xyz" EX 60  # set key with expiry (60 seconds)
TTL session              # check time-to-live
```

**Lists (like queues)**

```redis
LPUSH queue task1        # push at head
RPUSH queue task2        # push at tail
LRANGE queue 0 -1        # get all items
LPOP queue               # pop from head
```

**Hashes (like structs/dicts)**

```redis
HSET user:1 name "Mukul" age "24"
HGET user:1 name
HGETALL user:1
```

**Sets (unique values, no duplicates)**

```redis
SADD skills rust node docker
SMEMBERS skills
SISMEMBER skills rust
```

**Pub/Sub (messaging)**

```redis
SUBSCRIBE news
PUBLISH news "Breaking update!"
```

---

## 🔹 2. Common Use Cases of Redis

- **Caching**: Store frequently accessed data (API results, HTML fragments, session tokens).
- **Session store**: Web apps keep user sessions here instead of DB.
- **Queues/Job processing**: Background jobs (like email sending) use Redis lists.
- **Pub/Sub**: Real-time messaging between microservices.
- **Rate limiting**: API calls per second tracking using counters + TTL.
- **Leaderboard/Ranking**: Sorted sets for gaming scores.

---

## 🔹 3. Docker Use Cases + Commands

Redis is almost always run inside Docker in companies.

### 🟢 Run Redis with volume persistence

```bash
docker run -d --name myredis \
  -v redis_data:/data \
  redis redis-server --appendonly yes
```

- `-v redis_data:/data` → keeps data persistent.
- `--appendonly yes` → durability mode (AOF log).

### 🟢 Connect Redis container with another app container

Suppose you have a Node.js API that needs Redis:

```bash
# Start a network
docker network create appnet

# Run redis in that network
docker run -d --name myredis --network appnet redis

# Run node app in same network
docker run -d --name mynode --network appnet mynodeapp
```

Then `mynode` can talk to `myredis:6379`.

### 🟢 Temporary playground

```bash
docker run -it --rm redis redis-cli -h host.docker.internal
```

(`--rm` means auto-remove after exit)

---

## 🔹 4. Redis + Rust Importance

Redis is heavily used in **Rust backend systems** for **speed + concurrency**:

- **Actix / Axum apps** → store sessions or cache DB queries in Redis.
- **Background job queues** (like Celery in Python) → Rust equivalents use Redis.
- **Rate limiting** middleware → Redis is used with Rust web frameworks.
- **Distributed locks** in Rust → `redlock-rs` library uses Redis.

👉 Popular Rust crates:

- [`redis`](https://crates.io/crates/redis) (official Rust client)
- [`deadpool-redis`](https://crates.io/crates/deadpool-redis) (connection pool)
- [`bb8-redis`](https://crates.io/crates/bb8-redis)

Example Rust usage:

```rust
use redis::Commands;

fn main() -> redis::RedisResult<()> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;

    let _: () = con.set("lang", "Rust")?;
    let val: String = con.get("lang")?;
    println!("Stored: {}", val);

    Ok(())
}
```

---

✅ So, Redis is **a Swiss army knife** in DevOps:

- Companies run it in Docker for _caching, queues, sessions, pub/sub_.
- Rust devs use it for **high-performance caching and state management** in microservices.

---

Would you like me to make you a **mini project demo**:
→ `Rust + Redis + Docker` → a small API that stores user sessions in Redis?
That’ll tie all 3 skills (Rust, Redis, Docker) into something production-style.
