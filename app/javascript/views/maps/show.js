import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  var gameMap = new GameMap('map')
  gameMap.addMap()
})
