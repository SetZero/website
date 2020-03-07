# base image
FROM node:13.8.0-alpine

# set working directory
WORKDIR /mainpage

# add `/app/node_modules/.bin` to $PATH
ENV PATH /mainpage/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn global add serve@11.3.0
RUN yarn global add react-scripts@3.4.0

COPY mainpage/package.json ./package.json
RUN yarn install
COPY mainpage/  ./
RUN yarn run build

COPY start.sh ./start.sh
RUN chmod +x /mainpage/start.sh

# start app
#RUN echo "[\"$NODE_NAME\", \"$POD_NAME\"]" > /mainpage/public/metadata.json
#CMD ["serve", "-s", "/mainpage/build"]
CMD ["/mainpage/start.sh"]