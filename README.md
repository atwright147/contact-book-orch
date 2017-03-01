

# Docker

```sh
# connect to shell within docker container
docker exec -i -t ${container_identifier} /bin/bash

# delete ALL docker images (add -f at the end to force)
docker rmi $(docker images -a -q)
```
