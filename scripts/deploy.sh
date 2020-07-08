#!/bin/sh

git checkout master
git pull
docker image pull manik1235/story_time:latest
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml up -d
