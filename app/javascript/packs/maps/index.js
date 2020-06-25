const MapStuff = require("../../utilities/map_stuff").MapStuff

function watchMap() {
  $(document).ready(function() {
    $(".js-map-view").on("mousemove", function(event) {
      var x = event.pageX
      var y = event.pageY
      var xOffset = $('.js-map-view').scrollLeft()
      var yOffset = $('.js-map-view').scrollTop()
      var output
      var mapStuff = new MapStuff

      output = mapStuff.gridToHex(x + xOffset, y + yOffset)
      console.log(output)
    })
  })
}

watchMap()
