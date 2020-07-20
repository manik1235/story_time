import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  var selector = 'map'
  var gameMap = new GameMap(selector)
  gameMap.addMap()
})
