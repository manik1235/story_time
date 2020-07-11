import { GameMap } from '../../components/map.js'

$(document).on('turbolinks:load', function() {
  var gameMap = new GameMap('map')
  gameMap.addMap()
})
