class Computerbase{
    constructor(x,y,width,height){
        let options ={
            isStatic:true
        }
        this.body = Body.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/base1.png");
        World.add(world,this.body)
    }
    show(){
        let pos = this.body.position;
        let angle = this.body.position;
        push()
        treanslate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.widht,this.height);
        pop();
    }
}