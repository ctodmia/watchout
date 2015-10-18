var enemies = _.range(0, 30)/* array of 30 enemies with random x and y coordinates*/;
var player = [1];

var width = 960,
    height = 500,
    nEnemies = 30, 
    collisionCount = 0,
    currentScore = 0

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")

var drag = d3.behavior.drag()  
  .on('drag', function() { svg.selectAll('.ship').attr('x', d3.event.x)
                                                 .attr('y', d3.event.y)});
                                                 // .call(collide); 
var prevCollision = false;
var collide = function() {
 var collisionDetected = false;
  svg.selectAll('.enter').each(function(d){
    var enemy = d3.select(this);
    var shipX = svg.selectAll('.ship').attr('x'); 
    var astrX = enemy.attr('x');
    var shipY = svg.selectAll('.ship').attr('y');
    var astrY = enemy.attr('y');
    if (collisionDetected === false) {
      if((Math.abs(shipX - astrX) < 40) &&  (Math.abs(shipY - astrY) < 40) ){
        collisionDetected = true;
        collisionCount = collisionCount +1;
        console.log("this", this,"ship", shipX);
      }
    };
    if(collisionDetected && prevCollision === false) {
      // add to collision count
      collisionCount = collisionCount +1;
      d3.select('.collisions span').text(collisionCount);
      prevCollision = true;
    }
  })

};

function updateScore () {
  if (collisionCount<10) {
    currentScore = currentScore +1; 
   d3.select('.current span').text(currentScore);
  }
}
d3.timer(updateScore);

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
d3.timer(collide);
