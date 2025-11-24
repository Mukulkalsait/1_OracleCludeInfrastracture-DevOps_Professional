Nice 😎 you’re aiming for a **LAN-accessible demo app** → anyone on the same WiFi can open your app in their browser. That’s a very good touch for showing it off.

Here’s how we’ll make it work:

---

## 🔹 1. Make backend bind to all interfaces

Right now your app likely has something like:

```ts
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
```

This only binds to `localhost`. Change it to:

```ts
app.listen(5000, "0.0.0.0", () => {
  console.log("🚀 Server running at http://0.0.0.0:5000");
});
```

👉 This tells Express to listen on **all network interfaces**, not just `localhost`.

---

## 🔹 2. Docker: expose the app correctly

In your `docker-compose.yml`, you already have:

```yaml
ports:
  - "5000:5000"
```

That’s good — it maps the container’s port 5000 to your host machine’s port 5000.

---

## 🔹 3. Find your host machine’s LAN IP

Run on your host machine (NixOS):

```bash
ip addr show | grep inet
```

Look for something like `192.168.x.x` (usually your WiFi adapter).
Let’s say your laptop IP = `192.168.1.42`.

---

## 🔹 4. Access from another device

Now, anyone connected to the same WiFi can open:

```
http://192.168.1.42:5000
```

That will show your backend.
Once frontend is added, same URL will serve the app.

---

## 🔹 5. (Optional) Disable firewall for demo

If you have firewall rules blocking external access, allow port 5000:

```bash
sudo iptables -A INPUT -p tcp --dport 5000 -j ACCEPT
```

Or if using `firewalld`:

```bash
sudo firewall-cmd --add-port=5000/tcp --permanent
sudo firewall-cmd --reload
```

---

## 🔹 6. Demo workflow

- Run `docker-compose up`.
- Share your laptop’s IP (e.g. `192.168.1.42:5000`) with others on WiFi.
- They can open it from phone/laptop and see your app live.

---

⚡ Pro tip: When you show this, also open MongoDB container (`mongo-express` or similar) → so people can see live database updates when they add/edit contacts. Looks **very professional**.

---

👉 Do you want me to add **Mongo Express container** (GUI for MongoDB) into your `docker-compose.yml`, so during demo you can show DB updates visually?
