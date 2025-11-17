

---

# 🧠 **Ansible Complete Command & Syntax Cheat Sheet**

---

## ⚙️ 1️⃣ **Basic CLI Commands**

| Command                                               | Description                                 |
| ----------------------------------------------------- | ------------------------------------------- |
| `ansible --version`                                   | Show version & location of config files     |
| `ansible all -m ping -i inventory.ini`                | Ping all hosts in the inventory             |
| `ansible-inventory --list -i inventory.ini`           | Show parsed inventory                       |
| `ansible all -a "uptime" -i inventory.ini`            | Run shell command on all hosts              |
| `ansible web -m shell -a "ls /var/www"`               | Run shell command on `web` group            |
| `ansible web -m apt -a "name=nginx state=present" -b` | Install nginx using apt module              |
| `ansible-doc -l`                                      | List all available Ansible modules          |
| `ansible-doc apt`                                     | Get help/documentation on a specific module |

---

## 🏗️ 2️⃣ **Inventory Management**

| Command                                      | Description                       |
| -------------------------------------------- | --------------------------------- |
| `inventory.ini`                              | File containing your target hosts |
| `ansible-inventory -i inventory.ini --graph` | Show host/group hierarchy         |
| `ansible web -m ping -i inventory.ini`       | Test connectivity for `web` group |

**Example inventory:**

```ini
[web]
192.168.1.10
192.168.1.11

[db]
192.168.1.12

[all:vars]
ansible_user=ubuntu
ansible_ssh_private_key_file=~/.ssh/id_rsa
```

---

## 📜 3️⃣ **Running Playbooks**

| Command                                                     | Description                 |
| ----------------------------------------------------------- | --------------------------- |
| `ansible-playbook playbook.yml -i inventory.ini`            | Run a playbook              |
| `ansible-playbook -C playbook.yml`                          | Check mode (dry-run)        |
| `ansible-playbook playbook.yml --list-hosts`                | Show which hosts will run   |
| `ansible-playbook playbook.yml --tags "install"`            | Run only tagged tasks       |
| `ansible-playbook playbook.yml --skip-tags "debug"`         | Skip certain tasks          |
| `ansible-playbook playbook.yml --start-at-task="Task name"` | Resume from a specific task |

---

## 🧩 4️⃣ **Playbook Syntax Structure (YAML)**

```yaml
- name: Setup web server
  hosts: web
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Start nginx
      service:
        name: nginx
        state: started
```

---

## 🧱 5️⃣ **Commonly Used Modules**

| Module              | Purpose                    | Example                                                      |
| ------------------- | -------------------------- | ------------------------------------------------------------ |
| `ping`              | Test connection            | `ansible all -m ping`                                        |
| `apt` / `yum`       | Install packages           | `apt: name=nginx state=present`                              |
| `service`           | Manage services            | `service: name=nginx state=started`                          |
| `file`              | Create/delete files/dirs   | `file: path=/tmp/test state=directory`                       |
| `copy`              | Copy files                 | `copy: src=foo.conf dest=/etc/foo.conf`                      |
| `template`          | Copy Jinja2 template       | `template: src=nginx.conf.j2 dest=/etc/nginx/nginx.conf`     |
| `user`              | Manage users               | `user: name=dev state=present groups=sudo`                   |
| `group`             | Manage groups              | `group: name=devops state=present`                           |
| `lineinfile`        | Edit a line in a file      | `lineinfile: path=/etc/hosts line="127.0.0.1 myhost"`        |
| `git`               | Clone repos                | `git: repo=https://github.com/foo/bar.git dest=/var/www/bar` |
| `shell` / `command` | Run shell commands         | `shell: echo Hello`                                          |
| `systemd`           | Manage services on systemd | `systemd: name=docker enabled=yes`                           |
| `debug`             | Print variable values      | `debug: var=my_var`                                          |

---

## 🧠 6️⃣ **Variables and Facts**

### Defining Variables:

```yaml
vars:
  app_port: 8080
```

### Using Variables:

```yaml
- name: Print app port
  debug:
    msg: "App runs on port {{ app_port }}"
```

### Get system facts:

```bash
ansible all -m setup
```

### Limit facts:

```yaml
- name: Show OS info
  debug:
    var: ansible_facts['distribution']
```

---

## 🧩 7️⃣ **Conditionals and Loops**

### Conditionals:

```yaml
- name: Restart nginx if changed
  service:
    name: nginx
    state: restarted
  when: ansible_facts['distribution'] == "Ubuntu"
```

### Loops:

```yaml
- name: Install multiple packages
  apt:
    name: "{{ item }}"
    state: present
  loop:
    - nginx
    - curl
    - git
```

---

## 🏷️ 8️⃣ **Tags**

```yaml
tasks:
  - name: Install packages
    apt: name=nginx state=present
    tags: install

  - name: Start service
    service: name=nginx state=started
    tags: start
```

Run specific tag:

```bash
ansible-playbook playbook.yml --tags install
```

---

## 📁 9️⃣ **Roles & Structure (for large projects)**

Typical Ansible Role layout:

```
roles/
  webserver/
    tasks/
      main.yml
    handlers/
      main.yml
    templates/
      nginx.conf.j2
    vars/
      main.yml
    files/
      index.html
```

Use in playbook:

```yaml
- hosts: web
  roles:
    - webserver
```

---

## 🧰 🔟 **Handlers**

Used to trigger actions (like restart service) **only when something changes**.

```yaml
tasks:
  - name: Copy nginx conf
    copy:
      src: nginx.conf
      dest: /etc/nginx/nginx.conf
    notify:
      - restart nginx

handlers:
  - name: restart nginx
    service:
      name: nginx
      state: restarted
```

---

## 🔐 11️⃣ **Ansible Vault (for secrets)**

| Command                                          | Description             |
| ------------------------------------------------ | ----------------------- |
| `ansible-vault create secrets.yml`               | Create encrypted file   |
| `ansible-vault edit secrets.yml`                 | Edit                    |
| `ansible-vault view secrets.yml`                 | View                    |
| `ansible-vault encrypt myfile.yml`               | Encrypt existing file   |
| `ansible-vault decrypt myfile.yml`               | Decrypt                 |
| `ansible-playbook playbook.yml --ask-vault-pass` | Run with vault password |

---

## 🧪 12️⃣ **Ad-Hoc Commands Quick Reference**

| Task             | Command                                                     |
| ---------------- | ----------------------------------------------------------- |
| Check connection | `ansible all -m ping`                                       |
| Get uptime       | `ansible all -a "uptime"`                                   |
| Install package  | `ansible all -b -m apt -a "name=nginx state=present"`       |
| Restart service  | `ansible all -b -m service -a "name=nginx state=restarted"` |
| Copy file        | `ansible all -m copy -a "src=/etc/hosts dest=/tmp/hosts"`   |

---

## 🚀 13️⃣ **Useful Tips**

* Use `-b` for privilege escalation (become root)
* Use `--limit <hostname>` to target specific hosts
* Use `--list-tasks` to preview what will run
* Always run `ansible-lint` before executing playbooks
* Combine with `tmux` or `watch` to monitor automation live

---

### 🔚 In Summary:

🧩 **Core Commands to Memorize**

```
ansible all -m ping
ansible all -a "uptime"
ansible-playbook playbook.yml -i inventory.ini
ansible-doc <module>
ansible-inventory --list
```

🧠 **Core YAML Blocks**

* hosts
* become
* tasks
* vars
* handlers
* roles
* tags
* conditionals
* loops

---

Would you like me to convert this cheat sheet into a **printable PDF** (one-page condensed layout with sections & syntax highlighting)?
That way you can keep it open in your terminal workspace while practicing.
