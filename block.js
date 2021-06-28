class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.block1 = loadImage("block1.PNG");
        this.Visibility = 255;

      
      }
      display(){
        console.log(this.body.speed);

       
        if(this.body.speed < 3){

          var angle = this.body.angle;
          var pos= this.body.position;
  
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          image(this.block1, this.body.position.x, this.body.position.y, 50, 50);
          pop();

        }

      }
}
