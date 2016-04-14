


var oscillator;
function setup() {
w=window.innerWidth;
h=window.innerHeight;
  createCanvas(w,h);
  frameRate( 24 );

x=w/2;
y=h/2;
xSpeed=0;
ySpeed=0;
frameCount=0
r=0;
g=0;
b=0;
// create web audio api context
// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//
// // create Oscillator node
// oscillator = audioCtx.createOscillator();
// var gainNode = audioCtx.createGain();
// oscillator.connect(gainNode);
// gainNode.connect(audioCtx.destination);
//
// oscillator.type = 'square';
// oscillator.frequency.value = 220; // value in hertz
// oscillator.detune.value=0;
//
// gainNode.gain.value = 0.1;
}
var lines=[];
var speedNotNormalized;
function draw() {

// //audio
// oscillator.detune.value+=2;// value in cents
//
// if(frameCount===10){
//   oscillator.start();
//   // oscillator.detune.value=5;
// }
// if(frameCount===20)
// {
//   oscillator.stop();
// }


  var a=255;
if(lines.length >=30){
  lines = lines.slice(0,30);
}
  background(0, 0, 0, 0);
  lines.unshift({"x":x, "y":y, "xSpeed":xSpeed, "ySpeed":ySpeed, "r":r, "g":g, "b":b, "a":a});


  xSpeed +=  Math.floor((Math.random() * 7) -3);
  ySpeed +=  Math.floor((Math.random() * 7) -3);

  if(xSpeed*xSpeed+ySpeed*ySpeed>400){
    speedNotNormalized = Math.sqrt(xSpeed*xSpeed+ySpeed*ySpeed);
    xSpeed = xSpeed*20/speedNotNormalized;
    ySpeed = ySpeed*20/speedNotNormalized;
  }
  // if(xSpeed<-20){xSpeed=-20;}
  // else if(xSpeed>20){xSpeed=20;}
  // if(ySpeed<-20){ySpeed=-20;}
  // else if(ySpeed>20){ySpeed=20;}

  for (var i=0; i<lines.length; i++){

    var  randPos =  Math.floor((Math.random() * 41) -20);
    stroke(lines[i].r, lines[i].g, lines[i].b, lines[i].a);
    line(lines[i].x-lines[i].xSpeed,lines[i].y-lines[i].ySpeed, lines[i].x, lines[i].y);
    // line(myLine.x-myLine.xSpeed-100,myLine.y-myLine.ySpeed-100, myLine.x, myLine.y);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x+50, myLine.y-50);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x-50, myLine.y+50);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x-50, myLine.y-50);

    lines[i].x -= xSpeed;
    lines[i].y -= ySpeed;
    lines[i].a -= 20;
  };


  r += Math.floor((Math.random() * 41) -20);
  g += Math.floor((Math.random() * 41) -20);
  b += Math.floor((Math.random() * 41) -10);
  if(r<0)r=0;
  else if(r>255)r=255;
  if(g<0)g=0;
  else if(g>255)g=255;
  if(b<0)b=0;
  else if(b>255)b=255;
  frameCount++;

}
