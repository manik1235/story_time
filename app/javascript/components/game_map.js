import { Axis } from './axis'
import { HexMap } from './hex_map'

class GameMap {
  constructor(selector) {
    this._selector = selector
    this._axesCache = []
    this.mapCache
  }

  addMap() {
    // Return early if the element cannot be found
    if (!this._element) {
      console.log(`Error: Element with id='${this._selector}' required to be present in the DOM for the GameMap to work.`)
      return
    }

    // Draw the map image
    this._map.drawMapImage()

    // Draw the grid axes
    this._axes
  }

  _axisContext(index) {
    return document.getElementById(`${this._axisSelector(index)}`).getContext('2d')
  }

  get _dataset() {
    return this._element.dataset
  }

  get _element() {
    return document.getElementById(this._selector)
  }

  get _map() {
    if (!this.mapCache) {
      this.mapCache = new HexMap()
    }

    return this.mapCache
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
