const latin = "Lorem ipsum dolor sit amet"
let myFont
function setup(){
    createCanvas(600,600);

}
function preload(){
    myFont = loadFont('assets/BitCountGrid.ttf');
}
function draw(){
    background(0,100,0);
    stroke(355,0,0);
    fill(0,0,200);
    textFont(myFont);
    textSize(50);
    textAlign(RIGHT,BOTTOM);
    text(latin,300,300,250,300);
}