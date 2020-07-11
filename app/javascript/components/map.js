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
    // Draw the x-axis lines
    var m = Math.tan(this._radians(60))
    var xOffset = 13
    var hexDiameter = 133
    var mapWidth = 800
    var mapHeight = 800
    var xDash = [44, 89]

    var x0 = -mapHeight / m + xOffset
    var y0 = 94

    this._drawDashedLines(ctx, xDash, x0, y0, m, mapWidth, mapHeight, hexDiameter)

    // Draw the y-axis line


    // Draw the z-axis line
  }

  _drawDashedLines(ctx, dash, x0, y0, m, mapWidth, mapHeight, hexDiameter) {
    var line

    ctx.strokeStyle = '#ff0000'
    ctx.setLineDash(dash)
    for (var xi = x0, lineCount = 0; xi < mapWidth; xi += hexDiameter) {
      line = this._getLinex1x2y1y2(xi, y0, m, mapWidth, mapHeight)
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    }
  }

  _getLinex1x2y1y2(x1, y1, m, mapWidth, mapHeight) {
    var x2
    var y2
    var b = y1 - m * x1

    var possible_y = m * mapWidth + b
    var possible_x = (mapHeight - b) / m

    if (possible_y > mapHeight) {
      x2 = possible_x
      y2 = mapHeight
    } else {
      x2 = mapWidth
      y2 = possible_y
    }

    return { x1, x2, y1, y2 }
  }
}

export { GameMap }
