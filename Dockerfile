FROM node:16.15.0

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
