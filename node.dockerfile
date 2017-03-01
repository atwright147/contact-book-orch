# Development
FROM node:6.9.1

ADD ./package.json /app/package.json

RUN apt-get update \
    && npm install -g forever --silent --progress=false \
    && npm install --silent --progress=false

WORKDIR /app

# package.json changes will require image rebuild
RUN npm install

EXPOSE 3000

CMD ["forever", "server.js"]
