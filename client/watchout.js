var enemies = _.range(0, 30)/* array of 30 enemies with random x and y coordinates*/;
var player = [1];

var width = 960,
    height = 500,
    nEnemies = 30 

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

var drag = d3.behavior.drag()  
  .on('drag', function() { svg.selectAll('.ship').attr('x', d3.event.x)
                                                 .attr('y', d3.event.y)});
                                                 // .call(collide); 

var collide = function() {
  for(var i=0; i<enemies.length; i++){
    if(svg.selectAll('.ship').attr('x') - svg.selectAll('.enter').data('d').attr('x') < 1 && svg.selectAll('.ship').attr('y') - svg.selectAll('.enter').data('d').attr('y') < 1 ){
      console.log("asteroid", svg.selectAll('.enter').data('d').attr('x'));
    };
  }
};


function initialPlayer (data){
  var text = svg.selectAll("text")
    .data(data, function(d) { return d; });

    text.attr("class", "initial");

  text.enter().append("svg:image")
      .attr("class", "ship")
      .attr("xlink:href", "spaceship.png")
      .attr("height", "50px")
      .attr("width", "50px")
      .call(drag)

      .text(function(d) { return d; });

  text.attr("x", function() { return Math.floor(Math.random()*960); })
    .attr("y", function() { return Math.floor(Math.random()*500);})

}

function initial(data) {
  var text = svg.selectAll("text")
    .data(data, function(d) { return d; });

    text.attr("class", "initial");

    text.enter().append("svg:image")
      .attr("class", "enter")
      .attr("xlink:href", "asteroid.png")
      .attr("height", "50px")
      .attr("width", "50px")
      .text(function(d) { return d; });

  text.attr("x", function() { return Math.floor(Math.random()*960); })
    .attr("y", function() { return Math.floor(Math.random()*500);})
}


// The initial display.
initial(enemies);
initialPlayer(player);
// collide();

setInterval(function() {
  d3.selectAll(".enter")
    .transition().duration(2000)
    .attr("x", function(d, i) { return Math.floor(Math.random()*960); })
    .attr("y", function(d, i) { return Math.floor(Math.random()*500);})
}, 1500);
setInterval(function(){
 svg.selectAll('.ship')
  .call(collide); 
}, 3000);
