//Sharon Lee
//dlee71@sva.edu

var h = 280;
var v = 5;
var dirX = 1;
var wall1 = 60;
var wall2 = 340;
var xarray = [];
var yarray = [];
var rings = 10;
var counts = [];
var circles = [];

var xs = []
var ys = []
var is = []

function setup() {
  createCanvas(400,400);
  // angleMODE(DEGREES);
  frameRate(8);
}

function draw() {
  ripples();
  for(i = 0; i< counts.length;i++){
    counts[i]++;
  }
  if(counts[0]>rings){
    counts.splice(0,1);
    xarray.splice(0,1);
    yarray.splice(0,1);
  }
 
}

function ripples() {
  background(100);
  //rectangle
  push();
  rectMode(CENTER);
  stroke(122,203,241);
  strokeWeight(4);
  noFill();
  rect(width/2, height/2,h,h);
  //set the number of the ripples
  for (i = 0; i < xarray.length; i ++){
    
    //draw ripples
    stroke(122,203,241);
    noFill();
    // var m = map(mouseX, 0, width, 25, 75);
    //constrain the ripples inside the square
    var xc = constrain(xarray[i], wall1, wall2);
    var yc = constrain(yarray[i], wall1, wall2);
    xs.push(xc);
    ys.push(yc);
    is.push(counts[i]);
    //ellipse(xc,yc,50 * counts[i], 50 * counts[i]);
  }

  for (i = 0; i < xs.length; i++) {
    ellipse(xs[i],ys[i],50 * is[i], 50 * is[i]);
  }

  pop();
  fill(100);
  noStroke();
  rect(0,0,wall1,height);
  //create bounding box
  //right bouding box
  rect(wall2,0,wall1,height);
  //left bounding box
  rect(height,0,width,wall1);
   //top bounding box
  rect(0,0,width,wall1);
  //bottom bounding box
  rect(0,wall2,width,wall1);
}

function mousePressed() { 
  counts.push(0);
  xarray.push(mouseX);
  yarray.push(mouseY);
}

// function mouseDragged() {
//   ripples (mouseX, mouseY);
// }

