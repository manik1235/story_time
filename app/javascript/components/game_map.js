import { Axis } from './axis'

class GameMap {
  constructor(selector) {
    this.element = document.getElementById(selector)

    var images = require.context('../images', true)
    var imagePath = (name) => images(name, true)

    this.mapImageUrl = imagePath('./maps/' + this.element.dataset.mapBackground)
  }

  addMap() {
    // Add component html to DOM
    this.element.innerHTML = this._html()

    // Get the canvas context for the map layer and draw the map image
    this._drawMapImage(
      document.getElementById('map-component__map-layer').getContext('2d')
    )

    this._drawHexGrid(
      document.getElementById('map-component__grid-layer').getContext('2d')
    )
  }

  /******
   * private
   */

  _html() {
    return `
      <canvas id="map-component__map-layer" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
      <canvas id="map-component__grid-layer" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
    `
  }

  _drawMapImage(ctx) {
    var image = new Image()

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
    }
    image.src = this.mapImageUrl
  }

  _radians(degrees) {
    var pi = Math.PI
    return degrees * (pi / 180)
  }

  _drawHexGrid(ctx) {
    /***********************
     * Draw the q-axis lines
     ***********************/
    var q = this._axesInfo().q

    this._drawHexAxisLines(ctx, q)

    /***********************
     * Draw the r-axis lines
     ***********************/
    var r = this._axesInfo().r

    this._drawHexAxisLines(ctx, r)

    /***********************
     * Draw the s-axis lines
     ***********************/
    /*
    var degrees = -60
    var radians = this._radians(degrees)
    var m = Math.tan(radians)
    var xOffset = 106
    var yOffset = -22
    var hexDiameter = 133
    var mapWidth = 800
    var mapHeight = 800
    var sDashFilledLength = 44
    var sDashBlankLength = 89
    var sDash = [sDashFilledLength, sDashBlankLength]
    var xBuffer = -m * mapHeight + xOffset
    var x0 = 0 + xOffset
    var y0 = 0 + yOffset
    var shifted

    // Draw first set of lines with first set of offsets
    this._drawDashedLines(ctx, sDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#ff0000', xBuffer)

    // Shift first set of offsets to second set of offsets
    shifted = this._shiftx0y0(x0, y0, radians, sDashFilledLength)
    x0 = shifted.x0
    y0 = shifted.y0

    // Draw second set of lines with second set of offsets
    this._drawDashedLines(ctx, sDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#00ff00', xBuffer)

    // Shift second set of offsets to third set of offsets
    shifted = this._shiftx0y0(x0, y0, radians, sDashFilledLength)
    x0 = shifted.x0
    y0 = shifted.y0

    // Draw third set of lines with third set of offsets
    this._drawDashedLines(ctx, sDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#0000ff', xBuffer)
    */
  }

  _axesInfo() {
    /***********************
     * Draw the q-axis lines
     ***********************/
    var q = new Axis(
      'q',
      60,
      13,
      133,
      800,
      800,
      44,
      89,
      '#ff0000',
      0,
      undefined,
      94,
      true,
      2
    )

    var r = new Axis(
      'q',
      0,
      39,
      76.7,
      800,
      800,
      44,
      89,
      '#00ff00',
      0,
      0,
      94,
      false,
      1
    )

    return { q, r }
  }

  _drawHexAxisLines(ctx, axis) {
    // Draw all sets of lines for one axis
    axis.drawHexDashedLines(ctx)
  }
}

export { GameMap }
