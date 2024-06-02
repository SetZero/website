FROM node:20.14.0-alpine3.20 as builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html