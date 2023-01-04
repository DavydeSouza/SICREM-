FROM node:13.12.0-alpine

LABEL version="0.1" mantainer="ruds.devel@gmail.com"

ARG BRANCH_NAME
ENV APP_NAME=sicrem
ENV HOME=/home/apps

RUN npm install -g http-server @vue/cli@4.5.11 --yes --silent --progress=false

RUN adduser --home $HOME --disabled-password --shell /bin/false apps &&\
 	mkdir -p $HOME/$APP_NAME/node_modules &&\
	chown -R apps:apps $HOME/*

WORKDIR $HOME/$APP_NAME

COPY package*.json $HOME/$APP_NAME/

RUN npm install --silent --progress=false

COPY . $HOME/$APP_NAME/

COPY ./env/$BRANCH_NAME/.env $HOME/$APP_NAME/

RUN npm run build && rm -rf node_modules/

COPY --chown=apps:apps . $HOME/$APP_NAME/

USER apps

EXPOSE 8181

CMD ["http-server", "-p 8181", "dist"]
