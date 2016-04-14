


var oscillator;
function setup() {
w=window.innerWidth,
h=window.innerHeight
  createCanvas(w,h  );
  frameRate( 24 );

x=w/2;
y=h/2;
xSpeed=0;
ySpeed=0;
frameCount=0
colorH=0;
colorS=100;

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

  var colorB=100;

if(lines.length >=30){
  lines = lines.slice(0,30);
}
  colorMode(RGB, 255, 255, 255, 255)
  background(0, 0, 0, 255);

  lines.unshift({"x":x, "y":y, "xSpeed":xSpeed, "ySpeed":ySpeed, "h":colorH, "s":colorS, "b":colorB});


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
colorMode(HSB,360, 100, 100);
  for (var i=0; i<lines.length; i++){

    var  randPos =  Math.floor((Math.random() * 41) -20);
    stroke(lines[i].h, lines[i].s, lines[i].b);
    line(lines[i].x-lines[i].xSpeed,lines[i].y-lines[i].ySpeed, lines[i].x, lines[i].y);
    // line(myLine.x-myLine.xSpeed-100,myLine.y-myLine.ySpeed-100, myLine.x, myLine.y);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x+50, myLine.y-50);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x-50, myLine.y+50);
    // line(myLine.x-myLine.xSpeed,myLine.y-myLine.ySpeed, myLine.x-50, myLine.y-50);

    lines[i].x -= xSpeed;
    lines[i].y -= ySpeed;
    lines[i].b -= 10;
  };


  colorH += Math.floor((Math.random() * 41) -20);
  // colorS += Math.floor((Math.random() * 21) -10);
  // colorB += Math.floor((Math.random() * 41) -10);
  if(colorH<0)colorH=0;
  else if(colorH>360)colorH=260;
  if(colorS<0)colorS=0;
  else if(colorS>100)colorS=100;
  frameCount++;

}
