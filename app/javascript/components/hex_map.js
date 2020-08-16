class HexMap {
  constructor() {
    let map = {}
    let mapElements = document.getElementsByClassName('js-map-data')

    for (let elem of mapElements) {
      let id = elem.getAttribute('id').replace('map_', '')
      map[id] = elem.value
    }

    this.mapProperties = map
    this.background = map.background
  }

  drawMapImage() {
    let ctx = document.getElementById('map-component__map-layer').getContext('2d')

    let images = require.context('../images', true)
    let imagePath = (name) => images(name, true)

    let image = new Image()

    image.onload = function() {
      ctx.drawImage(image, 0, 0)
    }
    image.src = imagePath('./maps/' + this.background)
  }
}

export { HexMap }
