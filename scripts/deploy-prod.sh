#!/bin/sh

git checkout master
git pull
docker image pull manik1235/story_time:latest
docker stack deploy -c swarm.yml --prune story_time_prod
