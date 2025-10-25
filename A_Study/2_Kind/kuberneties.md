Yes, I can compile a comprehensive Kubernetes cheatsheet for you based on official and reliable sources. Below is the structured content, organized by categories for CLI commands (from basic to advanced, including debugging), followed by a section with YAML file examples. I've used tables for clarity where it helps with comparisons or listings. You can copy this entire response into a tool like Microsoft Word, Google Docs, or a Markdown-to-PDF converter (e.g., pandoc or online tools) to save it as a PDF for your reference.

---

# Kubernetes Cheatsheet: CLI Commands and YAML Examples

## CLI Commands by Category

Commands are grouped into logical categories like namespaces, networking, etc., drawing from common usage patterns. Each includes syntax, descriptions, and examples where applicable. Basic commands are listed first in each category, progressing to more advanced or debugging-related ones.

### Cluster Management and Configuration

These commands handle cluster info, contexts, and kubeconfig modifications.

| Command                                                                     | Description                                                           | Example                                                                                                   |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `kubectl cluster-info`                                                      | Displays addresses of the master and core services.                   | `kubectl cluster-info` (shows Kubernetes master URL and services like kube-dns).                          |
| `kubectl cluster-info dump [--output-directory=<path>]`                     | Dumps the current cluster state to stdout or files.                   | `kubectl cluster-info dump --output-directory=/path/to/state` (saves cluster state to directory).         |
| `kubectl config view`                                                       | Shows merged kubeconfig settings.                                     | `kubectl config view --raw` (includes raw certificate data and secrets).                                  |
| `kubectl config current-context`                                            | Displays the current context.                                         | `kubectl config current-context` (e.g., outputs "my-cluster-name").                                       |
| `kubectl config get-contexts`                                               | Lists all contexts.                                                   | `kubectl config get-contexts -o name` (lists context names only).                                         |
| `kubectl config use-context <context-name>`                                 | Sets the default context.                                             | `kubectl config use-context my-cluster-name`.                                                             |
| `kubectl config set-cluster <cluster-name> --server=<server-name>`          | Sets a cluster entry in kubeconfig.                                   | `kubectl config set-cluster my-cluster --server=https://1.2.3.4`.                                         |
| `kubectl config set-credentials <user> --username=<user> --password=<pass>` | Adds a user with basic auth.                                          | `kubectl config set-credentials kubeuser/foo.kubernetes.com --username=kubeuser --password=kubepassword`. |
| `kubectl config set-context --current --namespace=<ns>`                     | Sets namespace for the current context.                               | `kubectl config set-context --current --namespace=dev`.                                                   |
| `kubectl config unset <property-name>`                                      | Unsets an entry in kubeconfig.                                        | `kubectl config unset users.foo` (deletes user "foo").                                                    |
| `kubectl config set-context <context> --user=<user> --namespace=<ns>`       | Sets a context with specific user and namespace.                      | `kubectl config set-context gce --user=cluster-admin --namespace=foo`.                                    |
| `kubectl cordon <node>` / `kubectl uncordon <node>`                         | Marks a node as unschedulable/schedulable (advanced node management). | `kubectl cordon minikube` (prevents scheduling on node).                                                  |

### Namespace Commands

Commands for managing namespaces.

| Command                                      | Description                                            | Example                                                            |
| -------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| `kubectl get namespaces`                     | Lists all namespaces.                                  | `kubectl get namespaces` (plain-text list).                        |
| `kubectl create namespace <ns-name>`         | Creates a new namespace.                               | `kubectl create namespace my-namespace`.                           |
| `kubectl get pods --all-namespaces`          | Lists pods across all namespaces (use `-A` shorthand). | `kubectl get pods -A`.                                             |
| `kubectl get pods -n <namespace>`            | Lists pods in a specific namespace.                    | `kubectl get pods -n dev`.                                         |
| `kubectl delete pods --all -n <namespace>`   | Deletes all pods in a namespace.                       | `kubectl delete pods --all -n test` (includes uninitialized pods). |
| `kubectl -n <namespace> delete po,svc --all` | Deletes all pods and services in a namespace.          | `kubectl -n my-ns delete po,svc --all`.                            |

### Pod Management

Basic to advanced commands for pods, including creation, viewing, and interaction.

| Command                                                                                  | Description                                                | Example                                                                                       |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `kubectl get pods`                                                                       | Lists all pods in the current namespace.                   | `kubectl get pods -o wide` (detailed output with node info).                                  |
| `kubectl get pods --field-selector=spec.nodeName=<node>`                                 | Lists pods on a specific node.                             | `kubectl get pods --field-selector=spec.nodeName=node1`.                                      |
| `kubectl get pods --selector=<label>`                                                    | Lists pods by label selector.                              | `kubectl get pods --selector=app=cassandra`.                                                  |
| `kubectl describe pods <pod-name>`                                                       | Shows detailed info about a pod.                           | `kubectl describe pods my-pod` (includes events, conditions).                                 |
| `kubectl get pod <pod-name> -o yaml`                                                     | Gets pod YAML.                                             | `kubectl get pod my-pod -o yaml`.                                                             |
| `kubectl create -f <pod.yaml>`                                                           | Creates a pod from YAML.                                   | `kubectl create -f pod.yaml`.                                                                 |
| `kubectl run <name> --image=<image> --restart=Never`                                     | Creates a single pod (not a deployment).                   | `kubectl run busybox --image=busybox:1.28 --restart=Never -- echo "Hello"`.                   |
| `kubectl delete pod <pod-name>`                                                          | Deletes a specific pod.                                    | `kubectl delete pod my-pod`.                                                                  |
| `kubectl delete pods -l <label-key>=<label-value>`                                       | Deletes pods by label.                                     | `kubectl delete pods -l app=myapp`.                                                           |
| `kubectl delete pods --all`                                                              | Deletes all pods in namespace.                             | `kubectl delete pods --all`.                                                                  |
| `kubectl label pods <pod-name> <key>=<value>`                                            | Adds a label to a pod.                                     | `kubectl label pods my-pod env=prod`.                                                         |
| `kubectl annotate pods <pod-name> <key>=<value>`                                         | Adds an annotation.                                        | `kubectl annotate pods my-pod icon-url=http://example.com`.                                   |
| `kubectl patch pod <pod-name> -p '<json-patch>'`                                         | Patches a pod (e.g., update image).                        | `kubectl patch pod my-pod -p '{"spec":{"containers":[{"name":"app","image":"new-image"}]}}'`. |
| `kubectl edit pod <pod-name>`                                                            | Edits a pod in default editor.                             | `kubectl edit pod my-pod`.                                                                    |
| `kubectl exec <pod-name> -- <command>`                                                   | Executes a command in a pod.                               | `kubectl exec my-pod -- ls /app`.                                                             |
| `kubectl exec -ti <pod-name> -- /bin/bash`                                               | Opens an interactive shell in a pod.                       | `kubectl exec -ti my-pod -- /bin/bash`.                                                       |
| `kubectl attach <pod-name> -i`                                                           | Attaches to a running container's STDIO.                   | `kubectl attach my-pod -i`.                                                                   |
| `kubectl port-forward <pod-name> <local-port>:<pod-port>`                                | Forwards a local port to a pod.                            | `kubectl port-forward my-pod 8080:80`.                                                        |
| `kubectl get pods --field-selector=status.phase=Running`                                 | Lists running pods (debugging filter).                     | `kubectl get pods --field-selector=status.phase=Running`.                                     |
| `kubectl get pods -o jsonpath='{.items[*].status.initContainerStatuses[*].containerID}'` | Lists container IDs of init containers (advanced cleanup). | (Cut output for IDs).                                                                         |

### Deployment and ReplicaSet Management

Commands for deployments, replicas, and rollouts.

| Command                                                                 | Description                               | Example                                                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `kubectl get deployments`                                               | Lists all deployments.                    | `kubectl get deployments -o wide`.                                                                  |
| `kubectl describe deployments <dep-name>`                               | Details about a deployment.               | `kubectl describe deployments nginx`.                                                               |
| `kubectl create deployment <name> --image=<image>`                      | Creates a deployment.                     | `kubectl create deployment nginx --image=nginx`.                                                    |
| `kubectl set image deployment <dep-name> <container>=<image>`           | Updates container image (rolling update). | `kubectl set image deployment/nginx www=nginx:v2`.                                                  |
| `kubectl rollout status deployment <dep-name>`                          | Watches rollout status.                   | `kubectl rollout status -w deployment/nginx`.                                                       |
| `kubectl rollout history deployment <dep-name>`                         | Views rollout history.                    | `kubectl rollout history deployment/nginx`.                                                         |
| `kubectl rollout undo deployment <dep-name>`                            | Rolls back to previous revision.          | `kubectl rollout undo deployment/nginx --to-revision=2`.                                            |
| `kubectl rollout restart deployment <dep-name>`                         | Restarts a deployment (rolling).          | `kubectl rollout restart deployment/nginx`.                                                         |
| `kubectl scale deployment <dep-name> --replicas=<n>`                    | Scales replicas.                          | `kubectl scale deployment/nginx --replicas=5`.                                                      |
| `kubectl autoscale deployment <dep-name> --min=<min> --max=<max>`       | Autoscales a deployment.                  | `kubectl autoscale deployment/nginx --min=2 --max=10`.                                              |
| `kubectl delete deployment <dep-name>`                                  | Deletes a deployment.                     | `kubectl delete deployment/nginx`.                                                                  |
| `kubectl get replicasets`                                               | Lists ReplicaSets.                        | `kubectl get rs -o wide`.                                                                           |
| `kubectl scale rs <rs-name> --replicas=<n>`                             | Scales a ReplicaSet.                      | `kubectl scale rs/nginx-123 --replicas=3`.                                                          |
| `kubectl patch deployment <dep-name> --subresource='scale' -p '<json>'` | Patches scale subresource.                | `kubectl patch deployment/nginx --subresource='scale' --type='merge' -p '{"spec":{"replicas":2}}'`. |

### Networking and Services

Commands for services, networking, and exposure.

| Command                                                                                         | Description                         | Example                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------- |
| `kubectl get services`                                                                          | Lists all services.                 | `kubectl get services --sort-by=.metadata.name`.                |
| `kubectl describe services <svc-name>`                                                          | Details about a service.            | `kubectl describe services nginx`.                              |
| `kubectl expose deployment <dep-name> --port=<port> --target-port=<target>`                     | Exposes a deployment as a service.  | `kubectl expose deployment/nginx --port=80 --target-port=8000`. |
| `kubectl port-forward svc/<svc-name> <local-port>:<svc-port>`                                   | Forwards to a service.              | `kubectl port-forward svc/nginx 8080:80`.                       |
| `kubectl get endpoints`                                                                         | Lists endpoints.                    | `kubectl get endpoints -n default`.                             |
| `kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="ExternalIP")].address}'` | Gets external IPs of nodes.         | (Outputs IPs).                                                  |
| `kubectl exec -it <pod> -- nslookup <svc-name>`                                                 | Tests DNS from a pod.               | `kubectl exec -it test-pod -- nslookup nginx`.                  |
| `kubectl edit svc/<svc-name>`                                                                   | Edits a service.                    | `kubectl edit svc/nginx` (opens in editor).                     |
| `kubectl delete services <svc-name>`                                                            | Deletes a service.                  | `kubectl delete services nginx`.                                |
| `kubectl delete pods,services -l <label>`                                                       | Deletes pods and services by label. | `kubectl delete pods,services -l app=web`.                      |

### Storage Management

Commands for volumes, PVCs, etc.

| Command                           | Description                   | Example                                                                 |
| --------------------------------- | ----------------------------- | ----------------------------------------------------------------------- |
| `kubectl get pvc`                 | Lists PersistentVolumeClaims. | `kubectl get pvc -n dev`.                                               |
| `kubectl describe pvc <pvc-name>` | Details about a PVC.          | `kubectl describe pvc my-pvc`.                                          |
| `kubectl get pv`                  | Lists PersistentVolumes.      | `kubectl get pv --sort-by=.spec.capacity.storage` (sorted by capacity). |

### Scaling and Autoscaling

Cross-category scaling commands.

| Command                                                   | Description                      | Example                                               |
| --------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| `kubectl scale --replicas=<n> <type>/<name>`              | Scales a resource.               | `kubectl scale --replicas=5 deployment/nginx`.        |
| `kubectl autoscale <type> <name> --min=<min> --max=<max>` | Creates HorizontalPodAutoscaler. | `kubectl autoscale deployment/nginx --min=2 --max=5`. |

### Debugging and Logging

Advanced debugging, logs, events, and troubleshooting.

| Command                                                                                                               | Description                                | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `kubectl logs <pod-name>`                                                                                             | Prints logs from a pod.                    | `kubectl logs my-pod`.                                                                                                            |
| `kubectl logs -f <pod-name>`                                                                                          | Streams logs.                              | `kubectl logs -f my-pod -c container1`.                                                                                           |
| `kubectl logs <pod-name> -c <container>`                                                                              | Logs from specific container.              | `kubectl logs my-pod -c app`.                                                                                                     |
| `kubectl get events --sort-by=.metadata.creationTimestamp`                                                            | Lists events by timestamp.                 | (Sorted event list).                                                                                                              |
| `kubectl events --types=Warning`                                                                                      | Lists warning events.                      | (Filters to warnings).                                                                                                            |
| `kubectl top nodes` / `kubectl top pods`                                                                              | Shows resource usage.                      | `kubectl top pods -n dev`.                                                                                                        |
| `kubectl get pods --show-labels`                                                                                      | Shows labels on pods.                      | (Lists with labels).                                                                                                              |
| `kubectl diff -f <manifest.yaml>`                                                                                     | Compares cluster state to manifest.        | `kubectl diff -f deployment.yaml`.                                                                                                |
| `kubectl get <resource> -o jsonpath='<path>'`                                                                         | Custom JSONPath output.                    | `kubectl get pods -o jsonpath='{.items[*].metadata.labels.version}'`.                                                             |
| `kubectl replace --force -f <file>`                                                                                   | Force replaces a resource (causes outage). | `kubectl replace --force -f pod.json`.                                                                                            |
| `kubectl patch <resource> <name> --type='json' -p='<patch>'`                                                          | JSON patch (e.g., disable probe).          | `kubectl patch deployment/nginx --type='json' -p='[{"op": "remove", "path": "/spec/template/spec/containers/0/livenessProbe"}]'`. |
| `kubectl get nodes -o custom-columns='NODE_NAME:.metadata.name,STATUS:.status.conditions[?(@.type=="Ready")].status'` | Checks node readiness.                     | (Custom columns for status).                                                                                                      |

### Advanced and Miscellaneous

Jobs, CronJobs, plugins, etc.

| Command                                                                          | Description                        | Example                                                                                             |
| -------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| `kubectl create job <name> --image=<image> -- <command>`                         | Creates a Job.                     | `kubectl create job hello --image=busybox:1.28 -- echo "Hello World"`.                              |
| `kubectl create cronjob <name> --image=<image> --schedule="<cron>" -- <command>` | Creates a CronJob.                 | `kubectl create cronjob hello --image=busybox:1.28 --schedule="*/1 * * * *" -- echo "Hello World"`. |
| `kubectl get daemonset`                                                          | Lists DaemonSets.                  | `kubectl get daemonset -o wide`.                                                                    |
| `kubectl explain <resource>`                                                     | Gets documentation for a resource. | `kubectl explain pods`.                                                                             |
| `kubectl apply -f <dir>`                                                         | Applies all files in a directory.  | `kubectl apply -f ./configs/`.                                                                      |
| `kubectl get <resource> --subresource=status`                                    | Gets status subresource.           | `kubectl get deployment/nginx --subresource=status`.                                                |
| `kubectl rolling-update <old-rc> -f <new-rc-file>`                               | Performs rolling update (legacy).  | `kubectl rolling-update frontend-v1 -f frontend-v2.json`.                                           |

## YAML File Examples

Here are example YAML files for common Kubernetes resources. These can be used as templates (save as .yaml and apply with `kubectl apply -f <file>`). I've included basic to advanced examples.

### Namespace YAML (namespace.yml)

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: my-namespace
```

### Pod YAML (app_pod.yml)

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-sleep
spec:
  containers:
    - name: busybox
      image: busybox:1.28
      args:
        - sleep
        - "1000000"
```

### Deployment YAML (deployment.yml)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
```

### ReplicaSet YAML (replica.yml) # Note: Typically managed by Deployment, but standalone example

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx
          ports:
            - containerPort: 80
```

### Service YAML (service.yml)

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

### Secret YAML (secret.yml)

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  password: cDMzNHdvcmQ= # base64 encoded "p@ssw0rd"
  username: dXNlcm5hbWU= # base64 encoded "username"
```

### Multi-Object YAML (multi.yml) # Apply multiple in one file

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-sleep
spec:
  containers:
    - name: busybox
      image: busybox:1.28
      args:
        - sleep
        - "1000000"
---
apiVersion: v1
kind: Pod
metadata:
  name: busybox-sleep-less
spec:
  containers:
    - name: busybox
      image: busybox:1.28
      args:
        - sleep
        - "1000"
```

### PersistentVolumeClaim YAML (pvc.yml)

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

### Job YAML (job.yml)

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: hello-job
spec:
  template:
    spec:
      containers:
        - name: hello
          image: busybox:1.28
          command: ["echo", "Hello World"]
      restartPolicy: Never
```

### CronJob YAML (cronjob.yml)

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello-cron
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: hello
              image: busybox:1.28
              command: ["echo", "Hello World"]
          restartPolicy: OnFailure
```

---

This covers basic to advanced CLI commands, debugging tips, and YAML examples. If you need expansions on specific sections or more examples, let me know!
