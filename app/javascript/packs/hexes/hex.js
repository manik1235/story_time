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
    console.log(data)
  });
}

function drawHex(xCenter, yCenter, size) {
  var canvas = $("#myCanvas")[0]
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
