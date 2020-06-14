#!/bin/sh

git checkout master
git pull
docker image pull manik1235/story_time:latest
docker-compose down
docker-compose up -d
