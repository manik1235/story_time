FROM ruby:2.6.6

RUN gem install bundler:2.1.4
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1 path vendor/bundle # For dev
# For prod # RUN bundle config --global frozen 1 deployment 1 local 1 path vendor/bundle

WORKDIR /app

COPY . .
RUN apt-get update
RUN apt-get -y install yarn
RUN bundle install

CMD rails s -p 35001 -b 0.0.0.0

EXPOSE 35001
