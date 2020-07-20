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

    // Set up the default gameMap
    setupMapDiv(mapId)
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

      gameMap.addMap(mapId)
      expect(document.getElementById('map-component__map-layer')).toEqual(true)
    })

    it('adds the grid layer component html to the DOM', function() {
      pending()
      expect(document.getElementById('map-component__grid-layer')).toEqual(true)
    })

    it('logs an error to the console when no suitable element is found', function() {
      pending()
    })
  })

  describe('#_axes', function() {
    it('throws an error if the map is missing axis attributes', function() {
      expect(function(){ gameMap._axes() }).toThrowError(SyntaxError, 'JSON.parse: unexpected character at line 1 column 1 of the JSON data')
    })

    it('returns an object containing each axis', function() {
      // GameMap requires an element to set itself up
      var div = document.createElement('div')
      div.setAttribute('id', mapId)
      // Set example map attributes
      div.setAttribute('data-map', "{\"background\":\"tim.jpg\",\"axes\":[\"{\\\"name\\\":\\\"q\\\",\\\"degrees\\\":60.0,\\\"x_offset\\\":13.0,\\\"y_offset\\\":94.0,\\\"hex_diameter\\\":133.0,\\\"map_width\\\":800,\\\"map_height\\\":800,\\\"dash_filled_length\\\":44,\\\"dash_blank_length\\\":89,\\\"color\\\":\\\"#ff0000\\\"}\",\"{\\\"name\\\":\\\"r\\\",\\\"degrees\\\":0.0,\\\"x_offset\\\":39.0,\\\"y_offset\\\":94.0,\\\"hex_diameter\\\":76.7,\\\"map_width\\\":800,\\\"map_height\\\":800,\\\"dash_filled_length\\\":44,\\\"dash_blank_length\\\":89,\\\"color\\\":\\\"#00ff00\\\"}\",\"{\\\"name\\\":\\\"s\\\",\\\"degrees\\\":-60.0,\\\"x_offset\\\":106.0,\\\"y_offset\\\":-22.0,\\\"hex_diameter\\\":133.0,\\\"map_width\\\":800,\\\"map_height\\\":800,\\\"dash_filled_length\\\":44,\\\"dash_blank_length\\\":89,\\\"color\\\":\\\"#0000ff\\\"}\"]}")
      document.body.appendChild(div)

      var axisNames = gameMap._axes().map(axis => axis.name)
      expect(axisNames).toEqual(['q', 'r', 's'])
    })
  })
})
