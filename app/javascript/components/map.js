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

  _drawHexGrid(ctx) {
    // Draw the x-axis line
    var m = 1,
      x = 1,
      b = 1
    var line = this._getLinex1x2y1y2(m, x, b)

    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();

    // Draw the y-axis line


    // Draw the z-axis line
  }

  _getLinex1x2y1y2(m, x, b) {
    var x1 = 0,
      x2 = 800,
      y1 = 0,
      y2 = 800

    return { x1, x2, y1, y2 }
  }
}

export { GameMap }
