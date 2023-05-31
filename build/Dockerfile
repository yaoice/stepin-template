# FROM nginx
FROM nginx
ENV TZ=Asia/Shanghai
WORKDIR /stepin-template/stepin
ADD ./dist .
ADD ./build/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080
