// var gameOptions = {
//     height: 450,
//     width: 700,
//     nEnemies: 30,
//     padding: 20
// }

// var svg = d3.select("gameboard").append('svg:svg').attr('width', gameOptions.width).attr('height', gameOptions.height);

var enemies = _.range(0, 30)/* array of 30 enemies with random x and y coordinates*/;


var width = 960,
    height = 500,
    nEnemies = 30 

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    // .attr("transform", "translate(32," + (height / 2) + ")");
// var text = svg.selectAll("text")
//     .data(data, function(d) { return d; });

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

  text.attr("x", function(d, i) { return Math.floor(Math.random()*960); })
    .attr("y", function(d, i) { return Math.floor(Math.random()*500);})
}


function update(data) {
// var text = svg.selectAll("text")
    // .data(data, function(d) { return d; });
  // DATA JOIN
  // Join new data with old elements, if any.

  // UPDATE
  // Update old elements as needed.
  // text.attr("class", "update");

  // ENTER
  // Create new elements as needed.
  //svg.selectAll("text")
  //    .data(data, function(d) { return d; });
  // text.enter().selectAll("image").data([0])


  // ENTER + UPDATE
  // Appending to the enter selection expands the update selection to include
  // entering elements; so, operations on the update selection after appending to
  // the enter selection will apply to both entering and updating nodes.

  // EXIT
  // Remove old elements as needed.
  // text.exit().remove();
}

// The initial display.
initial(enemies);
// update(enemies);

// Grab a random sample of letters from the alphabet, in alphabetical order.
setInterval(function() {
  update(d3.selectAll(".enter")
    .transition().duration(2000)
    .attr("x", function(d, i) { return Math.floor(Math.random()*960); })
    .attr("y", function(d, i) { return Math.floor(Math.random()*500);}))
      // .slice(0, Math.floor(Math.random()))
      // .sort());
}, 1500);

