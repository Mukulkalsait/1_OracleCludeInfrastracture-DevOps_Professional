# 3 stesp:

## running:

`docker run 
        -d = dittach 
        --name = myredis 
redis`

## geting in terminal:

`docker
    exec = exicute
    -it  = interactive 
    myredis [name of contianer]
    redis-cli [cmd]`

## inside redis do your work:

SET name "mukuldk"
GET name
=> "mukuldk"

INCR counter (incriment the variable counter)
GET counter
=> "1"
INCR counter (incriment the variable counter)
INCR counter (incriment the variable counter)
INCR counter (incriment the variable counter)
GET counter
=> "4"
