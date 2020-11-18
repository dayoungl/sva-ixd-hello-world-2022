//Sharon Lee
//dlee71@sva/edu


var myCaptureDevice;
var brightnessThreshold = 50;
var darknessThreshold = 40;
var theBrightnessOfTheColorAtPxPy = 100;
var letter = "Baby your legs so fine"
var array = [];

function setup() {
  createCanvas(640, 480);
  myCaptureDevice = createCapture(VIDEO);
  myCaptureDevice.size(640, 480); // attempt to size the camera. 
  myCaptureDevice.hide(); // this hides an unnecessary extra view.

  for (var i = 0; i < letter.length; i++) {
    var A = new TextRainLetter(letter.charAt(i), floor(width/letter.length) * i, 0);
    array [i] = A;
  };
}

function draw() {
  background(220);
  myCaptureDevice.loadPixels();
  image(myCaptureDevice, 0,0);
  i
  for (var i = 0; i < letter.length; i++) {
    array[i].trlRender();
    array[i].trlUpdate();
  };
}

function TextRainLetter (inputL, inputX, inputY) {
  this.letter = inputL;
  this.px = inputX;
  this.py = inputY;
 
  this.trlUpdate = function() {
    var theColorAtPxPy = myCaptureDevice.get(this.px, this.py);
    theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);

    if (theBrightnessOfTheColorAtPxPy > brightnessThreshold) {
      this.py++;
    } 
    while (theBrightnessOfTheColorAtPxPy < darknessThreshold && this.py > 0) {
      theColorAtPxPy = myCaptureDevice.get(this.px, this.py)
      theBrightnessOfTheColorAtPxPy = brightness(theColorAtPxPy);
      this.py--;  
    }
    if (this.py >= height) {
      this.reset();
    }
  }

  this.trlReset = function() {
    this.py = 0;
  }

  this.trlRender = function() {
    textSize(20);
    text (this.letter, 10 + this.px, this.py + 30);

  }
}


