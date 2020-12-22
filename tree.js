class Tree{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=450
        this.height=600
        this.thickness=10
        this.image = loadImage("tree.png");
        this.body1 = Bodies.rectangle(0,this.y-this.height/2,this.thickness,this.height,options);
        this.body2 = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
        this.body3 = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.body1);
        World.add(world,this.body2);
        World.add(world,this.body3);

    }
        display(){
            var pos = this.body2.position;
            push()
            translate(pos.x,pos.y+10)
            rectMode(CENTER)
            image(this.image,-this.height/2,this.width,this.height);
            pop()
        }
    
};
