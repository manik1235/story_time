import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  var selector = 'map'
  if (document.getElementById(selector)) {
    var gameMap = new GameMap(selector)
    gameMap.addMap()
  } else {
    console.log(`Error: Element with id='${selector}' required to be present in the DOM for the GameMap to work.`)
  }
})
