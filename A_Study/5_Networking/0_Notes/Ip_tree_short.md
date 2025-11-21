 # PHYSICAL

| Layer     | Example        | Who can access                             |
| --------- | -------------- | ------------------------------------------ |
| Localhost | `127.0.0.1`    | Only your computer                         |
| Hostname  | `127.0.0.2`    | Only your computer                         |
| LAN       | `192.168.1.12` | Devices in your network (WiFi/LAN)         |
| Public IP | `103.xx.xx.xx` | Anyone on the internet (if port-forwarded) |


## 1) `localhost` => `127.0.0.1`

## 2) cat /etc/hosts shows Nix2  `127.0.0.2`
  - 127.0.0.1 localhost 
  - 127.0.0.2 Nix2 (hostname)

## 3) `hostname -I` → **192.168.1.12** LAN provided ip for mashine

## 4) curl https://ifconfig.me [not IPconfig its IFconfig]

===================================================================

 # VIRTUAL 

| Type               | Where visible   | Example           |
| ------------------ | --------------- | ----------------- |
| Pod IP             | inside cluster  | `10.244.0.12`     |
| Service ClusterIP  | inside cluster  | `10.96.0.1`       |
| Node IP            | host LAN IP     | `192.168.1.12`    |
| Ingress / NodePort | external access | depends on config |


```bash 
mukuldk  …/A_Study/2_Kind/P4   main !?  ♥ 17:24  kubectl get pods -n namespace-1 -o wide
NAME                     READY   STATUS    RESTARTS   AGE   IP            NODE               NOMINATED NODE   READINESS GATES
dep-1-7d74c8577b-4nxhz   1/1     Running   0          88m   10.244.3.9    porject1-worker    <none>           <none>
dep-1-7d74c8577b-529h4   1/1     Running   0          88m   10.244.1.8    porject1-worker2   <none>           <none>
dep-1-7d74c8577b-kfft2   1/1     Running   0          88m   10.244.1.7    porject1-worker2   <none>           <none>
dep-1-7d74c8577b-sphzm   1/1     Running   0          88m   10.244.3.10   porject1-worker    <none>           <none>
```
 

# 📌 How to decide which IP to target?

| You want to access...                             | Use                                     |
| ------------------------------------------------- | --------------------------------------- |
| Program running on your machine only              | `127.0.0.1` / `localhost`               |
| Program on your machine from another device (LAN) | `192.168.x.x`                           |
| Program from the internet                         | Public IP + port forwarding             |
| Kubernetes Pod                                    | `port-forward`, `Service`, or `Ingress` |
| Container inside Podman (outside K8s)             | `localhost` or container bridge IP      |



| Situation                                | Correct command                                    |
| ---------------------------------------- | -------------------------------------------------- |
| Access app running on host               | `curl http://localhost:3000`                       |
| Access host app from mobile on same WiFi | `curl http://192.168.1.12:3000`                    |
| Access host app from internet            | `curl http://<PUBLIC_IP>:3000` + router forwarding |
| Access Kubernetes Pod                    | `kubectl port-forward`                             |
| Access Kubernetes Service (NodePort)     | `http://192.168.1.12:<nodePort>`                   |
| Access Kubernetes Ingress                | domain → mapped to Node IP                         |



# 📌 Visual map

Internet (Public IP)
         ↓
Router (192.168.1.1)
         ↓
Your PC (192.168.1.12 — LAN IP)
         ↓
Apps listening on localhost (127.0.0.1)
         ↓
Kind cluster container network (10.244.0.x)

