FROM node:latest

WORKDIR /app
COPY package.json /usr/src/app/package.json
RUN npm install --silent
COPY . /app

FROM nginx:latest
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


