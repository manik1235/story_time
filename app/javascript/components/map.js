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
    /*
    var degrees = 60
    var radians = this._radians(degrees)
    var m = Math.tan(radians)
    var xOffset = 13
    var hexDiameter = 133
    var mapWidth = 800
    var mapHeight = 800
    var qDashFilledLength = 44
    var qDashBlankLength = 89
    var qDash = [qDashFilledLength, qDashBlankLength]
    var xBuffer = 0
    var x0
    if (degrees === 0) {
      // Horizontal lines, no angle based offset needed
      x0 = 0 + xOffset
    } else if (degrees === 90) {
      // Vertical lines, no angle based offset needed
      x0 = 0 + xOffset
    } else {
      x0 = -mapHeight / m + xOffset
    }
    var y0 = 94

    // Draw first set of lines with first set of offsets
    this._drawDashedLines(ctx, qDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#ff0000', xBuffer)

    // Shift first set of offsets to second set of offsets
    x0 = x0 + Math.cos(radians) * qDashFilledLength * 3
    y0 = y0 + Math.sin(radians) * qDashFilledLength

    // Draw second set of lines with second set of offsets
    this._drawDashedLines(ctx, qDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#00ff00', xBuffer)

    // Shift second set of offsets to third set of offsets
    x0 = x0 + Math.cos(radians) * qDashFilledLength * 3
    y0 = y0 + Math.sin(radians) * qDashFilledLength

    // Draw third set of lines with third set of offsets
    this._drawDashedLines(ctx, qDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#0000ff', xBuffer)
    */

    /***********************
     * Draw the r-axis lines
     ***********************/
    /*
    var degrees = 0
    var radians = this._radians(degrees)
    var m = Math.tan(radians)
    var xOffset = 39
    var hexDiameter = 76.7
    var mapWidth = 800
    var mapHeight = 800
    var rDashFilledLength = 44
    var rDashBlankLength = 89
    var rDash = [rDashFilledLength, rDashBlankLength]
    var xBuffer = 0
    var x0
    if (degrees === 0) {
      // Horizontal lines, no angle based offset needed
      x0 = 0 + xOffset
    } else if (degrees === 90) {
      // Vertical lines, no angle based offset needed
      x0 = 0 + xOffset
    } else {
      x0 = -mapHeight / m + xOffset
    }
    var y0 = 94

    // Draw first set of lines with first set of offsets
    this._drawDashedLines(ctx, rDash, x0, y0, m, mapWidth, mapHeight, [0, hexDiameter], '#ff0000', xBuffer)

    // Shift first set of offsets to second set of offsets
    x0 = x0 + rDashFilledLength * 1.5
    y0 = y0 + hexDiameter / 2

    // Draw second set of lines with second set of offsets
    this._drawDashedLines(ctx, rDash, x0, y0, m, mapWidth, mapHeight, [0, hexDiameter], '#00ff00', xBuffer)
    */

    /***********************
     * Draw the s-axis lines
     ***********************/
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

    // Draw first set of lines with first set of offsets
    this._drawDashedLines(ctx, sDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#ff0000', xBuffer)

    // Shift first set of offsets to second set of offsets
    x0 = x0 + Math.cos(radians) * sDashFilledLength * 3
    y0 = y0 + Math.sin(radians) * sDashFilledLength

    // Draw second set of lines with second set of offsets
    this._drawDashedLines(ctx, sDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#00ff00', xBuffer)

    /*
    // Shift second set of offsets to third set of offsets
    x0 = x0 + Math.cos(radians) * qDashFilledLength * 3
    y0 = y0 + Math.sin(radians) * qDashFilledLength

    // Draw third set of lines with third set of offsets
    this._drawDashedLines(ctx, qDash, x0, y0, m, mapWidth, mapHeight, [hexDiameter, 0], '#0000ff', xBuffer)
    */
  }

  _drawDashedLines(ctx, dash, x0, y0, m, mapWidth, mapHeight, hexDiameter, color, xBuffer) {
    var line
    var xStep = hexDiameter[0]
    var yStep = hexDiameter[1]

    ctx.strokeStyle = color
    ctx.setLineDash(dash)
    ctx.beginPath()
    for (var xi = x0, yi = y0; xi <= mapWidth + xBuffer && yi <= mapHeight; xi += xStep, yi += yStep) {
      line = this._getLinex1x2y1y2(xi, yi, m, mapWidth, mapHeight)
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    }
  }

  _getLinex1x2y1y2(x1, y1, m, mapWidth, mapHeight) {
    var x2
    var y2
    var b = y1 - m * x1

    var possible_y
    var possible_x

    if (m >= 0) {
      possible_y = m * mapWidth + b
      possible_x = (mapHeight - b) / m
      if (possible_y > mapHeight) {
        x2 = possible_x
        y2 = mapHeight
      } else {
        x2 = mapWidth
        y2 = possible_y
      }
    } else {
      possible_y = m * mapWidth + b
      possible_x = (mapHeight - b) / m
      if (possible_x < 0) {
        x2 = 0
        y2 = b
      } else {
        x2 = possible_x
        y2 = mapHeight
      }
    }

    return { x1, x2, y1, y2 }
  }
}

export { GameMap }
