let colors = [];
let bigCircles = [];
let smallStrokeCircles = [];
  
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
  
  //color array  
  colors = [
    color('#242062'),//1 a
    color('#0C63AD'),//2 b
    color('#0E99A2'),//3 c
    color('#FDCE23'),//4 d
    color('#199646'),//5 f
    color('#FDCE23'),//6 d
    color('#DF3E86'),//7 e
    color('#F0A428'),//8 g
    color('#DF3E86'),//9 e
    color('#F0A428'),//10 g
    color('#0C63AD'),//11 b
    color('#F0A428'),//12 g
    color('#199646'),//13 f
    color('#242062'),//14 a
    color('#0E99A2'),//15 c
    color('#FDCE23')//16 d
   ];


  //radius is scaled with canvas
  let r = min(width, height) * 0.35; 

  //change at 11.2, set an array to store the big circles maybe more readable
  bigCircles = [
    //x larger, more to the right; y larger, more to the bottom
    //scale factors for positions are set one by one roughly instead of using a loop and formulas, 
    //if they are incorrect or inconvenient, tell me in the group chat
    new Circle(0.1, 0.05, r, colors[0]),//1
    new Circle(0.11, 0.43, r, colors[1]),//2
    new Circle(0.05, 0.8, r, colors[2]),//3
    new Circle(0.35, 0, r, colors[3]),//4
    new Circle(0.3, 0.38, r, colors[4]),//5
    new Circle(0.24, 0.75, r, colors[5]),//6
    new Circle(0.17, 1.1, r, colors[6]),//7
    new Circle(0.5, 0.26, r, colors[7]),//8
    new Circle(0.45, 0.68, r, colors[8]),//9
    new Circle(0.40, 1.05, r, colors[9]),//10
    new Circle(0.7, 0.24, r, colors[10]),//11
    new Circle(0.68, 0.61, r, colors[11]),//12
    new Circle(0.63, 0.98, r, colors[12]),//13
    new Circle(0.89, 0.08, r, colors[13]),//14
    new Circle(0.9, 0.57, r, colors[14]),//15
    new Circle(0.87, 1, r, colors[15])//16
    ];

    // Small strke circles with specified colors and locations
    smallStrokeCircles = [
    new SmallStrokeCircle(bigCircles[1], r * 0.4, null, color('#D43E8E'), 40, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.2, null, color('#879F88'), 25, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.1, null, color('#EF3D29'), 15, true), //  circle 2
    new SmallStrokeCircle(bigCircles[2], r * 0.2, null, color(255), 3, true), //  circle 3
    new SmallStrokeCircle(bigCircles[4], r * 0.2, null, color(255), 3, true), // circle 4
    new SmallStrokeCircle(bigCircles[8], r * 0.2, null, color(255), 3, true), // circle 9
    new SmallStrokeCircle(bigCircles[9], r * 0.2, null, color(255), 3, true), //  circle 10
    new SmallStrokeCircle(bigCircles[11], r * 0.2, null, color(255), 3, true), //  circle 12
    new SmallStrokeCircle(bigCircles[14], r * 0.2, null, color(255), 3, true),//  circle 15
    new SmallStrokeCircle(bigCircles[15], r * 0.2, null, color(255), 3, true),// circle 16
    
    new SmallStrokeCircle(bigCircles[1], r * 0.34, null, color('#F05641'), 15, false, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.4, null, color('#F05641'), 10, false, true), //  circle 2
   
    ];
  }

//set up the class of the big circle
class Circle {
  //x and y scale based on the width and height
  //thus the patterns can change with the size of the window 
  constructor(xScale, yScale, r, color) {
    this.xScale = xScale; 
    this.yScale = yScale; 
    this.r = r;
    this.color = color;
    }
  
  draw() {
    fill(this.color);
    noStroke();
    //x and y actual position are width*scale factors
    let x = width * this.xScale;
    let y = height * this.yScale;
    ellipse(x, y, this.r);
    }
  }
  
class SmallStrokeCircle {
  constructor(bigCircle, r, fillColor, strokeColor, strokeWeightVal, hasFill, isDashed = false) {
    this.bigCircle = bigCircle;
    this.r = r;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor; 
    this.strokeWeightVal = strokeWeightVal;
    this.hasFill = hasFill;
    this.isDashed = isDashed;
  }
  draw() {
    let x = width * this.bigCircle.xScale;
    let y = height * this.bigCircle.yScale;

    if (this.isDashed) {
        this.drawDashedCircle(x, y, this.r);
    } else {
        if (this.hasFill && this.fillColor) {
            fill(this.fillColor);
        } else {
            noFill();
        }
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeightVal);
        ellipse(x, y, this.r);
    }
}

drawDashedCircle(x, y, diameter) {
    let numDashes = 20; // Number of dashes in the circle
    let angleStep = TWO_PI / numDashes;
    let gapRatio = 0.7; // Ratio of gap size to total segment size (adjust this to change spacing)
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeightVal);
    strokeCap(ROUND); // Makes the ends of dashes rounded

    for (let i = 0; i < numDashes; i++) {
        let angle = i * angleStep;
        let x1 = x + cos(angle) * diameter / 2;
        let y1 = y + sin(angle) * diameter / 2;
        let x2 = x + cos(angle + angleStep * (1 - gapRatio)) * diameter / 2;
        let y2 = y + sin(angle + angleStep * (1 - gapRatio)) * diameter / 2;
        line(x1, y1, x2, y2);
    }
}
}



function draw() {
  background(255);

  //draw the big circles
  for(let circle of bigCircles){
    circle.draw();
    }

  // Draw small stroke circles on top
  for (let smallCircle of smallStrokeCircles) {
    smallCircle.draw();
  }
}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }