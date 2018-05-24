FROM nginx
MAINTAINER Flavien JOURDREN <email@fjourdren.com>


# Install Node.js
RUN apt-get update && apt-get install --yes curl && apt-get install --yes gnupg2
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

RUN npm install webpack -g
RUN npm install @angular/cli -g


# Do not start daemon for nginx
RUN echo "daemon off;" >> /etc/nginx/nginx.conf


# Overwrite default nginx config
COPY nginx-site.conf /etc/nginx/conf.d/default.conf


# add source
RUN mkdir /app
ADD . /app
WORKDIR /app


# build app
RUN npm install && ng build --prod

CMD ["nginx"]
