FROM node:13.12.0-alpine AS building

LABEL version="0.3" mantainer="ruds.devel@gmail.com"

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

COPY ./env/$BRANCH_NAME/* $HOME/$APP_NAME/

RUN npm run build && rm -rf node_modules/

RUN ls $HOME/$APP_NAME


FROM nginx:1.21.0-alpine AS homolog

RUN adduser --home $HOME --disabled-password --shell /bin/false apps &&\
	mkdir -p $HOME/$APP_NAME/node_modules &&\
	chown -R apps:apps $HOME/*

WORKDIR /home/apps

COPY --from=building /home/apps/sicrem/dist ../../usr/share/nginx/html
COPY --from=building /home/apps/sicrem/nginx.conf ../../etc/nginx/conf.d/default.conf

EXPOSE 8181

ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]
