import { GameMap } from '../../components/game_map.js'

$(document).on('turbolinks:load', function() {
  setupGameMap()
  bindEvents()
})

function setupGameMap() {
  let selector = 'map'
  let gameMap = new GameMap(selector)
  gameMap.addMap()
}

function bindEvents() {
  $(".js-canvas").last().bind("mousemove", function(event) {
    var x = event.offsetX,
      y = event.offsetY

    $(".js-debug").text(`${x},${y}`)
  })
}
