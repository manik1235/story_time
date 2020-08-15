import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  let selector = 'map'
  let gameMap = new GameMap(selector)
  gameMap.addMap()
})
