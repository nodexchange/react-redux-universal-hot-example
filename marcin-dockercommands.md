# LOGIN

sudo docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username: nodexchange
Password: M4!D
Login Succeeded

# basic stop and restart #

~~~~
docker pull nodexchange/marcin-js-app:latest
~~~~

# PUSH

~~~~
sudo docker push nodexchange/marcin-js-app:dev
~~~~

# DOCKER LOGS 

~~~~
docker logs $container_id
~~~~


# short hand for manual stopping and removing

~~~~
docker stop marcin-js-app && docker rm marcin-js-app && docker rmi nodexchange/marcin-js-app:current && docker tag nodexchange/marcin-js-app:1.0 nodexchange/marcin-js-app:current && docker run -d -p 8080:8080 -p 3000-3031:3000-3031 --name marcin-js-app nodexchange/marcin-js-app:current
~~~~

# docker list all images

~~~~
docker images
~~~~

# docker list all containers

~~~~
docker ps -a
~~~~

# build 
~~~~
$ docker build -t nodexchange/marcin-js-app:dev .
~~~~

# list local builds
docker images

# complete command

~~~~
docker run -d -p 3000:3000 -p 3001:3001 -p 3030:3030 -p 3002:3002 -v $(pwd):/opt/app -v /opt/app/node_modules nodexchange/marcin-js-app:dev 
/bin/bash -c 'yarn install && npm run dev'
~~~~

# simple functional run

~~~~
docker run -p 3000:3000 -e'PORT=3000' nodexchange/marcin-js-app:dev
~~~~

# test command

~~~~
docker run -d -p 8080:8080 -p 3000:3000 -p 3001:3001 -p 3030:3030 -p 3002:3002 -v $(pwd):/opt/app -v /opt/app/node_modules -e "NODE_ENV=development" -e "HOST=104.236.36.61" --name marcin-js-app nodexchange/marcin-js-app:dev /bin/bash -c 'yarn install && npm run dev'
~~~~

# NGinx
To stop your web server, you can type:

sudo systemctl stop nginx
To start the web server when it is stopped, type:

sudo systemctl start nginx