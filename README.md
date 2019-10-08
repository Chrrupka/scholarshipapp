# APP BACKEND

## Credentials

    login: admin@gmail.com
    password: admin

# Before your start use

Make sure you have installed on your machine `npm` and `nodemon` *(npm install -g nodemon)*

# Installation

This should be done before starting the server

	yarn install

# Start locally database using Docker

## WARNING

Make sure you had installed [docker](https://www.docker.com/).

Next use 

    docker-compose up
    
*Example of startup*    
![alt text](https://github.com/striok/hapi-api/blob/master/screen/docker_compose_1.png "Docker compose 1")

![alt text](https://github.com/striok/hapi-api/blob/master/screen/docker_compose_2.png "Docker compose 2")

Now you can start server using

    nodemon app
   
*Example of startup*       
![alt text](https://github.com/striok/hapi-api/blob/master/screen/nodemon_1.png "nodemon app 1")

![alt text](https://github.com/striok/hapi-api/blob/master/screen/nodemon_2.png "nodemon app 2")

# Update locally database

    npm run seed

*Example of startup*   
![alt text](https://github.com/striok/hapi-api/blob/master/screen/seed.png "seed")

# For more information about specific endpoint use swagger documentation
  
  You can find it here (when server running):
    
  [http://localhost:3000/documentation](http://localhost:3000/documentation)

# Execute 

![alt text](https://github.com/striok/hapi-api/blob/master/screen/postman.png "postman")
