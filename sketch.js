
const engine = Matter.Engine;
const world  = Matter.World;
const bodies = Matter.Bodies;

var myengine,myworld;

var bg;

var gameState = "onSling";

var ground;

var hero;

var rope;

var monster;

var box1;

function preload () {

  bg = loadImage ("bg.png");

}

function setup () {

  createCanvas(1270,600);

  myengine = engine.create ();
  myworld  = myengine.world;

  ground   = new Ground (350,550,1270,8);

  hero     = new Hero (200,600);

  rope     = new Rope (hero.body, {x:250,y:0} );

  monster  = new Monster (1080,450);

  box1     = new Box (550,500);
  box2     = new Box (550,450);
  box3     = new Box (550,400);
  box4     = new Box (550,350);
  box5     = new Box (550,300);
  box6     = new Box (550,250);
  box7     = new Box (550,200);
  box8     = new Box (550,150);
  box9     = new Box (550,100);
  box10    = new Box (550,50);

  box11    = new Box (620,500);
  box12    = new Box (620,450);
  box13    = new Box (620,400);
  box14    = new Box (620,350);
  box15    = new Box (620,300);
  box16    = new Box (620,250);

  box17    = new Box (690,500);
  box18    = new Box (690,450);
  box19    = new Box (690,400);
  box20    = new Box (690,350);
  box21    = new Box (690,300);
  box22    = new Box (690,250);
  box23    = new Box (690,200);
  box24    = new Box (690,150);
  box25    = new Box (690,100);
  box26    = new Box (690,50);

  box27    = new Box (760,500);
  box28    = new Box (760,450);
  box29    = new Box (760,400);
  box30    = new Box (760,350);
  box31    = new Box (760,300);
  box32    = new Box (760,250);

  box33    = new Box (830,500);
  box34    = new Box (830,450);
  box35    = new Box (830,400);
  box36    = new Box (830,350);
  box37    = new Box (830,300);
  box38    = new Box (830,250);
  box39    = new Box (830,200);
  box40    = new Box (830,150);
  box41    = new Box (830,100);
  box42    = new Box (830,50);

}

function draw () {

  background(bg);
  
  engine.update (myengine);

  ground.display ();

  hero.display ();

  rope.display ();

  monster.display ();

  box1.display ();
  box2.display ();
  box3.display ();
  box4.display ();
  box5.display ();
  box6.display ();
  box7.display ();
  box8.display ();
  box9.display ();
  box10.display ();
  box11.display ();
  box12.display ();
  box13.display ();
  box14.display (); 
  box15.display ();
  box16.display ();
  box17.display ();
  box18.display ();
  box19.display ();
  box20.display ();
  box21.display ();
  box22.display ();
  box23.display ();
  box24.display ();
  box25.display ();
  box26.display ();
  box27.display ();
  box28.display ();
  box29.display ();
  box30.display ();
  box31.display ();
  box32.display ();
  box33.display ();
  box34.display ();
  box35.display ();
  box36.display ();
  box37.display ();
  box38.display ();
  box39.display ();
  box40.display ();
  box41.display ();
  box42.display ();

  detectCollision (monster,box1);
  detectCollision (monster,box2);
  detectCollision (monster,box3);
  detectCollision (monster,box4);
  detectCollision (monster,box5);
  detectCollision (monster,box6);
  detectCollision (monster,box7);
  detectCollision (monster,box8);
  detectCollision (monster,box9);
  detectCollision (monster,box10);

  detectCollision (monster,box11);
  detectCollision (monster,box12);
  detectCollision (monster,box13);
  detectCollision (monster,box14);
  detectCollision (monster,box15);
  detectCollision (monster,box16);
  detectCollision (monster,box17);
  detectCollision (monster,box18);
  detectCollision (monster,box19);
  detectCollision (monster,box20);

  detectCollision (monster,box21);
  detectCollision (monster,box22);
  detectCollision (monster,box23);
  detectCollision (monster,box24);
  detectCollision (monster,box25);
  detectCollision (monster,box26);
  detectCollision (monster,box27);
  detectCollision (monster,box28);
  detectCollision (monster,box29);
  detectCollision (monster,box30);

  detectCollision (monster,box31);
  detectCollision (monster,box32);
  detectCollision (monster,box33);
  detectCollision (monster,box34);
  detectCollision (monster,box35);
  detectCollision (monster,box36);
  detectCollision (monster,box37);
  detectCollision (monster,box38);
  detectCollision (monster,box39);
  detectCollision (monster,box40);

  detectCollision (monster,box41);
  detectCollision (monster,box42);

}

function mouseDragged () {

  if (gameState!=="launched") {
    Matter.Body.setPosition (hero.body,{x:mouseX,y:mouseY});
  }

}

function mouseReleased () {

  gameState="launched";
  rope.fly ();

}

function detectCollision (lmonster,lbox) {

	monsterBodyPosition=lmonster.body.position;
	boxBodyPosition=lbox.body.position;

	var distance = dist (monsterBodyPosition.x,monsterBodyPosition.y,boxBodyPosition.x,boxBodyPosition.y);

	if (distance<= lbox.width + lmonster.radius ) {

		Matter.Body.setStatic (lmonster.body, false);

	}

}
