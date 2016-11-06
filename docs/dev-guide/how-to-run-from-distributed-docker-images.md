# How to run the web app from distributed Docker image


## Official Images

We push official Docker images to Docker registries.

For example:

`registry.gitlab.com/teracy/my-app:latest` is the latest stable release.
`registry.gitlab.com/teracy/my-app:develop` is the latest CI development release.

You need to login first and make sure you have access permission to these images:

```bash
$ docker login registry.gitlab.com
```

To run the app:

```bash
$ docker pull <image>
$ docker run -p <port>:<port> -e PORT=<port> <image>
```

For example, to run the latest image from the develop branch:

```bash
$ docker pull registry.gitlab.com/teracy/my-app:develop
$ docker run -p 3000:3000 -e PORT=3000 registry.gitlab.com/teracy/my-app:develop
```

## Developer Images

We're building images from developers' repositories, too.

We build Docker images for each branch on official repos and developers' repos.

For example, to run the app from `3-new-feature` branch from hoatle's:

```bash
$ docker pull registry.gitlab.com/hoatle/my-app:3-new-feature
$ docker run -p 3000:3000 -e PORT=3000 registry.gitlab.com/hoatle/my-app:3-new-feature
```

By running Docker images like this, we could easily check all the
branches without downloading any source code.

This is very useful for QA.
