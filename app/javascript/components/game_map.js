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

    // Draw the grid axes
    this._axes
  }

  _axisContext(index) {
    return document.getElementById(`${this._axisSelector(index)}`).getContext('2d')
  }

  _addHtmlToDom() {
    this._element.innerHTML = this._html
  }

  get _dataset() {
    return this._element.dataset
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

  get _html() {
    let html = this._mapHtml

    for (let index = 0; index < parseInt(this._map.number_of_axes); index++) {
      html += this._axisHtml(index)
    }

    return html
  }

  get _mapHtml() {
    return `
      <canvas id="map-component__map-layer" class="js-canvas" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>`
  }

  _axisHtml(index) {
      return `
      <canvas id="${this._axisSelector(index)}" class="js-canvas" height="800" width="800"
        style="position: absolute; left: 0; top: 0; z-index: 1;"></canvas>`
  }

  _axisSelector(index) {
    return `map-component__axis-layer-${index}`
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
      let axisElements = document.getElementsByClassName('js-axis-form')

      for (let index = 0; index < axisElements.length; index++) {
        let elem = axisElements[index]
        axes.push(new Axis(elem.dataset.selector, this._axisContext(index)))
      }

      this._axesCache = axes
    } else {
      axes = this._axesCache
    }

    return axes
  }
}

export { GameMap }
