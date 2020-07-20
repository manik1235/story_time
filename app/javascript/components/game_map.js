import { Axis } from './axis'

class GameMap {
  constructor(selector) {
    this._selector = selector
  }

  addMap() {
    // Return early if the element cannot be found
    if (!this._element) {
      console.log(`Error: Element with id='${this._selector}' required to be present in the DOM for the GameMap to work.`)
      return
    }

    // Add component html to DOM
    this._addHtmlToDom()

    // Get the canvas context for the map layer and draw the map image
    this._drawMapImage(
      document.getElementById('map-component__map-layer').getContext('2d')
    )

    // Get the canvas context for the map layer and draw the grid
    this._drawHexGrid(
      document.getElementById('map-component__grid-layer').getContext('2d')
    )
  }

  _addHtmlToDom() {
    this._element.innerHTML = this._html()
  }

  _axes() {
    var axes = []
    this._map.axes.forEach(axis => axes.push(new Axis(JSON.parse(axis))))

    return axes
  }

  get _dataset() {
    return this._element.dataset
  }

  _drawHexGrid(ctx) {
    this._axes().forEach(axis => axis.drawLines(ctx))
  }

  _drawMapImage(ctx) {
    var images = require.context('../images', true)
    var imagePath = (name) => images(name, true)

    var image = new Image()

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
    }
    image.src = imagePath('./maps/' + this._map.background)
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

  get _map() {
    return JSON.parse(this._dataset.map)
  }
}

export { GameMap }
