class GameMap {
  constructor(selector) {
    this.element = document.getElementById(selector)

    var images = require.context('../images', true)
    var imagePath = (name) => images(name, true)

    this.mapImageUrl = imagePath('./maps/' + this.element.dataset.mapBackground)
  }

  insertHexGrid() {
    this.element.innerHTML = this._html()

    var ctx = document.getElementById('map-component__canvas').getContext('2d')

    var image = new Image()

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
    }
    image.src = this.mapImageUrl
    image.id = "map-image"
  }

  /******
   * private
   */

  _html() {
    return `
      <canvas id="map-component__canvas" height="800" width="800">
      </canvas>
    `
  }
}

export { GameMap }
