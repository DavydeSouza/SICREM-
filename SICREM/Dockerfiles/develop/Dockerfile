FROM node:13.12.0-alpine AS building

LABEL version="0.1" mantainer="ruds.devel@gmail.com"

ARG BRANCH_NAME
ENV APP_NAME=sicrem
ENV HOME=/home/apps

RUN npm install @vue/cli@4.5.11 --yes --silent --progress=false

RUN adduser --home $HOME --disabled-password --shell /bin/false apps &&\
	mkdir -p $HOME/$APP_NAME/node_modules &&\
	chown -R apps:apps $HOME/*

WORKDIR $HOME/$APP_NAME

COPY package*.json $HOME/$APP_NAME/

RUN npm install --silent --progress=false

COPY . $HOME/$APP_NAME/

COPY ./env/$BRANCH_NAME/.env $HOME/$APP_NAME/

RUN npm run build && rm -rf node_modules/

RUN ls $HOME/$APP_NAME


FROM node:13.12.0-alpine

RUN npm install -g http-server

RUN adduser --home $HOME --disabled-password --shell /bin/false apps &&\
	mkdir -p $HOME/$APP_NAME/node_modules &&\
	chown -R apps:apps $HOME/*

WORKDIR /home/apps

COPY --from=building /home/apps/sicrem/dist /home/apps

CMD ["http-server", "/home/apps", "-p 8181"]

EXPOSE 8181
