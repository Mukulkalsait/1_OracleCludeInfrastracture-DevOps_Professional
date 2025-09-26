# network creation.

## create network

```bash
docker network create appNet
```

 <!-- Y:   repeat run -->

```bash
docker run -d --name myredisdatabase --network appNet redis
```

## Docker running:

#### persistance data.

```bash
docker run -d --name myredis -v redis_data:/data redis redis-server --appendonly yes`
```

      -v redis_data:/data = persistentData
      --appendonly yes = durability mode (AOF log).

#### interactive | auto remove | temperory

```bash
docker run -it --rm redis redis-cli -h host.docker.internal
```

      --rm means auto-remove after exit

====================================================================================================================================================================================

## running:

```bash
docker run /
        -d / = dittach
        --name / = myredisdatabase
        redis
```

## geting in terminal:

```bash
docker /
    exec / = exicute
    -it / = interactive
    myredisdatabase / [name of contianer]
    redis-cli [cmd]

```
