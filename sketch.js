let img;
let oriImg;

function preload() {
  img = loadImage('assets/Pacita Abad Wheels of fortune.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight * 3/4);
  ellipseMode(CENTER);
}

function draw() {
  background(9, 91, 130);
  //试了一下，这个大小感觉比较合适 tried, this size looks better
  //oriImg = image(img, 0, 0, windowWidth, windowHeight * 3/4);

  //画圆 draw circles
  noStroke();
  fill(254,198,80)//黄色背景
  ellipse(295, 510, 170);//15

  fill(225);
  ellipse(90, 80, 170);//1
  ellipse(37, 250, 170);//2
  ellipse(270, 35, 170);//3
  ellipse(212, 215, 170);//4
  ellipse(410, 160, 170);//5
  ellipse(470, -10, 170);//6
  ellipse(600, 125, 170);//7
  ellipse(545, 290, 170);//8
  ellipse(665, 440, 170);//9
  ellipse(610, 610, 170);//10
  ellipse(490, 470, 170);//11
  ellipse(355, 340, 170);//12
  ellipse(155, 390, 170);//13
  ellipse(110, 560, 170);//14
  ellipse(425, 640, 170);//16
  ellipse(-20, 430, 170);//17



  //画图案 draw patterns

  // pattern12
  drawPattern(355, 340, 170, color(220,72,117),//dotColor 
  color(242,66,111), color(75, 85, 63), color(189, 197, 185), color(0, 0, 0), color(20, 145, 41), color(191, 202, 207));//centralcolor
  // pattern13
  drawPattern(155, 390, 170, color(150, 0, 0),//dotColor  
  color(85, 85, 163), color(75, 85, 63), color(189, 197, 185), color(0, 0, 0), color(20, 145, 41), color(191, 202, 207));//centralcolor 
  // pattern14
  drawPattern(110, 560, 170, color(232,21,10),//dotColor  
  color(93,173,225), color(75, 85, 63), color(189, 197, 185), color(0, 0, 0), color(20, 145, 41), color(191, 202, 207));//centralcolor 
  // pattern15
  drawPattern(295, 510, 170, color(223,57,127),//dotColor  
  color(224,194,75), color(75, 85, 63), color(152,171,156), color(0, 0, 0), color(244,72,81), color(224,207,215));//centralcolor 

  //分工编号 //numbered for each person to divide the work
  text('1', 90, 80);
  text('2', 37, 250);
  text('3', 270, 35);
  text('4', 212, 215);
  text('5', 410, 160);
  text('6', 470, 10);
  text('7', 600, 125);
  text('8', 545, 290);
  text('9', 665, 440);
  text('10', 610, 610);
  text('11', 490, 470);
  //text('12', 360, 340);
  //text('13', 155, 390);
  //text('14', 110, 560);
  //text('15', 295, 510);
  text('16', 425, 640);
  text('17', 0, 430);
}

//圆12,13,14,15的function function for pattern12,13,14,15
function drawPattern(x, y, r, dotColor, centralColor1, 
    centralColor2, centralColor3, centralColor4, 
    centralColor5, centralColor6) {
  push();
  translate(x, y);

  // 围绕的小点，一些会被变成线 dots around large circles
  fill(dotColor);
  noStroke();
  let layers = 20;//一共20层小点，层数少了点就是散的 20 layers of dots, fewer layers would be scattered 
  for (let i = 1; i <= layers; i++) {
    let dotCount = 10 * i;
    //每一层的半径，最外层是r/2-5，最内层是20 
    //radius of each layer, the outer layer is r/2-5 and the inner is 20
    let radius = min((r / 2) * (i / layers) + 20, r / 2 - 5);
    
    //每一层的小点 dots in each layer
  for (let i = 0; i < dotCount; i++) {
    let angle = (TWO_PI / dotCount) * i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
      ellipse(x, y, 3);
    }
  }

      // 围绕大圆的一圈圆 Circles around large circles
    fill(color(random(100, 200), random(100, 200), random(100, 200)));
    stroke(150, 68, 27);
    strokeWeight(3);
    //number of circles
    let colorCount = 30;
    //radius of the whole round
    let outerRadius = r / 2 + 8;
    for (let i = 0; i < colorCount; i++) {
      let angle = (TWO_PI / colorCount) * i;
      //location of the each circle
      let x = cos(angle) * outerRadius;
      let y = sin(angle) * outerRadius;
      ellipse(x, y, 15, 10);
    }

    // 这些圆中的黑点 Black dots in the circles
    fill(0);
    noStroke();
    let colorCount1 = 20;
    let outerRadius1 = r / 2 + 8;
    for (let i = 0; i < colorCount1; i++) {
      let angle = (TWO_PI / colorCount1) * i;
      let x = cos(angle) * outerRadius1;
      let y = sin(angle) * outerRadius1;
      ellipse(x, y, 8);
    }

    // 黑点中间的白点 White dots in the black dots
    fill(255);
    noStroke();
    let colorCount2 = 20;
    let outerRadius2 = r / 2 + 8;
    for (let i = 0; i < colorCount2; i++) {
      let angle = (TWO_PI / colorCount2) * i;
      let x = cos(angle) * outerRadius2;
      let y = sin(angle) * outerRadius2;
      ellipse(x, y, 3);
    }

  //中间层，虽然我也不知道它咋在动，怪好看的 
  //Middle layer, I don't know how it moves, but it looks good
  //如果把midcolors写到drawPattern里面，就会变成一个颜色不停在闪
  //If  write midcolors in function drawPattern, it becomes flashing color
  for (let i = 0; i < 10; i++) {
    let midRadius = map(i, 0, 10, r * 3/5, 20);
    //粉色系的random颜色
    let midColors = color(random(200, 255), random(100, 150), random(150, 200));
    fill(midColors);
    noStroke();
    ellipse(0, 0, midRadius);
  }

  // 每个大圆最中心一圈圆
  //Central circles in each large circle
  drawCentralCircle(centralColor1, r / 3);
  drawCentralCircle(centralColor2, r / 4); // 里5
  drawCentralCircle(centralColor3, r / 5); // 里4
  drawCentralCircle(centralColor4, r / 6); // 里3
  drawCentralCircle(centralColor5, r / 8); // 里2
  drawCentralCircle(centralColor6, r / 15); // 里1

  pop();
}

//画中心的圆
//Draw the central circle
function drawCentralCircle(cenColor, cenRadius) {
  fill(cenColor);
  noStroke();
  ellipse(0, 0, cenRadius);
}

/* 后期再改窗口尺寸，需要把圆从数字改成windowWidth和windowHeight的比例
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/