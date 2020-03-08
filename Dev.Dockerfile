# base image
FROM node:13.8.0-alpine as build

# set working directory
WORKDIR /mainpage

# add `/app/node_modules/.bin` to $PATH
ENV PATH /mainpage/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn global add react-scripts@3.4.0

COPY mainpage/package.json ./package.json
RUN yarn install
COPY mainpage/  ./
RUN yarn run build

COPY start.sh /opt/start.sh
RUN chmod +x /opt/start.sh