FROM ruby:2.6.6

RUN gem install bundler:2.1.4
# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1 path vendor/bundle # For dev
# RUN bundle config --global frozen 1 deployment 1 local 1 path vendor/bundle # for prod

WORKDIR /app

COPY . .
RUN apt-get update
# Install node
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y yarn
# Install Jasmine-core into devDependencies (-D)
RUN yarn add jasmine-core -D
# Install gems via bundler
RUN bundle install
# Create the public/packs, etc folder
RUN rails webpacker:install
RUN rails db:setup

EXPOSE 35001
