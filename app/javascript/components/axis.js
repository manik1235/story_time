import { Line } from './line.js'

class Axis {
  constructor(dataset) {
    this.name = dataset.name
    this._degrees = dataset.degrees
    this._xOffset = dataset.x_offset
    this._y0 = dataset.y_offset
    this._hexDiameter = dataset.hex_diameter
    this._mapWidth = dataset.map_width
    this._mapHeight = dataset.map_height
    this._dashFilledLength = dataset.dash_filled_length
    this._dashBlankLength = dataset.dash_blank_length
    this._color = dataset.color
  }

  get _dash() {
    return [this._dashFilledLength, this._dashBlankLength]
  }

  get _undef() {
    // Undefined slope (vertical)
    //return Math.tan(1/0)
    return Line._mUndef()
  }

  get _mapBoundaries() {
    return {
      minX: 0,
      minY: 0,
      maxX: this._mapWidth,
      maxY: this._mapHeight
    }
  }

  get leftBorder() {
    if (!this._leftBorder) {
      let lineOptions = {
        m: this._undef,
        b: 0,
        xShift: 0,
        yShift: 0,
        boundaries: this._mapBoundaries
      }
      this._leftBorder = this._line(lineOptions)
    }

    return this._leftBorder
  }

  get rightBorder() {
    if (!this._rightBorder) {
      let lineOptions = {
        m: this._undef,
        b: 0,
        xShift: this._mapWidth,
        yShift: 0,
        boundaries: this._mapBoundaries
      }
      this._leftBorder = this._line(lineOptions)
    }

    return this._rightBorder
  }

  get topBorder() {
    if (!this._topBorder) {
      let lineOptions = {
        m: 0,
        b: 0,
        xShift: 0,
        yShift: 0,
        boundaries: this._mapBoundaries
      }
      this._topBorder = this._line(lineOptions)
    }

    return this._rightBorder
  }

  get bottomBorder() {
    if (!this._topBorder) {
      let lineOptions = {
        m: 0,
        b: 0,
        xShift: 0,
        yShift: this._mapHeight,
        boundaries: this._mapBoundaries
      }
      this._bottomBorder = this._line(lineOptions)
    }

    return this._bottomBorder
  }

  get borders() {
    return {
      top: this._topBorder,
      bottom: this._bottomBorder,
      left: this._leftBorder,
      right: this._rightBorder
    }
  }

  drawLines(ctx) {
    // Get the mainLine
    var lineOptions = {
      m: this._m,
      b: this._b,
      xShift: 0,
      yShift: 0,
      boundaries: {
        minX: 0,
        minY: 0,
        maxX: this._mapWidth,
        maxY: this._mapHeight
      }
    }
    var mainLine = this._line(lineOptions)

    // Get the start and end coordinates based on the map boundaries
    var x1, y1, x2, y2
    var coordinates = { x1, y1, x2, y2 }

    coordinates = mainLine.coordinates(this.borders)





    // Fill the drawable area with lines, shifted by the hexDiameter
    // Draw from the mainLine up/left and then again down/right


  }

  _line(lineOptions) {
    return new Line(lineOptions)
  }

  get _m() {
    var m = Math.tan(this._radians)

    if (isNaN(m)) {
      return "NaN"
    } else {
      return m
    }
  }

  get _radians() {
    return this._degrees * (Math.PI / 180)
  }
}

export { Axis }
