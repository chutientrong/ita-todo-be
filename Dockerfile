FROM node:18-alpine as Build
WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]
