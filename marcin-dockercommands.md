# basic stop and restart #

~~~~
docker pull nodexchange/marcin-js-app:latest
~~~~

~~~~
docker stop marcin-js-app && docker rm marcin-js-app && docker rmi nodexchange/marcin-js-app:current && docker tag nodexchange/marcin-js-app:1.0 nodexchange/marcin-js-app:current && docker run -d -p 8080:8080 -p 3000-3031:3000-3031 --name marcin-js-app nodexchange/marcin-js-app:current
~~~~

# docker list all containers
~~~~
docker ps -a
~~~~

# list local builds
docker images

# simple execute

# complete command
~~~~
docker run -d -p 3000:3000 -p 3001:3001 -p 3030:3030 -p 3002:3002 -v $(pwd):/opt/app -v /opt/app/node_modules nodexchange/marcin-js-app:dev /bin/bash -c 'yarn install && npm run dev'
~~~~