FROM node:10 as build

ARG REACT_APP_API_URL

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /usr/src/app

ENV REACT_APP_API_URL $REACT_APP_API_URL

RUN npm run build


FROM nginx:latest
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


