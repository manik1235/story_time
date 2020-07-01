const images = require.context('../../images', true)
const imagePath = (name) => images(name, true)

$(document).ready(function() {
  createHex()
})

function createHex() {
  getHexInfo()
  drawHex(25, 25, 20)
}

function getHexInfo() {
  var hexContainer = $(".js-hex-container")

  $.ajax({
    dataType: "json",
    url: hexContainer.data('id')
  }).done(function(data) {
    var hexImage = imagePath('./hexes/' + data.background)
    var html = `
      <div>
        <p><img src=${hexImage} alt="Tacos, yum" /></p>
      </div>
      `
    $('.js-hex-container').replaceWith(html)
  });
}

function drawHex(xCenter, yCenter, size) {
  var canvas = $("#myCanvas")[0]
  if (!canvas) {
    return
  }
  var ctx = canvas.getContext("2d");

  // hexagon
  var numberOfSides = 6

  ctx.beginPath()
  ctx.moveTo (xCenter +  size * Math.cos(0), yCenter +  size *  Math.sin(0))

  for (var i = 1; i <= numberOfSides; i += 1) {
    ctx.lineTo (xCenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), yCenter + size * Math.sin(i * 2 * Math.PI / numberOfSides))
  }

  ctx.strokeStyle = "#000000"
  ctx.lineWidth = 1
  ctx.stroke()
}
