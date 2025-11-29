
Yes — Jenkins **has a CLI (Command Line Interface)** and it's actually used in industry!
It’s useful when you want to **trigger jobs, manage plugins, create users, get logs, backup configs** — **without opening the UI.**

Let’s cover EVERYTHING one time — full reference, industry use cases, examples & commands.

---

# ⚙️ **1. Download Jenkins CLI**

First, you must download the `jenkins-cli.jar` file from your Jenkins server:

```bash
wget http://<jenkins-url>/jnlpJars/jenkins-cli.jar
```

OR open in browser:
👉 `http://localhost:8080/jnlpJars/jenkins-cli.jar`

---

# 🔑 **2. Login / Authentication**

You MUST authenticate using a user + API token.

Generate API token
**Jenkins UI → User → Configure → API Token → Add New Token**

Then run:

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth username:APITOKEN help
```

If this works → CLI connection successful!

---

# 🚀 **3. Trigger a Job via CLI**

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:APITOKEN build my-pipeline-job
```

To trigger and wait for output:

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:APITOKEN build my-pipeline-job -s -v
```

---

# 📦 **4. Full List of CLI Commands**

Use this to see ALL available commands:

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ help
```

But here’s **complete command list** (latest Jenkins):

| Purpose                  | Command                                     |
| ------------------------ | ------------------------------------------- |
| List all jobs            | `list-jobs`                                 |
| Build a job              | `build <job>`                               |
| Get last build log       | `console <job>`                             |
| Create new job           | `create-job <name>`                         |
| Copy job                 | `copy-job <src> <dest>`                     |
| Delete job               | `delete-job <name>`                         |
| Disable job              | `disable-job <name>`                        |
| Enable job               | `enable-job <name>`                         |
| Get job config (XML)     | `get-job <job>`                             |
| Update job config (XML)  | `update-job <job>`                          |
| List plugins             | `list-plugins`                              |
| Install plugin           | `install-plugin <name>`                     |
| Upload file to workspace | `upload-file <job> <file>`                  |
| Get crontab info         | `show-queue`                                |
| Safe restart Jenkins     | `safe-restart`                              |
| Safe exit Jenkins        | `safe-shutdown`                             |
| Manage nodes             | `list-nodes`, `delete-node`, `connect-node` |

---

# 🧪 **5. Examples for Each Industry Task**

### ✔ Trigger build with parameters

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN build myjob -p version=1.7 -p env=prod
```

---

### ✔ Get console logs of the last build

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN console myjob
```

---

### ✔ Create job from XML file (industry usage)

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN create-job newjob < config.xml
```

✔ This is how **teams auto-create hundreds of jobs** during setup.

---

### ✔ Update job from XML file

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN update-job newjob < config.xml
```

---

### ✔ List all plugins

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN list-plugins
```

---

### ✔ Install a plugin

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN install-plugin blueocean
```

---

### ✔ Restart Jenkins safely

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN safe-restart
```

---

### ✔ Get help for one command

```bash
java -jar jenkins-cli.jar -s http://localhost:8080/ \
  -auth user:TOKEN help build
```

---

# 🧠 **6. How Companies Use Jenkins CLI**

| Use Case             | Why CLI is Used                      |
| -------------------- | ------------------------------------ |
| Automation scripts   | Manage Jenkins without UI            |
| GitHub Actions       | Trigger Jenkins from GitHub          |
| Massive job creation | One script = 50 jobs                 |
| Backup Jenkins       | `get-job` + XML dump                 |
| Disaster recovery    | Restore via CLI                      |
| CI/CD from terminal  | Run Jenkins pipeline with parameters |
| Kubernetes Job       | Call Jenkins CLI from Pod            |

Example **bash script** (real industry case):

```bash
#!/bin/bash
JOB=myapp-build
VERSION=$1

java -jar jenkins-cli.jar -s http://jenkins:8080 \
  -auth admin:APITOKEN build $JOB -p version=$VERSION
```

---

# 🚀 **7. Full Quick Reference Sheet (Copy for Future)**

```
build <job>
console <job>
list-jobs
create-job <job>
copy-job <src> <dest>
delete-job <job>
enable-job <job>
disable-job <job>
install-plugin <plugin>
safe-restart
safe-shutdown
list-nodes
connect-node <node>
list-plugins
get-job <job>
update-job <job>
who-am-i
reload-configuration
```

---

# 🎯 **Conclusion — What You Should Do NOW**

✔ Install Jenkins
✔ Download CLI
✔ Create API token
✔ Trigger a job using CLI
✔ Then write **bash script to trigger build with version**
→ **This is INTERVIEW LEVEL ⚡**

---

Would you like:
👉 Full bash script for CI/CD automation?
👉 Or "make Jenkins CLI + Kubernetes work together"?

I can build one right now for you. 🔥
