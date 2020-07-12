import { Axis } from './axis'

class GameMap {
  constructor(selector) {
    this._selector = selector
  }

  addMap() {
    // Add component html to DOM
    this._element.innerHTML = this._html()

    // Get the canvas context for the map layer and draw the map image
    this._drawMapImage(
      document.getElementById('map-component__map-layer').getContext('2d')
    )

    this._drawHexGrid(
      document.getElementById('map-component__grid-layer').getContext('2d')
    )
  }

  _axes() {
    var q = new Axis(JSON.parse(this._element.dataset.q))
    var r = new Axis(JSON.parse(this._element.dataset.r))
    var s = new Axis(JSON.parse(this._element.dataset.s))

    return { q, r, s }
  }

  _drawHexGrid(ctx) {
    var axes = this._axes()
    axes.q.drawLines(ctx)
    axes.r.drawLines(ctx)
    axes.s.drawLines(ctx)
  }

  _drawMapImage(ctx) {
    var images = require.context('../images', true)
    var imagePath = (name) => images(name, true)

    var image = new Image()

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
    }
    image.src = imagePath('./maps/' + this._element.dataset.mapBackground)
  }

  get _element() {
    return document.getElementById(this._selector)
  }

  _html() {
    return `
      <canvas id="map-component__map-layer" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
      <canvas id="map-component__grid-layer" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>
    `
  }
}

export { GameMap }
