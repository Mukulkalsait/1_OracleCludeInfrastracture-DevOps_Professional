# 🧠 Kubectl Command Reference

> `kubectl` controls the Kubernetes cluster manager.  
> More information: [https://kubernetes.io/docs/reference/kubectl/](https://kubernetes.io/docs/reference/kubectl/)

### 🧭 Usage
```bash
kubectl [command] [flags] [options]
```

---

## 🪴 Basic Commands (Beginner)

| Command | Description |
|----------|--------------|
| **create** | Create a resource from a file or from stdin |
| **expose** | Take a replication controller, service, deployment, or pod and expose it as a new Kubernetes service |
| **run** | Run a particular image on the cluster |
| **set** | Set specific features on objects |

---

## 🌿 Basic Commands (Intermediate)

| Command | Description |
|----------|--------------|
| **explain** | Get documentation for a resource |
| **get** | Display one or many resources |
| **edit** | Edit a resource on the server |
| **delete** | Delete resources by file names, stdin, resources and names, or by resources and label selector |

---

## 🚀 Deploy Commands

| Command | Description |
|----------|--------------|
| **rollout** | Manage the rollout of a resource |
| **scale** | Set a new size for a deployment, replica set, or replication controller |
| **autoscale** | Auto-scale a deployment, replica set, stateful set, or replication controller |

---

## 🧩 Cluster Management Commands

| Command | Description |
|----------|--------------|
| **certificate** | Modify certificate resources |
| **cluster-info** | Display cluster information |
| **top** | Display resource (CPU/memory) usage |
| **cordon** | Mark node as unschedulable |
| **uncordon** | Mark node as schedulable |
| **drain** | Drain node in preparation for maintenance |
| **taint** | Update the taints on one or more nodes |

---

## 🧯 Troubleshooting & Debugging Commands

| Command | Description |
|----------|--------------|
| **describe** | Show details of a specific resource or group of resources |
| **logs** | Print the logs for a container in a pod |
| **attach** | Attach to a running container |
| **exec** | Execute a command in a container |
| **port-forward** | Forward one or more local ports to a pod |
| **proxy** | Run a proxy to the Kubernetes API server |
| **cp** | Copy files and directories to and from containers |
| **auth** | Inspect authorization |
| **debug** | Create debugging sessions for troubleshooting workloads and nodes |
| **events** | List events |

---

## ⚙️ Advanced Commands

| Command | Description |
|----------|--------------|
| **diff** | Diff the live version against a would-be applied version |
| **apply** | Apply a configuration to a resource by file name or stdin |
| **patch** | Update fields of a resource |
| **replace** | Replace a resource by file name or stdin |
| **wait** | Wait for a specific condition on one or many resources *(Experimental)* |
| **kustomize** | Build a kustomization target from a directory or URL |

---

## 🧾 Settings Commands

| Command | Description |
|----------|--------------|
| **label** | Update the labels on a resource |
| **annotate** | Update the annotations on a resource |
| **completion** | Output shell completion code for the specified shell *(bash, zsh, fish, powershell)* |

---

## 🔌 Other Commands

| Command | Description |
|----------|--------------|
| **api-resources** | Print the supported API resources on the server |
| **api-versions** | Print the supported API versions on the server (`group/version`) |
| **config** | Modify kubeconfig files |
| **plugin** | Provides utilities for interacting with plugins |
| **version** | Print the client and server version information |

---


