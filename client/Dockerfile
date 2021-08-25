FROM node:14.17.5-alpine

WORKDIR /app

COPY ./package.json .

RUN npm i && npm cache clean --force

COPY . .

CMD npm run start