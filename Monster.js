
class Monster {

    constructor (x,y) {

        var options = { density: 1, frictionAir: 0.9, isStatic:true }

        this.image  = loadImage ("monster.png");
        this.body   = bodies.circle (x,y,200,options);
        this.radius = 200;
        world.add (myworld,this.body);

    }

    display () {

        var heroPos=this.body.position;		
		push()
		translate(heroPos.x, heroPos.y-100);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0, 0, this.radius, this.radius);
		pop()

    }

}
