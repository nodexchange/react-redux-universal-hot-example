# How to deploy on Heroku

## Automatically with gitlab CI

- Create a heroku app and remember it name.

- Set the following variables (from project settings -> Variables)

  + HEROKU_STAGING_APP_NAME with value of your created heroku app name
  + HEROKU_STAGING_API_KEY with the value of API Key from https://dashboard.heroku.com/account

## Or Manually with Heroku Docker

Make sure to have Docker running on your machine.

https://devcenter.heroku.com/articles/container-registry-and-runtime

- Login to Heroku registry:

```bash
$ heroku container:login
```

- Deploy with existing Docker image

```bash
$ docker pull <image>
$ docker tag <image> registry.heroku.com/<heroku_app_name>/web
$ docker push registry.heroku.com/<heroku_app_name>/web
```

For example, to deploy `registry.gitlab.com/teracy/numerologist-app:develop` to `numerologist-hoatle` heroku app:

```bash
$ docker pull registry.gitlab.com/teracy/numerologist-app:develop
$ docker tag registry.gitlab.com/teracy/numerologist-app:develop registry.heroku.com/numerologist-hoatle/web
$ docker push registry.heroku.com/numerologist-hoatle/web
```

- Or deploy with current existing code base on local repo:

  + Setup:

```bash
$ git clone <this_repo>
$ cd numerologist-app
$ heroku git:remote -a <heroku_app_name>
```

  + Deploy

```bash
$ heroku container:push web
```

## Or Manually with traditional Heroku

- Setup:

```bash
$ heroku login
$ git clone <this_repo>
$ cd numerologist-app
$ heroku git:remote -a <heroku_app_name>
```

- Deploy:

```
$ git push heroku <current_branch>:master
```

to deploy the current branch.
