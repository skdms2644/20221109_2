// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/W-ou_sVlTWk

function Particle(x, y, r, fixed) {
  var options = {
    friction: 0,
    restitution: 0.95,
    isStatic: fixed,
  };
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  World.add(world, this.body);

  this.isOffScreen = function () {
    var pos = this.body.position;
    return pos.y > height + 100;
  };

  this.removeFromWorld = function () {
    World.remove(world, this.body);
  };

  this.show = function () {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y - 100);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke(0);
    fill("green");
    ellipse(0, 0, this.r * 5);
    line(28, 0, this.r * 6, 0);
    pop();
  };
}
