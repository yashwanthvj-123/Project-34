
class Box {

    constructor (x,y) {

        var options = {

            friction:1.0,
            restitution:0.8,
            density:0.04

        }

        this.body   = bodies.rectangle (x,y,50,50,options);
        this.width  = 50;
        this.height = 50;
        world.add (myworld,this.body);

    }

    display () {

        var a = this.body.position;
        push ();
        translate (a.x,a.y);
        rotate (this.body.angle);
        rectMode (CENTER);
        strokeWeight (2);
        stroke ("black");
        fill ("red");
        rect (0,0,this.width,this.height);
        pop ();

    }

}
