var x,y;
var xs,ys;
var dvd;
var h,b,s;
function preload(){
  dvd = loadImage("logo.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  x = random(1,width)
  y = random(1,height)
  xs = 5
  ys = 5
  cc()
  colorMode(HSB)
} 
function cc(){
  h = random(100,360)
  s = random(100,100)
  b = random(100,100)
}

function draw() {
  
  background(0);
 
  x = xs + x;
  y = ys + y;
  tint(h,s,b)
  image(dvd,x,y);
if(x + dvd.width >= width){
  xs = -xs;
  x = width - dvd.width
  cc()
}else if(x <= 0){
  xs = -xs;
  x = 0
  cc()
}
if(y + dvd.height >= height){
  ys = -ys;
  y = height - dvd.height
  cc()
}else if(y <= 0){
  ys = -ys;
  y = 0
  cc()
}

}
