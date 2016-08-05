var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  ellipse(mouseX, mouseY, 10);
  //chicken(mouseX, mouseY);
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
    if (myRed > 255) {
    myRed = 0;
  }
  if (myBlue <= 0) {
    myBlue = 255;
  }
  if (mouseIsPressed) {
    noStroke();
    fill(255, 255, 255);
    ellipse(mouseX, mouseY, 50, 50);
    if (mouseIsPressed == false) {
      fill(myRed, myGreen, myBlue);
    }
  }
    
  }

