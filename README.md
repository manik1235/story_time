# Story Time

A dnd website thing

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
2.6.6

* Docker images
[Dockerhub - ruby](https://hub.docker.com/_/ruby/)
[Dockerhub - story_time](https://hub.docker.com/_/story_time/)

* System dependencies
rails
ruby
bundler

### Docker Build
docker build -t story_time .

### Access
* Access UI on 
- localhost:35001 for production
- :35002 for dev
- :35003 for local
* Access console with
- `docker-compose -f docker-compose.<env>.yml cmd --rm rails c`

### Automated Code Quality and Style review
* https://houndci.com/

### Security Vulnerability Scans
* https://dashboard.guardrails.io/gh/manik1235
* Scans on each PR, and leaves comments for security issues

### Continuous Build
* [Dockerhub image](https://hub.docker.com/repository/docker/manik1235/story_time)
* Pushes to the `master` branch automatically trigger a docker image build with tag `latest`
* Pushes to the `dev` branch automatically trigger a docker image build with the tag `dev`

### Deployment
* Production:
- `bash scripts/deploy.sh`
- Branch: master
- DockerHub tag: latest
* Branch: dev, DockerHub tag: dev
- 'docker-compose -f docker-compose.dev.yml up -d`
* Build and deploy locally for dev, with hot code reloading
- `docker-compose -f docker-compose.local.yml up -d`

### Testing
* Jasmine
- Visit the `/jasmine` endpoint for JavaScript tests
* RSpec
- `docker-compose -f docker-compose.<env>.yml cmd --rm rspec`

# Resources
### DnD 5e API
[DnD 5e API](https://www.dnd5eapi.co/)
This api gives details for a variety of useful properties.
I think this means we will only need to store the url or index of the DND resource, and maybe cache stuff.
Then, those items can be included in the details of the hex.

### Styleguide
[BEM](http://getbem.com/naming/) should be used for CSS naming conventions. See [this issue](https://github.com/manik1235/story_time/issues/35) for a brief summary.

### Awesome Ruby
A collection of ruby resources, include auth and oauth stuff
https://awesome-ruby.com/

### Auth Options
[Devise](https://github.com/heartcombo/devise)
[Warden](https://github.com/wardencommunity/warden)

### Accessibility
[Web Accessibility Checker](https://achecker.ca/checker/index.php)

# Development Ideas
[Hex maps](https://www.dropbox.com/sh/66pz87ryagpg2dx/AABB645dkeHsQiEr1iASW-7wa?dl=0) from [reddit](https://www.reddit.com/r/DnDBehindTheScreen/comments/2z1q4x/hex_map_templates_based_on_5e_dmg_with/)

Membership site
Link to a map
Old school blue hex mat
Hexes on the map can be hand drawn, and clicked on, and it would show the adventure associated with that hex. So episode 41 and 42 happened on hex<3,4,2>. Click that hex for links to the episodes.
List of treasures, monsters, maps, so that you can run a game alongside if you want.
