const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var stand1,stand2;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21,box22;
var box23,box24,box25;
var box26,box27;
var box28;

var box29,box30,box31,box32,box33;
var box34,box35,box36,box37;
var box38,box39,box40;
var box41,box42;
var box43;

var polygon;


function setup(){
    var canvas = createCanvas(1400,700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,height,1400,30);


    stand1 = new Ground (600,420,250,10);
    stand2 = new Ground (1000,225,180,10);

    box1 = new Box (510,400,30,40);
    box2 = new Box (540,400,30,40);
    box3 = new Box (570,400,30,40);
    box4 = new Box (600,400,30,40);
    box5 = new Box (630,400,30,40);
    box6 = new Box (660,400,30,40);
    box7 = new Box (690,400,30,40);


    box8 = new Box (525,360,30,40);
    box9 = new Box (555,360,30,40);
    box10 = new Box (585,360,30,40);
    box11 = new Box (615,360,30,40);
    box12 = new Box (645,360,30,40);
    box13 = new Box (675,360,30,40);

    
    box14 = new Box (540,320,30,40);
    box15 = new Box (570,320,30,40);
    box16 = new Box (600,320,30,40);
    box17 = new Box (630,320,30,40);
    box18 = new Box (660,320,30,40);

    
    box19 = new Box (555,280,30,40);
    box20 = new Box (585,280,30,40);
    box21 = new Box (615,280,30,40);
    box22 = new Box (645,280,30,40);

    
    box23 = new Box (570,240,30,40);
    box24 = new Box (600,240,30,40);
    box25 = new Box (630,240,30,40);

    
    //box26 = new Box (585,200,30,40);
    //box27 = new Box (615,200,30,40);

    
    //box28 = new Box (580,160,30,40);


    box29 = new Box (940,200,30,40);
    box30 = new Box (970,200,30,40);
    box31 = new Box (1000,200,30,40);
    box32 = new Box (1030,200,30,40);
    box33 = new Box (1060,200,30,40);

    box34 = new Box (950,160,30,40);
    box35 = new Box (980,160,30,40);
    box36 = new Box (1010,160,30,40);
    box37 = new Box (1040,160,30,40);

    box38 = new Box (960,120,30,40);
    box39 = new Box (990,120,30,40);
    box40 = new Box (1020,120,30,40);

    box41 = new Box (970,80,30,40);
    box42 = new Box (1000,80,30,40);

   // box43 = new Box (991,40,30,40);


   

    polygon = Bodies.circle(50,200,20);
    polygon.image=loadImage("polygon.png");
    World.add(world,polygon);


    slingshot = new Slingshot(polygon,{x:200,y:200});



}


function draw (){
    background("white");
    Engine.update(engine);


    //stand 1
    //level 1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    //level 2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    //level 3
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    //level 4
    box19.display();
    box20.display();
    box21.display();
    box22.display();
 
    //level 5
    box23.display();
    box24.display();
    box25.display();

    //level 6 
    //box26.display();
   // box27.display();

    //level 7
    //box28.display();

    //stand 2
    //level 1
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    //level 2
    box34.display();
    box35.display();
    box36.display();
    box37.display();

    //level 3
    box38.display();
    box39.display();
    box40.display();

    //level 4
    box41.display();
    box42.display();

    //level 5
    //box43.display();
   

    ground.display();


    stand1.display();
    stand2.display();


    imageMode (CENTER);
    image (polygon.image,polygon.position.x,polygon.position.y,40,40);


    slingshot.display();

   

}

function mouseDragged (){
    Matter.Body.setPosition(polygon, { 'x' : mouseX, 'y' : mouseY });
}

function mouseReleased (){
    slingshot.fly();

}
