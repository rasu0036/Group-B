let img;

function preload() {
  img = loadImage('assets/Pacita Abad Wheels of fortune.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight * 3/4);
  ellipseMode(CENTER);
}


function draw() {
  background(0);
  //试了一下，这个大小感觉比较合适
  //图片参考，最后去掉
  image(img, 0, 0, windowWidth, windowHeight * 3/4);

  //画圆
  noStroke();
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
  ellipse(295, 510, 170);//15
  ellipse(425, 640, 170);//16
  ellipse(-20, 430, 170);//17

  //编号
  text('1', 90, 80);
  text('2', 37, 250);
  text('3', 270, 35);
  text('4', 212, 215);
  text('5', 410, 160);
  text('6', 470, 10);
  text('7', 600, 125);
  text('8', 545, 290);
  text('9', 630, 440);
  text('10', 610, 600);
  text('11', 490, 470);
  text('12', 360, 340);
  text('13', 155, 390);
  text('14', 110, 560);
  text('15', 295, 510);
  text('16', 425, 600);
  text('17', 0, 430);


}


/* 后期再改窗口尺寸，需要把圆从数字改成windowWidth和windowHeight的比例
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/