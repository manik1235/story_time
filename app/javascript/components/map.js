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

    // Get the canvas context and draw the map image
    var ctx = document.getElementById('map-component__canvas').getContext('2d')
    this._drawMapImage(ctx)
  }

  /******
   * private
   */

  _html() {
    return `
      <canvas id="map-component__canvas" height="800" width="800">
      </canvas>
    `
  }

  _drawMapImage(ctx) {
    var image = new Image()
    var _drawHexGrid = this._drawHexGrid

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
      // After the image is loaded and drawn, draw the hex grid lines
      _drawHexGrid(ctx)
    }
    image.src = this.mapImageUrl
    image.id = "map-image"
  }

  _drawHexGrid(ctx) {
    // Draw the x-axis line
    ctx.moveTo(0, 0);
    ctx.lineTo(800, 800);
    ctx.stroke();

    // Draw the y-axis line


    // Draw the z-axis line
  }
}

export { GameMap }
