class Axis {
  constructor(layerElement, formElement) {
    this.formElement = formElement
    this.axisContext = layerElement.getContext('2d')
  }

  initialize() {
    this._updateAxisData()
    this._drawLines()
    this._addUpdateListener()
  }

  // Private

  _addUpdateListener() {
    let inputs = this.formElement.getElementsByClassName('js-input')
    let that = this

    for (let index = 0; index < inputs.length; index++) {
      let element = inputs[index]
      element.addEventListener('change', function(event) {
        // TODO: Use the event to selectively update the proper property
        that._updateAxisData()
        that._drawLines()
      })
    }
  }

  get _dash() {
    return [this.dashFilledLength, this.dashBlankLength]
  }

  _drawLines() {
    let ctx = this.axisContext
    var shifted
    var x0 = this._x0
    var y0 = this.y0

    // Clear the old lines from the canvas
    ctx.clearRect(0, 0, this.mapWidth, this.mapHeight)

    // Draw first set of lines
    this._drawDashedLines(ctx, x0, y0)

    for (var i = this._shifts; i > 0; i--) {
      // Shift set of offsets to next set of offsets
      shifted = this._shift(x0, y0)
      x0 = shifted.x0
      y0 = shifted.y0

      // Draw shifted lines
      this._drawDashedLines(ctx, x0, y0)
    }
  }

  _drawDashedLines(ctx, x0, y0) {
    var line

    ctx.strokeStyle = this.color
    ctx.setLineDash(this._dash)
    ctx.beginPath()
    for (var xi = x0, yi = y0; xi <= this.mapWidth + this._xBuffer && yi <= this.mapHeight; xi += this._xStep, yi += this._yStep) {
      line = this._getLineCoordinates(xi, yi)
      ctx.moveTo(line.x1, line.y1)
      ctx.lineTo(line.x2, line.y2)
      ctx.stroke()
    }
  }

  _getLineCoordinates(x1, y1) {
    var x2
    var y2
    var b = y1 - this._m * x1

    var possible_y = this._m * this.mapWidth + b
    var possible_x = (this.mapHeight - b) / this._m

    if (this._m >= 0) {
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

  get _m() {
    return Math.tan(this._radians)
  }

  get _radians() {
    return this.degrees * (Math.PI / 180)
  }

  _shift(x0, y0) {
    if (this._radians === 0 || this._radians === Math.PI) {
      // Shift horizontal lines
      x0 = x0 + this.dashFilledLength * 1.5
      y0 = y0 + this.hexDiameter / 2
    } else if (this._radians === Math.PI / 2 || this._radians === 3 * Math.PI / 2) {
      // Shift vertical lines
      console.log("Not implemented")
    } else {
      // Shift angled lines
      x0 = x0 + Math.cos(this._radians) * this.dashFilledLength * 3
      y0 = y0 + Math.sin(this._radians) * this.dashFilledLength
    }

    return { x0, y0 }
  }

  get _shifts() {
    if (this._radians === 0 || this._radians === Math.PI) {
      // Horizontal
      return 1
    } else if (this._radians === Math.PI / 2 || this._radians === 3 * Math.PI / 2) {
      // Vertical
      console.log("Not implemented")
    } else {
      // Angled
      return 2
    }
  }

  _updateAxisData() {
    // Get the axis data based on the current values of all the input boxes
    let axisObject = {}

    let formInputs = this.formElement.getElementsByClassName('js-input')

    for (let input of formInputs) {
      let property = input.getAttribute('name').replace('axis[', '').replace(']', '')

      axisObject[property] = input.value
    }

    this.id = axisObject.id
    this.name = axisObject.name
    this.degrees = parseFloat(axisObject.degrees)
    this.xOffset = parseFloat(axisObject.x_offset)
    this.y0 = parseFloat(axisObject.y_offset)
    this.hexDiameter = parseFloat(axisObject.hex_diameter)
    this.mapWidth = parseFloat(axisObject.map_width)
    this.mapHeight = parseFloat(axisObject.map_height)
    this.dashFilledLength = parseFloat(axisObject.dash_filled_length)
    this.dashBlankLength = parseFloat(axisObject.dash_blank_length)
    this.color = axisObject.color
  }

  get _x0() {
    if (this._m > 0) {
      // Calculate the extra distance needed to start to the left of the canvas
      //   if the slope is positive
      return -this.mapHeight / this._m + this.xOffset
    } else {
      // Otherwise only the xOffset is needed
      return this.xOffset
    }
  }

  get _xBuffer() {
    if (this._m < 0) {
      // Calculate the extra buffer needed when drawing lines that will pass the
      //   mapWidth boundary
      return -this._m * this.mapHeight + this.xOffset
    } else {
      // No extra buffer needed because the lines will always start on or to the
      //   left of the canvas.
      return 0
    }
  }

  get _xStep() {
    if (this._radians === 0 || this._radians === Math.PI) {
      // Horizontal
      return 0
    } else if (this._radians === Math.PI / 2 || this._radians === 3 * Math.PI / 2) {
      // Vertical
      console.log("Not implemented")
    } else {
      // Angled
      return this.hexDiameter
    }
  }

  get _yStep() {
    if (this._radians === 0 || this._radians === Math.PI) {
      // Horizontal
      return this.hexDiameter
    } else if (this._radians === Math.PI / 2 || this._radians === 3 * Math.PI / 2) {
      // Vertical
      console.log("Not implemented")
    } else {
      // Angled
      return 0
    }
  }
}

export { Axis }
