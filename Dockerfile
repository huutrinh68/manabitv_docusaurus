FROM node:lts

ARG http_proxy $http_proxy
ARG https_proxy $https_proxy

ENV http_proxy=$http_proxy
ENV https_proxy=$https_proxy
WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN yarn config set registry https://registry.npmjs.org && \
    apt-get update && \
    npm config set proxy $http_proxy && \
    npm config set https_proxy $http_proxy && \
    yarn install

CMD ["yarn", "start"]
