FROM node:alpine

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD . /var/www/app

CMD ["node", "app.js"]

