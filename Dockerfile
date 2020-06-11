FROM ruby:2.6.6

# throw errors if Gemfile has been modified since Gemfile.lock
RUN gem install bundler:2.1.4
RUN bundle config --global frozen 1 path vendor/bundle
# For prod # RUN bundle config --global frozen 1 deployment 1 local 1 path vendor/bundle

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install
RUN apt-get update
RUN apt-get install yarn
#RUN yarn install --check-files

#COPY . .

#CMD rails s -p 35001 -b 0.0.0.0
