# MAIN:

## REDIS:

    INTRO:
    1. RemoteDirectoryServer
    2. IN Memory DB ->SuperFast ,⚠ memory expensive,temperory (permenant => BackupRestore).
    3. USE: Cache(resualts/session/token), Message, superFastDB(leadboard/chats), queue system.
    4. Millinon request/sec | single-threaded
    5. SET GET INCR EXISTS(multyple)
       SET + EX
       ZSET
       HSET HGET HGETALL
       SADD SMEMBERS SISMEMBER(S-IS-MEMBER)
       SUBSCRIBE PUBLISH
       LPUSH RPUSH
       ZADD
       PFADD
       (no addvance queries like joins, multyTabTransations, advanced features.)
    6. great Microservice | Docker | AWS/Azure cache | and redis enterprise.  ∴ always on DOCKER.
    7. Security: basic(auth, TLS, ACLs)

    APPLICATIONS:
    1. caching: redicu DB Load.
    2. count request incr to limit apis
    3. leadboard (leads ,gaming scores)
    4. chat system PUB/SUB
    5. LIST (emails sending)

## HOW TO USE REDIS:

- key value

  ```bash
  SET name = "mukul" | set name mukul
  get name
  => "mukul"
  ```

- incriment STRING TYPE

  ```bash
  INCR counter # create string "counter" incriment +1
  INCR counter # incriment string "counter" +1
  INCR counter # incriment string "counter" +1
  get counter
  => "3"
  ```

- is_empty

  ```bash
  EXISTS name => "1" # ✅
  EXISTS name => nil # ❌
  EXISTS name counter => "1" # ❌ only one exist.
  EXISTS name counter => nil # ❌ none exist.
  EXISTS name counter => "2" # ✅
  ```

- set_with_expariy_time

```bash
  a ) SET session "xyz" EX 60 # setting key with (60 sec expire time)
  TTL session :52
  b ) set abcd "nmk" ex 213
  ttl abcd 208
  ttl abcd "nmk" => syntex error
  ttl nmk => (intiger) -2
  ttl asdfasdfa => (intiger) -2
```

- push_in_queue

  ```bash
  LPUSH queue2 task1 => (integer) 1 # Create "queue2" with type LIST add task1 ) = LEFT PUSH
  RPUSH queue2 task2 => (integer) 2 # RIGHT PUSH into same "queue2"
  LRANGE queue2 0 -1 => list all. 1. "task1" 2. "task2"
  LPUSH queue2 task3 =>(integer) 3 # same pushes.
  LPUSH queue2 task4 =>(integer) 4 # same pushes.
  LPUSH queue2 task5 =>(integer) 5 # same pushes.
  ```

  ```bash
  LRANGE queue2 0 -1  #G: LIST range
  =>
  1)"task5"
  2)"task4"
  3)"task3"
  4)"task1"
  5)"task2"
  ```

- hashes ( like structs)

  ```bash
  HSET user:1 name mukul age 29 job devops-eng field IT  #create hash [user:1] name = mukul, age = 29,job = devops-eng, field =IT
  => (integer) 4
  hget user:1 name # get [user:1].name
  "mukul"
  hget user:1 field
  "IT"
  hget user:1 age
  "29"
  hget user:1 job
  hgetall user:1 # get everything from [user:1]
  1 ) "name"
  2 ) "mukul"
  3 ) "age"
  4 ) "29"
  5 ) "job"
  6 ) "devops-eng"
  7 ) "field"
  8 ) "IT"devops-eng"
  ```

- sets (unique all value)

  ```bash
  SADD skills rust docker nix node nvim  # create set [skills]={rust , docker, nix, node, nvim}
  => (intiger)5
  SMEMBERS skills # get all from skills.
  1 ) "rust"
  2 ) "docker"
  3 ) "nix"
  4 ) "node"
  5 ) "nvim"
  SISMEMBER skills rust => (intiger) 1  # Y: SISMEMBER = S-IS-MEMBER => check if the "rust" is member of set "skills" 1 = ✅
  SISMEMBER skills must => (intiger) 0  # Y: SISMEMBER = S-IS-MEMBER => check if the "rust" is member of set "skills" 0 = ❌
  ```

- Pub / Sub

  ```bash
  SUBSCRIBE news
  127.0.0.1:6379(subscribed mode)>  PUBLISH news "Breaking News ! 🦰:"
  (error) ERR Can't execute 'publish': only (P|S)SUBSCRIBE / (P|S)UNSUBSCRIBE / PING / QUIT / RESET are allowed in this context
  127.0.0.1:6379(subscribed mode)>  PUBLISH news "Breaking News !"
  (error) ERR Can't execute 'publish': only (P|S)SUBSCRIBE / (P|S)UNSUBSCRIBE / PING / QUIT / RESET are allowed in this context
  ```

- GET ALL

```bash
  KEYS *   #list all keys
  1) "que"
  2) "name"
  3) "name2"
  4) "num"
  5) "key"
```

- Find Type.

```bash
  TYPE key   # Tells you if it’s a string, list, hash, etc.
  TTL key    # Shows remaining time-to-live (if key has expiry).
  DBSIZE     # Total number of keys in the DB.
  SELECT 0   # G: Switch to DB 0 (default). Redis supports multiple DBs (SELECT 1, SELECT 2, etc).
  FLUSHDB    # DX: Delete everything in current DB.
```

#### small test:

```bash
SET name "mukuldk"
SET lang "rust"
INCR number
INCR number
INCR number
HSET u:1 name "Mukul" age "24" job "DevOps-eng" field "IT"
LPUSH "OCI Devops" Docker Podman "OCI-Features" Kuberneties Ansible Automation # created "OCI Devops"
RPUSH Solana RUST React "Actics Web" Ratatui
SADD Tools nvim nixos zellij hyprland kitty lazydocker lazygit


# Now see what’s inside
KEYS *
TYPE name
TYPE lang
TYPE number
TYPE user:1
TYPE tasks
TYPE tools

MGET name lang number
HGETALL user:1
LRANGE "OCI Devops" 0 -1
LRANGE Solana 0 -1
SMEMBERS Tools
```

```BASH
# G: STEP:1 SAVE
SAVE # Y: This will save all the data of db  in /data/dump.rdb File
docker exec -it myredis redis-cli SAVE # IMP: or from outside

# G: SETP 2: docker cp
docker cp myredis:/data/dump.rdb ./dump.rdb

# B: if -v redis_data:/data is used
docker volume inspect redis_data
=> /var/lib/docker/volumes/redis_data/_data  # copy _data

# G: STEP:3 send the data to newer image.
docker cp ./dump.rdb myredis:/data/dump.rdb
```

#### Example Rust usage

```rust
use redis::Commands;

fn main() -> redis::RedisResult<()> {
    let client = redis::Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;

    let _: () = con.set("lang", "Rust")?;
    let val: String = con.get("lang")?;
    println!("Stored: {}", val);
    Ok(())
}
```
