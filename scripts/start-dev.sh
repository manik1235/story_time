#!/bin/sh

yarn install --check-files
rails s -p 35001 -b 0.0.0.0 -d
bin/webpack-dev-server
