
class Hero {

    constructor (x,y) {

        var options = {density: 1, frictionAir: 0.03}

        this.image  = loadImage ("superhero.png");
        this.body   = bodies.rectangle (x,y,350,150,options);
        this.width  = 350;
        this.height = 150;
        world.add (myworld,this.body);

    }

    display () {

        var heroPos=this.body.position;		
		push()
		translate(heroPos.x, heroPos.y-100);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
		pop()

    }

}
