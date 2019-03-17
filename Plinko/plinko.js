function Plinko(x, y, r) {
  var options = {
    isStatic: true,
    restitution: 0.51,
    friction: 0
  };

  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  Plinko.prototype.show = function() {
    push();
    fill(23, 255, 55);
    noStroke();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    circle(0, 0, this.r);
    pop();
  }




}