import { GameMap } from '../../../app/javascript/components/game_map'

describe('components/game_map.js', function() {
  var mapId
  var gameMap

  function setupMapDiv(mapId) {
    // GameMap requires an element to set itself up
    var div = document.createElement('div')
    div.setAttribute('id', mapId)
    document.body.appendChild(div)
  }

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
    // Remove a matching element if it already exists
    var existingNode = document.getElementById(mapId)
    if (existingNode) {
      existingNode.remove()
    }
  })

  describe('#addMap', function() {
    it('adds the map layer component html to the DOM', function() {
      pending()
      /* I have not been able to clear this error
       * Error: Cannot find module './maps/undefined' in http://10.200.128.102:35003/packs/js/specs-5f4cae75676e72fff026.js (line 525)
       * error properties: Object({ code: 'MODULE_NOT_FOUND' })
       * <Jasmine>
       */
      setupMapDiv(mapId)

      gameMap.addMap(mapId)
      expect(document.getElementById('map-component__map-layer')).toEqual(true)
    })

    it('adds the grid layer component html to the DOM', function() {
      pending()
      expect(document.getElementById('map-component__grid-layer')).toEqual(true)
    })
  })

  describe('#_axes', function() {
    it('throws an error if the map is missing axis attributes', function() {
      setupMapDiv(mapId)

      expect(function(){ gameMap._axes() }).toThrowError(SyntaxError, 'JSON.parse: unexpected character at line 1 column 1 of the JSON data')
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
