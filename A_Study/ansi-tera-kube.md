

---

## 🧱 **1. Terraform – yes, it’s a CLI tool**

Terraform is 100% **CLI-based**, just like `kubectl`.

### 💡 Installation

You just install one binary called `terraform`:

```bash
sudo apt install terraform   # Ubuntu/Debian
# or
brew install terraform       # macOS
```

### 🧰 Basic Terraform CLI workflow

When you’re in your project folder (with `.tf` files):

| Command             | Purpose                                                                      |
| ------------------- | ---------------------------------------------------------------------------- |
| `terraform init`    | Initializes your project, downloads provider plugins (like AWS, Azure, etc.) |
| `terraform plan`    | Shows what Terraform *will* create or modify                                 |
| `terraform apply`   | Actually applies the plan (creates infrastructure)                           |
| `terraform destroy` | Destroys all resources Terraform created                                     |
| `terraform state`   | Lets you inspect or modify Terraform’s internal state file                   |

### Example workflow:

```bash
mkdir my-infra && cd my-infra
# create main.tf

terraform init
terraform plan
terraform apply
```

Terraform connects to the cloud (using your credentials), provisions servers, VPCs, databases, etc.

---

## ⚙️ **2. Ansible – also a CLI tool**

Ansible is also a **CLI tool**, but its purpose is different: configuration and automation after infrastructure exists.

### 💡 Installation

```bash
sudo apt install ansible
# or
pip install ansible
```

### 🧰 Basic Ansible CLI workflow

You usually have:

* An **inventory file** (list of servers)
* A **playbook.yml** (what tasks to run)

| Command                         | Purpose                                       |
| ------------------------------- | --------------------------------------------- |
| `ansible all -m ping`           | Test if Ansible can reach all servers via SSH |
| `ansible-playbook playbook.yml` | Run tasks defined in the YAML playbook        |
| `ansible-inventory --list`      | See what hosts are defined                    |
| `ansible -m shell -a "uptime"`  | Run a shell command on servers directly       |

### Example workflow:

```bash
# inventory.ini
[web]
192.168.1.10
192.168.1.11

# playbook.yml
- name: Install NGINX
  hosts: web
  become: yes
  tasks:
    - name: Install NGINX
      apt:
        name: nginx
        state: present

# Run it
ansible-playbook -i inventory.ini playbook.yml
```

---

## 🔄 How Terraform and Ansible differ from Kubernetes

Let’s compare conceptually:

| Tool           | CLI Name                      | What it manages      | Typical flow                      |
| -------------- | ----------------------------- | -------------------- | --------------------------------- |
| **Kubernetes** | `kubectl`                     | Containers and pods  | `kubectl apply -f deployment.yml` |
| **Terraform**  | `terraform`                   | Cloud infrastructure | `terraform apply`                 |
| **Ansible**    | `ansible`, `ansible-playbook` | Server configuration | `ansible-playbook playbook.yml`   |

So, in a DevOps environment:

* Terraform = create EC2s, load balancers, networks
* Ansible = configure those EC2s (install software, deploy app)
* Kubernetes = run containers *on* those servers

They’re all **CLI tools**, just operating at *different layers* of your stack.

---

Would you like me to show you a **real-world mini demo workflow** — for example:
👉 Terraform creates an Ubuntu VM → Ansible installs Nginx on it → You access a live “Hello World” page?

It’ll show exactly how they connect together.
