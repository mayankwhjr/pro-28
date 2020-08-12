class Container{
    constructor(x, y,width,height) {
      var options = {
      isStatic:true    
          
          
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("container.jpg")
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue")
    fill("green");
    rect(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }
};