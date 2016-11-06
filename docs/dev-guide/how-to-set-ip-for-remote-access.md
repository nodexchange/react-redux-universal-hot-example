# How to set IP for remote access

- Create `.env` file in the original folder "numerologist-app" with the following content:

```
HOST=<your_running_machine_ip>
APIHOST=<your_running_machine_ip>
```

- Set your running machine ip address to access the app with its ip, for example:

```
HOST=192.168.99.101
APIHOST=192.168.99.101
```
  
- Recreate a new container after setting ip

```bash
$ docker-compose stop && docker-compose rm -f && docker-compose pull && docker-compose up
```

- Open http://<your_running_machine_ip>:3000 to see the running web app.
