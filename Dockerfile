# base image
FROM node:13.8.0-alpine

# set working directory
WORKDIR /mainpage

# add `/app/node_modules/.bin` to $PATH
ENV PATH /mainpage/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn global add serve@11.3.0
RUN yarn global add react-scripts@3.4.0

COPY webpage/mainpage/package.json ./package.json
RUN yarn install
COPY webpage/mainpage/  ./
RUN yarn run build

# start app
CMD ["serve", "-s", "/mainpage/build"]