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
    var s = this._axesInfo().s

    this._drawHexAxisLines(ctx, s)
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
      false,
      undefined,
      94,
      true,
      2,
      0
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
      false,
      0,
      94,
      false,
      1,
      0
    )

    var s = new Axis(
      's',
      -60,
      106,
      133,
      800,
      800,
      44,
      89,
      '#0000ff',
      true,
      0,
      0,
      false,
      2,
      -22
    )

    return { q, r, s }
  }

  _drawHexAxisLines(ctx, axis) {
    // Draw all sets of lines for one axis
    axis.drawHexDashedLines(ctx)
  }
}

export { GameMap }
