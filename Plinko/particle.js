function Particle(x, y, r) {
  var options = {
    restitution: 0.51,
    friction: 0
  };
  this.hue = random(360);
  this.body = Bodies.circle(x + random(-1.5, 1.5), y, r, options);
  this.r = r;
  World.add(world, this.body);

  Particle.prototype.show = function() {
    push();
    colorMode(HSB);
    fill(this.hue, 255, 255);
    noStroke();
    var pos = this.body.position;
    translate(pos.x, pos.y);
    circle(0, 0, this.r);
    pop();
  }

  Particle.prototype.off = function() {
    var x = this.body.position.x;
    return (x < -50 || x > width + 50);
  }


}