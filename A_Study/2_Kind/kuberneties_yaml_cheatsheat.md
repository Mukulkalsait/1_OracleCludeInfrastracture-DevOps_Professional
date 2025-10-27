
# YAML File Examples
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

### ReplicaSet YAML (replica.yml)  # Note: Typically managed by Deployment, but standalone example
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
  password: cDMzNHdvcmQ=  # base64 encoded "p@ssw0rd"
  username: dXNlcm5hbWU=  # base64 encoded "username"
```

### Multi-Object YAML (multi.yml)  # Apply multiple in one file
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
