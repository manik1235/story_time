import { GameMap } from '../../../app/javascript/components/game_map'

describe('components/game_map.js', function() {
  var mapId
  var gameMap

  beforeEach(function() {
    // Reset the items being tested
    mapId = 'map'
    gameMap = new GameMap(mapId)

    // Remove a matching element if it already exists
    var existingNode = document.getElementById(mapId)
    if (existingNode) {
      existingNode.remove()
    }
  })

  afterAll(function() {
    // Tear out the map div
    document.getElementById(mapId).remove()
  })

  describe('#_axes', function() {
    it('throws an error if the map is missing axis attributes', function() {
      // GameMap requires an element to set itself up
      var div = document.createElement('div')
      div.setAttribute('id', mapId)
      document.body.appendChild(div)

      expect(function() { gameMap._axes() }).toThrowError(SyntaxError, 'JSON.parse: unexpected character at line 1 column 1 of the JSON data')
    })

    it('returns an object containing q, r, and s axes', function() {
      // GameMap requires an element to set itself up
      var div = document.createElement('div')
      div.setAttribute('id', mapId)
      // Set example map attributes
      div.setAttribute('data-map-background', "tim.jpg")
      div.setAttribute('data-q', '{"name":"q","degrees":60.0,"xOffset":13.0,"yOffset":94.0,"hexDiameter":133.0,"mapWidth":800,"mapHeight":800,"dashFilledLength":44,"dashBlankLength":89,"color":"#ff0000"}')
      div.setAttribute('data-r', '{"name":"r","degrees":0.0,"xOffset":39.0,"yOffset":94.0,"hexDiameter":76.7,"mapWidth":800,"mapHeight":800,"dashFilledLength":44,"dashBlankLength":89,"color":"#00ff00"}')
      div.setAttribute('data-s', '{"name":"s","degrees":-60.0,"xOffset":106.0,"yOffset":-22.0,"hexDiameter":133.0,"mapWidth":800,"mapHeight":800,"dashFilledLength":44,"dashBlankLength":89,"color":"#0000ff"}')
      document.body.appendChild(div)

      var axes = gameMap._axes()
      expect(axes.q.name).toEqual('q')
      expect(axes.r.name).toEqual('r')
      expect(axes.s.name).toEqual('s')
    })
  })
})
