let colors = [];
  
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
    //scale factors are set manually, if they are incorrect or inconvenient, tell me in the group chat
        let x = width * this.xScale;
        let y = height * this.yScale;
        ellipse(x, y, this.r);
    }
  }
  

function draw() {
    
    background(255);
    //radius is scaled with canvas
    let r = min(width, height) * 0.35; 

    //draw the circles 
    //x larger, more to the right; y larger, more to the bottom
    new Circle(0.1, 0.05, r, colors[0]).draw();//1
    new Circle(0.11, 0.43, r, colors[1]).draw();//2
    new Circle(0.05, 0.8, r, colors[2]).draw();//3
    new Circle(0.35, 0, r, colors[3]).draw();//4
    new Circle(0.3, 0.38, r, colors[4]).draw();//5
    new Circle(0.24, 0.75, r, colors[5]).draw();//6
    new Circle(0.17, 1.1, r, colors[6]).draw();//7
    new Circle(0.5, 0.26, r, colors[7]).draw();//8
    new Circle(0.45, 0.68, r, colors[8]).draw();//9
    new Circle(0.40, 1.05, r, colors[9]).draw();//10
    new Circle(0.69, 0.24, r, colors[10]).draw();//11
    new Circle(0.68, 0.61, r, colors[11]).draw();//12
    new Circle(0.63, 0.98, r, colors[12]).draw();//13
    new Circle(0.89, 0.08, r, colors[13]).draw();//14
    new Circle(0.9, 0.57, r, colors[14]).draw();//15
    new Circle(0.87, 1, r, colors[15]).draw();//16
  }
  
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }