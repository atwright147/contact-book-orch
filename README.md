

##Getting Started

1. Clone this repo into a folder
2. From that folder run: 
```sh
docker-compose build
docker-compose up -d
docker-compose exec node /bin/bash -c 'sequelize db:migrate'
```
3. Browse to `localhost:3000` and you should see a very basic "Hello World!" page.
4. View the database using **Sequel Pro** with the following settings (you should see three empty tables):
```
Host: 127.0.0.1
Username: user
Password: password
Database: db
Port: 3306
```

## Notes

### Docker

```sh
# connect to shell within docker container
docker exec -i -t ${container_identifier} /bin/bash

# delete ALL docker images
docker rmi $(docker images -a -q) -f

# delete all volumes
docker volume rm $(docker volume ls -q) -f
```
