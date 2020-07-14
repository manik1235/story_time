import { Axis } from '../../../app/javascript/components/axis'

describe('components/axis.js', function() {
  function createAxis(properties) {
    if (properties === undefined) {
      properties = {}
    }
    var defaults = { name: "q", degrees: 60, xOffset: 13, yOffset: 94, hexDiameter: 133, mapWidth: 800, mapHeight: 800, dashFilledLength: 44, dashBlankLength: 89, color: "#ff0000" }
    var custom = { ...defaults, ...properties }

    return new Axis(custom)
  }

  describe('#dash', function() {
    it('returns an array with the filled and blank dash lengths', function() {
      var axis = createAxis({ dashFilledLength: 2, dashBlankLength: 6 })

      expect(axis.dash).toEqual([2, 6])
    })
  })

  describe('#drawLines', function() {
    it('', function() {
      pending()
    })
  })

  describe('#m', function() {
    it('', function() {
      pending()
    })
  })

  describe('#shift', function() {
    it('', function() {
      pending()
    })
  })

  describe('#shifts', function() {
    it('', function() {
      pending()
    })
  })

  describe('#radians', function() {
    it('', function() {
      pending()
    })
  })

  describe('#xStep', function() {
    it('', function() {
      pending()
    })
  })

  describe('#yStep', function() {
    it('', function() {
      pending()
    })
  })
})
