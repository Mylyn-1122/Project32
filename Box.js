class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("wood1.png")
        this.visibility = 255;
      }

      score(){
        if (this.visiblity < 100 && this.visibility > -100){
          Score++;
        }
      }

      display(){
        if(this.body.speed < 3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(this.body.angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }

}