class paper 
{
    constructor(x,y,radius)
	{
        var options={
            isStatic:false,
           'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.radius=radius;
       this.x=x;
       this.y=y
       this.image = loadImage("paper.png");
       this.width=width;
       this.height=height;
        this.body=Bodies.circle(this.x,this.y,this.radius,options);
       
        

       
       //this.paperBody.image = loadImage(paper.png);

        World.add(world, this.body);

}
display(){
    //ellipseMode(CENTER);
    push();
    translate(this.body.position.x, this.body.position.y);
    //ellipse(0,0,this.radius,this.radius);
    imageMode(CENTER);
    image(this.image,0,0,105,105);
  
    
    
    
    pop();
}
}