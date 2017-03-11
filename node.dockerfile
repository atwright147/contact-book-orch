# Development
FROM node:boron

ADD ./package.json /app/package.json

WORKDIR /app

# package.json changes will require image rebuild
RUN npm install -g nodemon knex bookshelf mysql --silent --progress=false && \
    npm install --silent --progress=false

EXPOSE 3000

# CMD ["nodemon", "--legacy-watch", "/app/server.js"]
