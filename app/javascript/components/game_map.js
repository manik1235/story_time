import { Axis } from './axis'
import { HexMap } from './hex_map'

class GameMap {
  constructor() {
    this.axesCache = []
    this.mapCache
  }

  initialize() {
    // Draw the map image
    this._map.initialize()

    // Draw the grid axes
    for (let index = 0; index < this._axes.length; index++) {
      this._axes[index].initialize()
    }
  }

  // Private

  get _axes() {
    let axes = []
    let axisLayerElements = document.getElementsByClassName('js-axis-layer')

    if (this.axesCache.length === 0) {
      for (let index = 0; index < axisLayerElements.length; index++) {
        let domId = axisLayerElements[index].dataset.domId
        axes.push(new Axis(
          axisLayerElements[index],
          document.getElementById(domId + '-form')
        ))
      }

      this.axesCache = axes
    }

    return this.axesCache
  }

  get _map() {
    if (!this.mapCache) {
      this.mapCache = new HexMap()
    }

    return this.mapCache
  }
}

export { GameMap }
