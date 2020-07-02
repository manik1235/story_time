const MapStuff = require('../../../app/javascript/utilities/map_stuff').MapStuff

describe("utilities/map_stuff.js", function() {
  var mapStuff

  beforeEach(function() {
    mapStuff = new MapStuff
  })

  describe("#gridToHex", function() {
    it("returns cubic coordinates given grid coordinates", function() {
      // Some of the zeros are negative, probably due to rounding.
      expect(mapStuff.gridToHex(1, 1)).toEqual({ q: 0, r: 0, s: -0 })
      expect(mapStuff.gridToHex(130, -40)).toEqual({ q: 3, r: -2, s: -1 })
      expect(mapStuff.gridToHex(-1630, 340)).toEqual({ q: -36, r: 25, s: 11 })

      expect(mapStuff.gridToHex(-1620, 364)).toEqual({ q: -36, r: 25, s: 11 })
    })
  })

  describe("#hexToGrid", function() {
    it("returns grid coordinates given cubic coordinates", function() {
      expect(mapStuff.hexToGrid(0, 0, -0)).toEqual({ x: 0, y: 0 })
      expect(mapStuff.hexToGrid(3, -2, -1)).toEqual({ x: 135, y: -26 })
      expect(mapStuff.hexToGrid(-36, 25, 11)).toEqual({ x: -1620, y: 364 })
    })
  })
})
