
## 🧭 **Final Structure (Book Flow Order)**

### 🩵 **Part 1: Cluster Setup & Foundations**

1. `cluster.yaml` – Cluster configuration (kubeadm style)
2. `namespace.yaml` – Organizing workloads
3. `serviceaccount.yaml` – Pod identities

---

### 🧠 **Part 2: Core Workloads**

4. `pod.yaml` – Basic unit of execution
5. `replicaset.yaml` – Managing identical pods
6. `deployment.yaml` – Declarative rolling updates
7. `statefulset.yaml` – Persistent identity workloads
8. `daemonset.yaml` – Cluster-wide agents
9. `job.yaml` – One-time batch execution
10. `cronjob.yaml` – Scheduled workloads

---

### 🌐 **Part 3: Networking & Communication**

11. `service.yaml` – ClusterIP, NodePort, LoadBalancer
12. `ingress.yaml` – HTTP routing
13. `networkpolicy.yaml` – Pod traffic control

---

### ⚙️ **Part 4: Configuration & Secrets**

14. `configmap.yaml` – Externalizing configuration
15. `secret.yaml` – Sensitive data handling
16. `resourcequota.yaml` – Namespace-wide limits
17. `limitrange.yaml` – Per-pod resource constraints

---

### 💾 **Part 5: Storage & Persistence**

18. `pv.yaml` – Persistent volume definition
19. `pvc.yaml` – Volume claim binding
20. `storageclass.yaml` – Dynamic provisioning

---

### 🔐 **Part 6: Access Control (RBAC)**

21. `role.yaml` – Namespace-specific permissions
22. `rolebinding.yaml` – Binding roles
23. `clusterrole.yaml` – Global permissions
24. `clusterrolebinding.yaml` – Global role binding

---

### ⚖️ **Part 7: Scheduling & Optimization**

25. `affinity.yaml` – Node affinity rules
26. `tolerations.yaml` – Taint-based scheduling
27. `priorityclass.yaml` – Pod priority setup

---

### 🧩 **Part 8: Custom Resources & Extensibility**

28. `crd.yaml` – Defining a custom API
29. `customresource.yaml` – Using your CRD

---
