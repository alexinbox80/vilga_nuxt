#!/bin/bash

cp ./env/env.prod .env
source .env

docker container stop $APPLICATION
docker container rm $APPLICATION
docker image rm $APPLICATION

#pnpm run build

docker build --platform linux/amd64 -t $APPLICATION .
docker run -d -p $NODE_PORT:3000 --name $APPLICATION $APPLICATION