# How to deploy on production with docker-compose

## Prerequisites

- docker-compose is installed
- access permimssion to docker images specified on docker-compose.yaml file below.

## Copy docker-compose.prod.yaml

- Make the app directory, for example: `$ mkdir /opt/app`

- Copy docker-compose.prod.yaml to the previous app directory

- rename: `docker-compose.prod.yaml` to `docker-compose.yaml`

## Run

```bash
$ cd /opt/app
$ docker-compose up -d
```

# Scale

To scale the web app, for example, to have 2 running web instances:

```bash
$ docker-compose scale web=2
```
