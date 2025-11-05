

const hello = "Hello world"
let myFont;
let index;

function setup(){createCanvas(600,600);
frameRate(5);
}

function draw(){
    background(100,0,0);
    fill(0,100,0)
    textSize(50);
    textFont(myFont)
    textAlign(CENTER);
if(index <hello.length){
    index += 1
}
else{
    index =0
}
text(hello.slice(0,index),width/2,height/2);
}
function preload(){
    myFont = loadFont('assets/Nosifer-Regular.ttf');
}


