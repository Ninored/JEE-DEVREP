FROM nginx:latest
COPY --from=build /front/public /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


