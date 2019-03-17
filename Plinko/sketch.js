var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var bounds = [];
var cols = 13,
  rows = 8;


function new_particle() {
  var p = new Particle(width / 2, -10, 13);
  particles.push(p);
}

function setup() {
  createCanvas(1080, 1080);
  background(51);
  engine = Engine.create();
  world = engine.world;
  new_particle();

  world.gravity.y = 2.2;

  var spacing = width / cols;

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var x = i * spacing + spacing / 2 + (j % 2) * spacing / 2;
      var y = spacing + j * spacing;
      var p = new Plinko(x, y, 10);
      plinkos.push(p);
    }
  }

  var b = new Boundary(width / 2, height + 46, width, 100);
  bounds.push(b);

  for (var i = 0; i <= cols; i++) {
    var x = i * spacing - 6;
    var h = 152;
    var w = 11;
    var y = height - h / 2;
    var nb = new Boundary(x, y, w, h);
    bounds.push(nb);
  }


}

function draw() {
  background(51);

  if (frameCount % 50 == 0) {
    new_particle();
  }

  Engine.update(engine);
  for (var i = particles.length - 1; i > 0; i--) {
    particles[i].show();
    if (particles[i].off()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
    }
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }

  for (var i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }






}