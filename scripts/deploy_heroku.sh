#!/bin/bash
set -e

if [ "$DOCKER_FILE" == "Dockerfile" ]; then
  docker login --username=$HEROKU_USER_NAME --password=$HEROKU_API_KEY $HEROKU_REGISTRY
  docker tag $CONTAINER_IMAGE $HEROKU_IMAGE
  docker push $HEROKU_IMAGE
fi