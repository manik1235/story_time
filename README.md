# Story Time

A dnd website thing

* Ruby version
2.6.6

* Base Docker image
[Dockerhub](https://hub.docker.com/_/ruby/)

* System dependencies
docker
docker-compose
docker swarm (for production)

### Dev Access
* Access UI on localhost:35003
* Access console with
  - `docker-compose run --rm cmd rails c`

### Running tests locally
* rspec for ruby
  - `docker-compose run --rm cmd rspec`
* Jasmine for JavaScript
  - `docker-compose up -d`
  - visit http://localhost:35003/jasmine

### Continuous Build
* [Dockerhub image](https://hub.docker.com/repository/docker/manik1235/story_time)
* Pushes to the `master` branch automatically trigger a docker image build with tag `latest`

### Deployment
* Dev
  - `docker-compose up -d`
* Production
  - To deploy to Docker Swarm:
  - Run `scripts/deploy-prod` on a manager node
  - To deploy locally
  - `docker-compose -f swarm.yml up -d`

### Styleguide
[BEM](http://getbem.com/naming/) should be used for CSS naming conventions. See [this issue](https://github.com/manik1235/story_time/issues/35) for a brief summary.

### Accessibility
[Web Accessibility Checker](https://achecker.ca/checker/index.php)

some edit //testing edits by contributor Jordan