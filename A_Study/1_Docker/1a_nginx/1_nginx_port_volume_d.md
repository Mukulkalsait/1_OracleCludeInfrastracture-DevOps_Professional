# 2 steps:

## Create director to forword eg.

=> mkdir `/home/mukuldk/1_file/7_docker_expeirment/1_nginx/`

`docker run 
    -d = dittach
    --name = mynginx
    -p 8080:80 = port (local:container)
    -v $(pwd)/folder:/usr/share/nginx/html/ --folder to folder   |   $(pwd)/index.html:/usr/share/nginx/html/index.html = volume attachment.
    nginx`

note: with -v $(pwd) = even if we move the file it will stillwork.
