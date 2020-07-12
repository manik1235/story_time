import { Axis } from './axis'

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
    var axes = this._axes()
    axes.q.drawLines(ctx)
    axes.r.drawLines(ctx)
    axes.s.drawLines(ctx)
  }

  _axes() {
    var q = new Axis(JSON.parse(this.element.dataset.q))
    var r = new Axis(JSON.parse(this.element.dataset.r))
    var s = new Axis(JSON.parse(this.element.dataset.s))

    return { q, r, s }
  }
}

export { GameMap }
