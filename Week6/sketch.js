//Sharon Lee
//dlee71@sva.edu

var dirX = 1;
var dirY = 0.5;
var speed = 5;
var x = 200;
var y = 200;
var cirSize = 40;
var bar = 0;
var barWidth = 55;
var difference = 27.5;
var colour1 = 255;
var colour2 = 255;
var colour3 = 255;
var gameover = false;
var count = 0;

function setup () {
    createCanvas(400,400);
    angleMode (DEGREES);
}

function draw () {
    background (0);
    fill (255);
    noStroke ();
    ellipse(x, y, cirSize, cirSize);
    //bars
    fill (colour1, colour2, colour3);
    noStroke();
    rectMode(CENTER);
    rect (50,mouseY,10,barWidth);
    //direction of the pin
    x += dirX * speed; 
    y += dirY * speed;
      
    if ((x == 70) && (bar - difference < y && bar + difference > y)) {
        dirX = -dirX;
        speed = random (3,5);
        barWidth = random (30,60);
        difference = barWidth;
        colour1 = random(0,255);
        colour2 = random(0,255);
        colour3 = random(0,255);  
    }

    if (x > width - 25) {
        dirX = -dirX;
        //dirY = -dirY;
    }
    if (y < 25 || y > width - 25) {
        dirY = -dirY;
    }

    if (x <= 0){
        gameover = true;
    }

    if (gameover==true){
        textSize(44);
        textStyle(BOLD);
        text("GAME OVER",60,220);
    }
}

function mouseMoved () {
    bar = mouseY;
}
   
