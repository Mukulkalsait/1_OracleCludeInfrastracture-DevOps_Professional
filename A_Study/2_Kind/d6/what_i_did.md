# Prerequeesits: 
- the working Dockerfiles

# Step1: Build the images
- build the image 

```bash 
dive build -t docker.io/mukuldk/<img-name>:<version_name/latest>
```

# Step2: Push to docker-hub

```bash 
podman images
```
 <!-- Y: podman images OP => -->
REPOSITORY                  TAG         IMAGE ID      CREATED       SIZE
docker.io/gitlab/gitlab-ce       latest      0a28c9a23ce4  4 days ago    4 GB
docker.io/library/nginx          latest      60adc2e137e7  6 days ago    155 MB
docker.io/kindest/node           v1.34.0     4357c93ef232  2 months ago  991 MB
docker.io/library/node           18-alpine   ee77c6cd7c18  8 months ago  129 MB
docker.io/<mukuldk>/<i_name>     18-alpine   ee77c6cd7c18  8 months ago  129 MB

```bash 
 podman push docker.io/mukuldk/<image_name>:<version>

 
```

