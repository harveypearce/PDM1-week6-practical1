
const font1 = "Interactive Media"
let myFont
let myFont2
function setup(){
    createCanvas(600,600);
    currentFont = myFont
}
function preload(){
myFont = loadFont('assets/font1.ttf');
myFont2=loadFont('assets/Nosifer-Regular.ttf'); 

}
function draw(){
    background(100,200,0);
    fill(200,100,0);
    stroke(0,0,300);
    strokeWeight(50)
    textFont(currentFont);
    textSize(30);
    textAlign(CENTER);
    text(font1,300,300);
}
function mousePressed(){
    if(currentFont === myFont){
        currentFont = myFont2
    }
    else{
        currentFont = myFont
    }
}
