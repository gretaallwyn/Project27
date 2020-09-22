class BobObject {
    constructor(x, y, radius) {
      var options = {
            isStatic:false,
          'restitution':1.0,
          'friction':1,
          'density':1.2
      }

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }


  display(){
    var angle=this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("violet");
    ellipse( 0, 0 );
    pop();
  }
}