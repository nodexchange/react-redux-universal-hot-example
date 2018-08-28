# start dev 
npm run dev

# start prod
npm run prod

# release (docker operations within the docker terminal pls)

1. (sudo) docker build -t nodexchange/marcin-js-app:dev .
2. (sudo) docker push nodexchange/marcin-js-app:dev
(while uploading you can do below)
3. ssh root@104.236.36.61
4. docker ps -a
5. docker stop [container id]
6. docker rm `docker ps --no-trunc -aq`
7. docker pull nodexchange/marcin-js-app:dev
8. docker run -d -p 3000:3000 -e'PORT=3000' nodexchange/marcin-js-app:dev
9. exit

# with wercker
1. git commit
2. docker build -t nodexchange/marcin-js-app:dev .
3. docker push nodexchange/marcin-js-app:dev
4. git push (this will start wercker etc.);

# new pipline
1. git commit 
2. git push