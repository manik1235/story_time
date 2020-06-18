$(document).ready(function() {
  $(".js-map").on("mousemove", function(event) {
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    var mapX = x + $('.js-map-view').scrollLeft()
    var mapY = y + $('.js-map-view').scrollTop()
    var output = {
      'x': x
      , 'mapX': mapX
      , 'y': y
      , 'mapY': mapY
    }
    console.log(output);
  });
});
