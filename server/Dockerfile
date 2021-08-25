FROM node:14.17.5-alpine

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY ./package.json .

RUN npm i && npm cache clean --force

COPY . .

CMD npm run start:dev