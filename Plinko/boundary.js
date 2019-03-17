function Boundary(x, y, w, h) {
  var options = {
    isStatic: true,
    friction: 0
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  Boundary.prototype.show = function() {
    push();
    fill(44, 152, 152);
    stroke(181);
    var pos = this.body.position;
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

  }

}