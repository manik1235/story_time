export class MapStuff {
  constructor() {
    this.sqrt3 = Math.sqrt(3)
    this.size = 30
  }

  gridToHex(x, y) {
    var q = (x * 2. / 3) / this.size
    var r = (-1. / 3 * x  +  this.sqrt3 / 3 * y) / this.size
    var s = -q - r

    var rounded = this._cubeRound(q, r, s)

    return { q: rounded.rx, r: rounded.ry, s: rounded.rz }
  }

  hexToGrid(q, r, s) {
    var x = (3. / 2 * q) * size
    var y = (this.sqrt3 / 2 * q + this.sqrt3 * r) * size
    return { x, y }
  }

  // Private

  _cubeRound(x, y, z) {
    var rx = Math.round(x)
    var ry = Math.round(y)
    var rz = Math.round(z)

    var x_diff = Math.abs(rx - x)
    var y_diff = Math.abs(ry - y)
    var z_diff = Math.abs(rz - z)

    if (x_diff > y_diff && x_diff > z_diff) {
      rx = -ry-rz
    } else if (y_diff > z_diff) {
      ry = -rx-rz
    } else {
      rz = -rx-ry
    }

    return { rx, ry, rz }
  }
}
