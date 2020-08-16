import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  let gameMap = new GameMap()
  gameMap.initialize()
})
