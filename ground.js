class ground{

    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.ground=Bodies.rectangle(x.y,1200,20,options)
        World.add(world, this.ground)
    }
    display(){
        push()
        rectMode(CENTER)
        fill(200,0,255)
        rectMode(this.ground.position.x)
        pop()
    }
}