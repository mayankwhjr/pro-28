class Ball{
    constructor(x, y,r) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y,r,options) 
      this.r=r;
      this.image=loadImage("33948104.jpg")      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("green")
      fill("white");
      ellipse(0, 0,this.r,this.r)
      imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
      pop();
    }
    
  };
  