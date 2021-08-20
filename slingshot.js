class Slingshot{
    constructor(body1,point){
        var options = {
            bodyA:body1,
            pointB:point,
            length:10,
            stiffness:0.04
        }
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
        this.pointB = point
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
        //line(x1,y1,x2,y2)
        push()
        strokeWeight(4)
        stroke(48,22,8)
        if(this.sling.bodyA){
            if(this.sling.bodyA.position.x<220){

            line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
            line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
            image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
            }else{
                line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
                line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
                image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)    
            }
        }
        pop()
    }
    remove(){
        this.sling.bodyA = null
    }
    attach(body){
        this.sling.bodyA = body
    }
}