FROM node:14.5
FROM postgres

WORKDIR /usr/src/app 

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 8080

CMD ["node", "server.js"]