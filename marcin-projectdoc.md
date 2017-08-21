# start dev 
npm run dev

# start prod
npm run prod

# release

1. sudo docker build -t nodexchange/marcin-js-app:dev .
2. sudo docker push nodexchange/marcin-js-app:dev
3. ssh root@104.236.36.61
4. docker ps -a
5. docker stop [container id]
6. docker pull nodexchange/marcin-js-app:dev
7. docker run -d -p 3000:3000 -e'PORT=3000' nodexchange/marcin-js-app:dev
8. docker rm `docker ps --no-trunc -aq`
9. exit