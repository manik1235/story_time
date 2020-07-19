class Line {
  constructor(options) {
    this.m = options.m
    this._b = options.b
    this._xShift = options.xShift
    this._yShift = options.yShift
    this._boundaries = options.boundaries
  }

  set xShift(value) {
    this._xShift = value
  }
  get xShift() {
    return this._xShift
  }

  set yShift(value) {
    this._yShift = value
  }
  get yShift() {
    return this._yShift
  }

  get y(x) {
    var b = this._b
    var m = this.m
    var xShift = this._xShift
    var yShift = this._yShift

    return m * (x - xShift) + b + yShift
  }

  get x(y) {
    var b = this._b
    var xShift = this._xShift
    var yShift = this._yShift

    return (y - b - yShift) / m + xShift
  }

  get coordinates(borders) {
    var x1, y1, x2, y2
    var xa, xb, xc, xd
    var ya, yb, yc, yd
    var xaya, xbyb, xcyc, xdyd
    var x1y1x2y2

    // Border intersections
    x1y1x2y2 = this._borderIntersections(borders)

    return x1y1x2y2
  }

  static _mUndef() {
    // NaN, vertical slope
    //return Math.tan(1 / 0)
    return "NaN"
  }

  get isVertical() {
    if (this.m === this._mUndef) {
      return true
    } else {
      return false
    }
  }

  get isHorizontal() {
    if (this.m === 0) {
      return true
    } else {
      return false
    }
  }

  isParallel(line) {
    return this.m === line.m
  }

  _borderIntersections(borders) {
    var x, y
    var xaya, xbyb, xcyc, xdyd
    var xa, xb, xc, xd
    var ya, yb, yc, yd
    var x1, y1, x2, y2

    // Top border
    if (this.isHorizontal) {
      // Horizontal
      xa = undefined
      ya = undefined
    } else {
      // Not horizontal
      x = border.x(this._boundaries.minY)
      xaya = {x: x, y: this._boundaries.minY}
      xa = x
      ya = this._boundaries.minY
    }

    // Right border, not vertical
    if (this.isVertical) {
      // Vertical
      xb = undefined
      yb = undefined
    } else {
      // Not vertical
      y = border.y(this._boundaries.maxX)
      xbyb = {x: this._boundaries.maxX, y: y}
      xb = this._boundaries.maxX
      yb = y
    }

    // Bottom border, not horizontal
    if (this.isHorizontal) {
      // Horizontal
      xc = undefined
      xd = undefined
    } else {
      x = border.y(this._boundaries.maxY)
      xcyc = {x: x, y: this._boundaries.maxY}
      xc = x
      yc = this._boundaries.maxY
    }

    // Left border, not vertical
    if (this.isVertical) {
      xd = undefined
      yd = undefined
    } else {
      y = border.y(this._boundaries.maxX)
      xdyd = {x: this._boundaries.minX, y: y}
      xd = this._boundaries.minX
      yd = y
    }

    var possibilities = [xaya, xbyb, xcyc, xdyd]
    var nextOne

    for (nextOne in possibilities) {
      if (nextOne.x >= this._boundaries.minX && nextOne.x <= this._boundaries.maxX && nextOne.y >= this._boundaries.minY && nextOne.y <= this._boundaries.maxY) {
        if (!x1) {
          // Store the first point that is fully in bounds
          x1 = nextOne.x
          y1 = nextOne.y
        } else if (!x2) {
          // Store the second point that is fully in bounds
          x2 = nextOne.x
          y2 = nextOne.y
        } else {
          // Both points have been found, stop looking
          break
        }
      } else {
        // All points are outside the boundaries
        return false
      }
    }

    return { x1, y1, x2, y2 }
  }

  // line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
  // Determine the intersection point of two line segments
  // Return FALSE if the lines don't intersect
  intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Check if none of the lines are of length 0
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
      return false
    }

    denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

    // Lines are parallel
    if (denominator === 0) {
      return false
    }

    let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
    let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

    // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
      return false
    }

    // Return a object with the x and y coordinates of the intersection
    let x = x1 + ua * (x2 - x1)
    let y = y1 + ua * (y2 - y1)

    return {x, y}
  }
}

export { Line }
