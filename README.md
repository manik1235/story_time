# Story Time

A dnd website thing

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
2.6.6

* Base Docker image
[Dockerhub](https://hub.docker.com/_/ruby/)

* System dependencies
rails
ruby
bundler

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

### Docker
* Build instructions
docker build -t story_time .

* Deployment instructions
docker run -p -it story_time

### Docker Compose
* Build and deploy instructions
docker-compose up -d

### Access
* Access UI on localhost:35001
* Access console with
docker-compose exec rails c

### Automated Code Quality and Style review
* https://houndci.com/

### Security Vulnerability Scans
* https://dashboard.guardrails.io/gh/manik1235
* Scans on each PR, and leaves comments for security issues

### Continuous Build
* [Dockerhub image](https://hub.docker.com/repository/docker/manik1235/story_time)
* Pushes (or changes?) to the `master` branch automatically trigger a docker image build with tag `latest`
* Pushes (or changes?) to the `dev` branch automatically trigger a docker image build with the tag `dev`

# Development Ideas
[D&D API](http://dnd5eapi.co)

[Hex maps](https://www.dropbox.com/sh/66pz87ryagpg2dx/AABB645dkeHsQiEr1iASW-7wa?dl=0) from [reddit](https://www.reddit.com/r/DnDBehindTheScreen/comments/2z1q4x/hex_map_templates_based_on_5e_dmg_with/)

Membership site
Link to a map
Old school blue hex mat
Hexes on the map can be hand drawn, and clicked on, and it would show the adventure associated with that hex. So episode 41 and 42 happened on hex<3,4,2>. Click that hex for links to the episodes.
List of treasures, monsters, maps, so that you can run a game alongside if you want.

