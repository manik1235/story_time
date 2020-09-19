FROM ruby:2.7.1

WORKDIR /app

# Prepare
# Prepare to Install node
# Prepare to Install yarn
RUN gem install bundler:2.1.4 \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install
# Install node
# Install yarn
# Install packages
# Install Jasmine-core into devDependencies (-D)
RUN apt-get update \
  && apt-get install -y nodejs yarn \
  && yarn add jasmine-core -D

COPY . .

# Config & install bundler
## Dev  # RUN bundle config --global frozen 1 path vendor/bundle
## Prod # RUN bundle config --global frozen 1 deployment 1 local 1 path vendor/bundle
RUN bundle config --global frozen 1 path vendor/bundle \
  && bundle install \
  && rails webpacker:install \
  && rails db:setup

EXPOSE 35001
