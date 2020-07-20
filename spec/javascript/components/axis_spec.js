import { Axis } from '../../../app/javascript/components/axis'

describe('components/axis.js', function() {
  function createAxis(properties={}) {
    var defaults = { name: "q", degrees: 60, x_offset: 13, y_offset: 94, hex_diameter: 133, map_width: 800, map_height: 800, dash_filled_length: 44, dash_blank_length: 89, color: "#ff0000" }
    var custom = { ...defaults, ...properties }

    return new Axis(custom)
  }

  describe('#dash', function() {
    it('returns an array with the filled and blank dash lengths', function() {
      var axis = createAxis({ dash_filled_length: 2, dash_blank_length: 6 })

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
