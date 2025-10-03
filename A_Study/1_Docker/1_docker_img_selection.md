```js
/*DX:
  1.Pinned versions != “works yesterday, breaks today” issues.
  2.slim/alpine => Small+security attack surface, and build times.
  3.Language/runtime knowledge => (like Rust putting binaries in `target/release`) helps you copy the right artifacts.
*/
```

## 🐳 Standard Tiny Base Images (pinned versions)

### 🔹 Linux distros

- `alpine:3.20` → \~5 MB (tiny, musl libc, sometimes compatibility issues with glibc apps).
- `debian:bookworm-slim` → \~22 MB (good balance, stable + secure).
- `ubuntu:24.04` → \~29 MB for `slim`, \~70 MB for full (large, but has everything).

👉 Most companies use **Debian Slim** unless they really want **Alpine** for size.

---

### 🔹 Node.js / React / Next.js

- **Node official images**:
  - `node:20.12.2-slim` (\~50 MB) ✅
  - `node:20.12.2-alpine` (\~15 MB) ✅ (use if all deps build on musl).

- **React/Next.js** → still use Node (React is frontend but SSR builds use Node).

👉 Common pattern:

- **Build stage** → `node:20.12.2` (full, for npm/yarn/pnpm).
- **Run stage** → `node:20.12.2-slim` or `nginx:1.27.0-alpine` (to serve static build).

---

### 🔹 Nginx / Apache

- `nginx:1.27.0-alpine` → \~6 MB ✅
- `httpd:2.4.59-alpine` → \~15 MB ✅
- For big projects → Nginx preferred, tiny and faster.

---

### 🔹 Rust

- `rust:1.81-slim-bullseye` → \~150 MB (for building).
- `debian:bookworm-slim` → \~22 MB (for running final binary).
- `alpine:3.20` → only if binary is **musl-linked** (`cargo build --release --target x86_64-unknown-linux-musl`).

---

### 🔹 Go

- `golang:1.23.0-alpine` (\~10 MB builder).
- For runtime: just `alpine:3.20` (\~5 MB) with compiled binary copied.
- Go binaries are statically linked → perfect for Alpine.

---

### 🔹 Python

- `python:3.12.5-slim` (\~25 MB).
- `python:3.12.5-alpine` (\~6 MB, but can be tricky with native deps).

👉 Most use `slim`, safer with dependencies like numpy, pandas, etc.

---

### 🔹 Java

- `eclipse-temurin:21-jre-alpine` (\~45 MB).
- `eclipse-temurin:17-jre-alpine` (\~40 MB).
- Full JDK if building inside container → `temurin:21-jdk-slim`.

---

### 🔹 PHP

- `php:8.3.10-fpm-alpine` (\~25 MB).
- `php:8.3.10-apache` (\~80 MB, with Apache built in).

---

### 🔹 Databases

(Usually not slimmed down much, but you still want versions pinned)

- `redis:7.4-alpine` (\~6 MB).
- `postgres:16.3-alpine` (\~15 MB).
- `mysql:8.4.0` (\~150 MB, no slim version).
- `mongo:7.0.14` (\~150 MB).

---

### 🔹 Typescript

- No separate image — same as Node.
  (Build: `node:20-slim`, Run: `node:20-alpine` or just compiled JS).

---

## ⚡ General Pattern for Multi-stage Industry Dockerfiles

1. **Build Stage**: use full language image (with compilers + tools).
2. **Run Stage**: use tiny slim/alpine image, copy only built artifacts.
3. **Pin versions** (language runtime + Linux distro).

---

✅ Example (Node + React)

```dockerfile
# Stage 1: Build
FROM node:20.12.2-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Run
FROM nginx:1.27.0-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

👉 So now you know:

- Which images are **tiny** vs **big**.
- Why **slim** is safer than Alpine in many cases.
- How companies pin versions for reliability.

---

Do you want me to make you a **big cheat-sheet table (Language → Build Image → Runtime Image → Typical Size)** so you can save it in your `.md` file?
