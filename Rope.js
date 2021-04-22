
class Rope {

    constructor (bodyA,pointB) {

        var options = {

            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:350

        }

        this.body  = Matter.Constraint.create (options);
        this.pointB = pointB;
        world.add (myworld,this.body);

    }

    display () {

        if (this.body.bodyA) {
            
            var a = this.body.bodyA.position;
            var b = this.pointB;
            push ();
            stroke ("black");
            strokeWeight (0);
            line (a.x,a.y,b.x,b.y);
            pop ();

        }

    }

    fly () {

        this.body.bodyA = null;

    }

    attach (body) {

        this.body.bodyA = body;

    }

}
