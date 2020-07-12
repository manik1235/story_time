class Axis {
  constructor(dataset) {
    this.name = dataset.name
    this.degrees = dataset.degrees
    this._xOffset = dataset.xOffset
    this._y0 = dataset.yOffset
    this.hexDiameter = dataset.hexDiameter
    this.mapWidth = dataset.mapWidth
    this.mapHeight = dataset.mapHeight
    this.dashFilledLength = dataset.dashFilledLength
    this.dashBlankLength = dataset.dashBlankLength
    this.color = dataset.color
  }

  get dash() {
    return [this.dashFilledLength, this.dashBlankLength]
  }

  drawLines(ctx) {
    var shifted
    var x0 = this._x0
    var y0 = this._y0

    // Draw first set of lines
    this._drawDashedLines(ctx, x0, y0)

    for (var i = this.shifts; i > 0; i--) {
      // Shift set of offsets to next set of offsets
      shifted = this.shift(x0, y0)
      x0 = shifted.x0
      y0 = shifted.y0

      // Draw shifted lines
      this._drawDashedLines(ctx, x0, y0)
    }
  }

  get m() {
    return Math.tan(this.radians)
  }

  shift(x0, y0) {
    if (this.radians === 0 || this.radians === Math.PI) {
      // Shift horizontal lines
      x0 = x0 + this.dashFilledLength * 1.5
      y0 = y0 + this.hexDiameter / 2
    } else if (this.radians === Math.PI / 2 || this.radians === 3 * Math.PI / 2) {
      // Shift vertical lines
      console.log("Not implemented")
    } else {
      // Shift angled lines
      x0 = x0 + Math.cos(this.radians) * this.dashFilledLength * 3
      y0 = y0 + Math.sin(this.radians) * this.dashFilledLength
    }

    return { x0, y0 }
  }

  get shifts() {
    if (this.radians === 0 || this.radians === Math.PI) {
      // Horizontal
      return 1
    } else if (this.radians === Math.PI / 2 || this.radians === 3 * Math.PI / 2) {
      // vertical lines
      console.log("Not implemented")
    } else {
      // Angled
      return 2
    }
  }

  get radians() {
    return this._radians(this.degrees)
  }

  get xStep() {
    if (this.radians === 0 || this.radians === Math.PI) {
      // Horizontal lines
      return 0
    } else if (this.radians === Math.PI / 2 || this.radians === 3 * Math.PI / 2) {
      // vertical lines
      console.log("Not implemented")
    } else {
      // Angled lines
      return this.hexDiameter
    }
  }

  get yStep() {
    if (this.radians === 0 || this.radians === Math.PI) {
      // Horizontal Lines
      return this.hexDiameter
    } else if (this.radians === Math.PI / 2 || this.radians === 3 * Math.PI / 2) {
      // vertical lines
      console.log("Not implemented")
    } else {
      // Angled Lines
      return 0
    }
  }

  _drawDashedLines(ctx, x0, y0) {
    var line
    var xStep = this.xStep
    var yStep = this.yStep

    ctx.strokeStyle = this.color
    ctx.setLineDash(this.dash)
    ctx.beginPath()
    for (var xi = x0, yi = y0; xi <= this.mapWidth + this._xBuffer && yi <= this.mapHeight; xi += this.xStep, yi += this.yStep) {
      line = this._getLineCoordinates(xi, yi)
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.stroke();
    }
  }

  _getLineCoordinates(x1, y1) {
    var x2
    var y2
    var b = y1 - this.m * x1

    var possible_y = this.m * this.mapWidth + b
    var possible_x = (this.mapHeight - b) / this.m

    if (this.m >= 0) {
      if (possible_y > this.mapHeight) {
        x2 = possible_x
        y2 = this.mapHeight
      } else {
        x2 = this.mapWidth
        y2 = possible_y
      }
    } else {
      if (possible_x < 0) {
        x2 = 0
        y2 = b
      } else {
        x2 = possible_x
        y2 = this.mapHeight
      }
    }

    return { x1, x2, y1, y2 }
  }

  _radians(degrees) {
    return degrees * (Math.PI / 180)
  }

  get _x0() {
    if (this.m > 0) {
      // Calculate the extra distance needed to start to the left of the canvas
      //   if the slope is positive
      return -this.mapHeight / this.m + this._xOffset
    } else {
      // Otherwise only the xOffset is needed
      return this._xOffset
    }
  }

  get _xBuffer() {
    if (this.m < 0) {
      // Calculate the extra buffer needed when drawing lines that will pass the
      //   mapWidth boundary
      return -this.m * this.mapHeight + this._xOffset
    } else {
      // No extra buffer needed because the lines will always start on or to the
      //   left of the canvas.
      return 0
    }
  }
}

export { Axis }
