## Example of docker-composing web app, cypress and API mocks
Just a simple POC of running a Web App and its Cypress tests in separate Docker containers.

A third container is pulled up for API mocks, just in case the cypress mocks weren't enough (I'm thinking of server side render).


### Run
```
docker-compose build
docker-compose up --abort-on-container-exit
```