import { Axis } from './axis'

class GameMap {
  constructor(selector) {
    this._selector = selector
    this._axesCache = []
    this._mapCache
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

  get _dataset() {
    return this._element.dataset
  }

  _drawHexGrid(ctx) {
    this._axes.forEach(axis => axis.drawLines(ctx))
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
    let map = {}

    if (this._mapCache) {
      map = this._mapCache
    } else {
      let mapElements = document.getElementsByClassName('js-map-data')

      for (let elem of mapElements) {
        let id = elem.getAttribute('id').replace('map_', '')
        map[id] = elem.value
      }

      this._mapCache = map
    }

    return map
  }

  get _axes() {
    let axes = []

    if (this._axesCache.length === 0) {
      // Get the axis data based on the current values of all the input boxes
      let axisElements = document.getElementsByClassName('js-axis-data')
      let axisObjects = {}

      for (let elem of axisElements) {
        let property = elem.getAttribute('id').replace('axis_', '')
        let axisId = elem.dataset.id

        if (!axisObjects[axisId]) {
          axisObjects[axisId] = {}
        }
        axisObjects[axisId][property] = elem.value
      }

      for (let axis in axisObjects) {
        axes.push(new Axis(axisObjects[axis]))
      }

      this._axesCache = axes
    } else {
      axes = this._axesCache
    }

    return axes
  }
}

export { GameMap }
