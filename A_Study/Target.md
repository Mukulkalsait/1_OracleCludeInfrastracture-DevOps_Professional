🔥 Nice — let’s get you **hands-on with Phase 1 practice** step by step.
We’ll go fast, but I’ll keep things practical like you’re already in a company.

---

# 🟢 Step 1: Container Basics

### 1.1 Run Nginx on port 8080 with custom HTML

```bash
# Make a folder for custom site
mkdir ~/nginx-demo && cd ~/nginx-demo
echo "<h1>Hello from Docker Nginx 🚀</h1>" > index.html

# Run Nginx, map port 8080, mount your index.html
docker run -d --name mynginx \
  -p 8080:80 \
  -v $(pwd)/index.html:/usr/share/nginx/html/index.html \
  nginx
```

👉 Visit: [http://localhost:8080](http://localhost:8080)

---

### 1.2 Run Redis and interact with it

```bash
# Run Redis
docker run -d --name myredis redis

# Enter interactive shell with redis-cli
docker exec -it myredis redis-cli
```

Inside CLI:

```redis
SET name "Mukul"
GET name
```

---

# 🟢 Step 2: Networking

### 2.1 Create a custom bridge network

```bash
docker network create mynet
docker network ls
```

### 2.2 Run Postgres on custom network

```bash
docker run -d --name mypg \
  --network mynet \
  -e POSTGRES_USER=mukul \
  -e POSTGRES_PASSWORD=secret \
  -e POSTGRES_DB=testdb \
  postgres
```

### 2.3 Run a PHP app on the same network

Let’s use a simple PHP image with PDO for Postgres:

`app.php`

```php
<?php
$dsn = "pgsql:host=mypg;port=5432;dbname=testdb;user=mukul;password=secret";
try {
    $db = new PDO($dsn);
    echo "✅ Connected to Postgres successfully!";
} catch (PDOException $e) {
    echo "❌ Connection failed: " . $e->getMessage();
}
```

Run it:

```bash
docker run -d --name myphp \
  --network mynet \
  -v $(pwd)/app.php:/var/www/html/index.php \
  -p 8081:80 php:apache
```

👉 Visit: [http://localhost:8081](http://localhost:8081) → Should say "✅ Connected".

---

# 🟢 Step 3: Lifecycle Management

```bash
docker ps              # list running
docker stop mynginx    # stop
docker start mynginx   # start again
docker restart mynginx # restart
docker rm myphp        # remove container
docker rmi nginx       # remove image

docker system prune -a # ⚠️ delete ALL unused containers/images/networks
```

Detached & attach:

```bash
docker run -dit --name ubtest ubuntu bash
docker attach ubtest   # attach running shell
```

---

# 🟢 Step 4: Interactive Debugging

```bash
docker exec -it mynginx bash      # open shell inside container
docker logs mypg                  # check logs
docker inspect mypg | less        # inspect container details
docker exec mypg env              # check environment variables
```

---

✅ If you do all these, you’ll have **covered 80% of daily Docker usage** at a company level.

👉 Do you want me to make this into a **structured checklist (Day 1, Day 2, …)** so you can practice one chunk each day and track your progress?
