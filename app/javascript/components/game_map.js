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
    if (!this._selector) {
      console.log(`Error: Element with id ${this._selector} is not found`)
      return
    }

    // Draw the map image
    this._map.drawMapImage()

    // Draw the grid axes
    this._axes
  }

  get _map() {
    if (!this.mapCache) {
      this.mapCache = new HexMap()
    }

    return this.mapCache
  }

  get _axes() {
    let axes = []
    let axisLayerElements = document.getElementsByClassName('js-axis-layer')

    if (this._axesCache.length === 0) {
      for (let index = 0; index < axisLayerElements.length; index++) {
        let domId = axisLayerElements[index].dataset.domId
        axes.push(new Axis(
          axisLayerElements[index],
          document.getElementById(domId + '-form'),
          domId
        ))
      }

      this._axesCache = axes
    }

    return this._axesCache
  }
}

export { GameMap }
