// var gameOptions = {
//     height: 450,
//     width: 700,
//     nEnemies: 30,
//     padding: 20
// }

// var svg = d3.select("gameboard").append('svg:svg').attr('width', gameOptions.width).attr('height', gameOptions.height);

var enemies = _.range(0, 30)/* array of 30 enemies with random x and y coordinates*/;
var player = [1];

var width = 960,
    height = 500,
    nEnemies = 30 

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

var force = d3.layout.force()
    .size([width, height])
    .charge(-400)
    .linkDistance(40)
    // .on("tick", tick);
    
var drag = force.drag()
    .on("dragstart", dragstart);
    // .attr("transform", "translate(32," + (height / 2) + ")");
// var text = svg.selectAll("text")
//     .data(data, function(d) { return d; });

function initialPlayer (data){
  var text = svg.selectAll("text")
    .data(data, function(d) { return d; });

    text.attr("class", "initial");

  text.enter().append("svg:image")
      .attr("class", "ship")
      // .append("svg:image")
      .attr("xlink:href", "spaceship.png")
      //.attr("dy", ".35em")
      .attr("height", "50px")
      .attr("width", "50px")
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
      // .append("svg:image")
      .attr("xlink:href", "asteroid.png")
      //.attr("dy", ".35em")
      .attr("height", "50px")
      .attr("width", "50px")
      .text(function(d) { return d; });

  text.attr("x", function() { return Math.floor(Math.random()*960); })
    .attr("y", function() { return Math.floor(Math.random()*500);})
}


// The initial display.
initial(enemies);
initialPlayer(player);
// update(enemies);
function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}
// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function() {
  d3.selectAll(".enter")
    .transition().duration(2000)
    .attr("x", function(d, i) { return Math.floor(Math.random()*960); })
    .attr("y", function(d, i) { return Math.floor(Math.random()*500);})
      // .slice(0, Math.floor(Math.random()))
      // .sort());
}, 1500);

