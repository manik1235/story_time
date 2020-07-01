const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

/*
environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  jasmineRequire: 'jasmine-core/lib/jasmine-core/jasmine.js'
}))
*/

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery'
, jQuery: 'jquery'
, Popper: ['popper.js', 'default']
, jasmineRequire: 'jasmine-core/lib/jasmine-core/jasmine.js'
}))

module.exports = environment
