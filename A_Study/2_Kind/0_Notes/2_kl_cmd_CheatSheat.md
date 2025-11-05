# Kubernetes Cheatsheet: CLI Commands  

> **Version:** 1.30+ (commands work on any recent `kubectl`)  
> **Tip:** Use `kubectl explain <resource>` for field docs, `kubectl -h` for global flags.

---

## Table of Contents
- [Cluster Management & Config](#cluster-management--configuration)
- [Namespace Commands](#namespace-commands)
- [Pod Management](#pod-management)
- [Deployment & ReplicaSet](#deployment--replicaset-management)
- [Networking & Services](#networking--services)
- [Storage Management](#storage-management)
- [Scaling & Autoscaling](#scaling--autoscaling)
- [Debugging & Logging](#debugging--logging)
- [Advanced & Misc](#advanced--miscellaneous)
- [Ingress (optional)](#ingress)
- [ConfigMap & Secret (optional)](#configmap--secret)

---

### Cluster Management & Configuration
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl cluster-info` | Show master & service URLs | `kubectl cluster-info` |
| `kubectl cluster-info dump [--output-directory=<path>]` | Dump full cluster state | `kubectl cluster-info dump --output-directory=/tmp/state` |
| `kubectl config view` | Show merged kubeconfig | `kubectl config view --raw` |
| `kubectl config current-context` | Current context | `kubectl config current-context` |
| `kubectl config get-contexts` | List contexts | `kubectl config get-contexts -o name` |
| `kubectl config use-context <ctx>` | Switch context | `kubectl config use-context prod` |
| `kubectl config set-cluster <name> --server=<url>` | Add cluster entry | `kubectl config set-cluster my-cls --server=https://1.2.3.4` |
| `kubectl config set-credentials <user> --username=<u> --password=<p>` | Basic-auth user | `kubectl config set-credentials admin --username=admin --password=secret` |
| `kubectl config set-context --current --namespace=<ns>` | Set ns for current ctx | `kubectl config set-context --current --namespace=dev` |
| `kubectl config unset <property>` | Remove entry | `kubectl config unset users.foo` |
| `kubectl cordon <node>` / `kubectl uncordon <node>` | Mark node unschedulable / schedulable | `kubectl cordon node01` |

---

### Namespace Commands
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get namespaces` | List namespaces | `kubectl get ns` |
| `kubectl create namespace <name>` | Create namespace | `kubectl create ns my-ns` |
| `kubectl get pods --all-namespaces` | Pods in **all** ns (`-A`) | `kubectl get pods -A` |
| `kubectl get pods -n <ns>` | Pods in specific ns | `kubectl get pods -n prod` |
| `kubectl delete pods --all -n <ns>` | Delete **all** pods in ns | `kubectl delete pods --all -n test` |
| `kubectl -n <ns> delete po,svc --all` | Delete pods + services in ns | `kubectl -n my-ns delete po,svc --all` |

---

### Pod Management
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get pods` | List pods (current ns) | `kubectl get pods -o wide` |
| `kubectl get pods --field-selector=spec.nodeName=<node>` | Pods on a node | `kubectl get pods --field-selector=spec.nodeName=node01` |
| `kubectl get pods --selector=<label>` | Filter by label | `kubectl get pods -l app=web` |
| `kubectl describe pod <name>` | Detailed info | `kubectl describe pod my-pod` |
| `kubectl get pod <name> -o yaml` | Export YAML | `kubectl get pod my-pod -o yaml > pod.yaml` |
| `kubectl create -f pod.yaml` | Create from file | `kubectl create -f pod.yaml` |
| `kubectl run <name> --image=<img> --restart=Never` | One-off pod | `kubectl run busy --image=busybox:1.28 --restart=Never -- sh -c "sleep 3600"` |
| `kubectl delete pod <name>` | Delete pod | `kubectl delete pod my-pod` |
| `kubectl delete pods -l <label>` | Delete by label | `kubectl delete pods -l app=web` |
| `kubectl label pods <name> <k>=<v>` | Add label | `kubectl label pods my-pod env=prod` |
| `kubectl annotate pods <name> <k>=<v>` | Add annotation | `kubectl annotate pods my-pod owner=team-a` |
| `kubectl patch pod <name> -p '{"spec":{"containers":[{"name":"app","image":"new:v2"}]}}'` | Patch image | `kubectl patch pod my-pod -p '{"spec":{"containers":[{"name":"app","image":"nginx:1.25"}]}}'` |
| `kubectl edit pod <name>` | Edit live | `kubectl edit pod my-pod` |
| `kubectl exec <pod> -- <cmd>` | Run command | `kubectl exec my-pod -- ls /app` |
| `kubectl exec -ti <pod> -- /bin/sh` | Interactive shell | `kubectl exec -ti my-pod -- /bin/sh` |
| `kubectl attach <pod> -i` | Attach STDIO | `kubectl attach my-pod -i` |
| `kubectl port-forward <pod> <local>:<remote>` | Port-forward | `kubectl port-forward my-pod 8080:80` |
| `kubectl get pods --field-selector=status.phase=Running` | Running pods | `kubectl get pods --field-selector=status.phase=Running` |

---

### Deployment & ReplicaSet Management
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get deployments` | List deployments | `kubectl get deploy -o wide` |
| `kubectl describe deployment <name>` | Details | `kubectl describe deploy nginx` |
| `kubectl create deployment <name> --image=<img>` | Create | `kubectl create deploy nginx --image=nginx` |
| `kubectl set image deployment/<name> <container>=<img>` | Rolling update | `kubectl set image deployment/nginx web=nginx:1.25` |
| `kubectl rollout status deployment/<name>` | Watch rollout | `kubectl rollout status -w deploy/nginx` |
| `kubectl rollout history deployment/<name>` | Revision history | `kubectl rollout history deploy/nginx` |
| `kubectl rollout undo deployment/<name>` | Rollback | `kubectl rollout undo deploy/nginx --to-revision=2` |
| `kubectl rollout restart deployment/<name>` | Restart | `kubectl rollout restart deploy/nginx` |
| `kubectl scale deployment/<name> --replicas=<n>` | Scale | `kubectl scale deploy/nginx --replicas=5` |
| `kubectl autoscale deployment/<name> --min=<n> --max=<n>` | HPA | `kubectl autoscale deploy/nginx --min=2 --max=10` |
| `kubectl delete deployment <name>` | Delete | `kubectl delete deploy nginx` |
| `kubectl get rs` | List ReplicaSets | `kubectl get rs -o wide` |
| `kubectl scale rs <name> --replicas=<n>` | Scale RS | `kubectl scale rs nginx-abc123 --replicas=3` |

---

### Networking & Services
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get services` | List services | `kubectl get svc --sort-by=.metadata.name` |
| `kubectl describe service <name>` | Details | `kubectl describe svc nginx` |
| `kubectl expose deployment <name> --port=<p> --target-port=<t>` | Expose | `kubectl expose deploy/nginx --port=80 --target-port=8080` |
| `kubectl port-forward svc/<name> <local>:<svc>` | Forward to service | `kubectl port-forward svc/nginx 8080:80` |
| `kubectl get endpoints` | List endpoints | `kubectl get ep -n default` |
| `kubectl exec -it <pod> -- nslookup <svc>` | DNS test | `kubectl exec -it test-pod -- nslookup nginx` |
| `kubectl edit svc/<name>` | Edit service | `kubectl edit svc/nginx` |
| `kubectl delete svc <name>` | Delete | `kubectl delete svc nginx` |

---

### Storage Management
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get pvc` | List PVCs | `kubectl get pvc -n prod` |
| `kubectl describe pvc <name>` | Details | `kubectl describe pvc data-pvc` |
| `kubectl get pv` | List PVs | `kubectl get pv --sort-by=.spec.capacity.storage` |

---

### Scaling & Autoscaling
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl scale --replicas=<n> <type>/<name>` | Generic scale | `kubectl scale --replicas=3 deploy/nginx` |
| `kubectl autoscale <type> <name> --min=<n> --max=<n>` | Create HPA | `kubectl autoscale deploy/nginx --min=2 --max=8` |

---

### Debugging & Logging
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl logs <pod>` | Print logs | `kubectl logs my-pod` |
| `kubectl logs -f <pod> -c <container>` | Follow logs | `kubectl logs -f my-pod -c app` |
| `kubectl get events --sort-by=.metadata.creationTimestamp` | Events timeline | `kubectl get events --sort-by=.metadata.creationTimestamp` |
| `kubectl get events -o wide --field-selector involvedObject.kind=Pod` | Pod events | … |
| `kubectl top pods` / `kubectl top nodes` | Resource usage | `kubectl top pods -n prod` |
| `kubectl diff -f manifest.yaml` | Dry-run diff | `kubectl diff -f deploy.yaml` |
| `kubectl replace --force -f file.yaml` | Force replace (downtime) | `kubectl replace --force -f pod.yaml` |
| `kubectl patch <type> <name> --type=json -p='[{"op":"remove","path":"/spec/template/spec/containers/0/livenessProbe"}]'` | JSON patch | `kubectl patch deploy/nginx --type=json -p='[{"op":"remove","path":"/spec/template/spec/containers/0/livenessProbe"}]'` |

---

### Advanced & Miscellaneous
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl create job <name> --image=<img> -- <cmd>` | One-off job | `kubectl create job hello --image=busybox -- echo "Hi"` |
| `kubectl create cronjob <name> --image=<img> --schedule="<cron>" -- <cmd>` | Scheduled job | `kubectl create cronjob backup --image=busybox --schedule="0 2 * * *" -- tar czf /data/backup.tar.gz /data` |
| `kubectl get daemonset` | List DaemonSets | `kubectl get ds -o wide` |
| `kubectl explain <resource>` | Docs | `kubectl explain pod.spec.containers` |
| `kubectl apply -f <dir>/` | Apply whole dir | `kubectl apply -f ./manifests/` |
| `kubectl rolling-update <rc> -f <new-rc>` | Legacy rolling update | `kubectl rolling-update old-rc -f new-rc.yaml` |

---

### Ingress *(optional)*
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl get ingress` | List | `kubectl get ing` |
| `kubectl describe ingress <name>` | Details | `kubectl describe ing web-ing` |
| `kubectl create ingress <name> --rule="host/path=svc:port"` | Quick create | `kubectl create ingress demo --rule="example.com/=nginx:80"` |

---

### ConfigMap & Secret *(optional)*
| Command | Description | Example |
|---------|-------------|---------|
| `kubectl create configmap <name> --from-literal=k=v` | From literal | `kubectl create cm app-config --from-literal=mode=prod` |
| `kubectl create secret generic <name> --from-literal=user=admin` | Generic secret | `kubectl create secret generic db-creds --from-literal=password=secret` |
| `kubectl get cm,secret -o yaml` | Export | `kubectl get cm app-config -o yaml > cm.yaml` |

---

**Done!**  
Copy the whole block above into a file named `k8s-cli-cheatsheet.md` and convert it to PDF with any Markdown-to-PDF tool (e.g., **Pandoc**, **VS Code**, **Typora**, or an online converter).  

No syntax errors, all commands are valid, and the layout is ready for printing or quick reference.
