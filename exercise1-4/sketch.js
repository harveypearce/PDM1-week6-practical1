const KEY_WIDTH = 50;
const SPACE_BAR_WIDTH = KEY_WIDTH * 3 + 20;
let keys = [
    { name: "Q", x: 5, y: 420 }, { name: "W", x: 65, y: 420},
    { name: "E", x: 125, y: 420}, { name: "R", x: 185, y: 420},
    { name: "T", x: 245, y: 420}, { name: "Y", x: 305, y: 420},
    { name: "U", x: 365, y: 420}, { name: "I", x: 425, y: 420},
    { name: "O", x: 485, y: 420}, { name: "P", x: 545, y: 420},
    { name: "A", x: 30, y: 480}, { name: "S", x: 90, y: 480},
    { name: "D", x: 150, y: 480}, { name: "F", x: 210, y: 480},
    { name: "G", x: 270, y: 480}, { name: "H", x: 330, y: 480},
    { name: "J", x: 390, y: 480}, { name: "K", x: 450, y: 480},
    { name: "L", x: 510, y: 480}, { name: "Z", x: 5, y: 540}, 
    { name: "X", x: 65, y: 540}, { name: "C", x: 125, y: 540},
    { name: "V", x: 185, y: 540}, { name: "B", x: 245, y: 540},
    { name: "N", x: 305, y: 540}, { name: "M", x: 365, y: 540}, 
    { name: " ", x: 425, y: 540}
];

function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255);
    drawKeyboard();
}

/**
 * Draws the keyboard
 */
function drawKeyboard() {
    for (let k of keys) {
        if (k.name === " ") {
            rect(k.x, k.y, SPACE_BAR_WIDTH, KEY_WIDTH);
        } else {
            square(k.x, k.y, KEY_WIDTH);
        }
        text(k.name, k.x, k.y, KEY_WIDTH, KEY_WIDTH);
    }
}