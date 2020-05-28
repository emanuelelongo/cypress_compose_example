# Example of docker-composing web app, cypress and API mocks
Just a simple POC of running a Web App and its Cypress tests in separate Docker containers.

A third container is pulled up for API mocks, just in case the cypress mocks weren't enough (I'm thinking of server side render).


## Run
```
docker-compose build
docker-compose up --exit-code-from test
```

## Open cypress for interactive usage through Docker

If you want to _see_ what's happening inside the docker container you need a X Window System on your Mac:
``` sh
$ brew cask install xquartz
```

Then allow network connections:
* open the XQuartz app
* preferences -> security ->
    * __[X] Allow connection from network clients__
    * __[_] Authenticate connections__
* restart the XQuartz app

Finally build and run the appropriate compose file `docker-compose-x11.yml`:
``` bash
$ docker-compose -f docker-compose-x11.yml build
$ docker-compose -f docker-compose-x11.yml up --exit-code-from test
```

The Cypress window should open up.