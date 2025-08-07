import { TestResults, advanceToFrame, canvasStatus, getShapes } from "../../lib/test-utils.js";

/**
 * A hacky solution to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) {
        clearInterval(loadTimer);
        runTests(canvases[0]);
    }
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    const resultsDiv = document.getElementById("results");
    const frame1 = getShapes().filter(s => s.type === TEXT);
    if (frame1.length !== 1) {
        TestResults.addFail(`Expected one text object. Found ${frame1.length}.`);
    } else {
        let currentFrameRate = canvasStatus.frameRate;
        if (currentFrameRate === Infinity) {
            currentFrameRate = 60;
        }
        advanceToFrame(Math.floor(currentFrameRate / 2));
        const frame2 = getShapes().filter(s => s.type === TEXT);
        if (frame2.length === 0) {
            TestResults.addFail(`No text was found at frame ${frameCount}. Unable to run any more tests.`);
        } else {
            const oldMsg = frame1[0].msg;
            const newMsg = frame2[frame2.length - 1].msg;
            if (newMsg.length === oldMsg.length + 1) {
                TestResults.addPass("The displayed message increases by one character after half a second.");
            } else {
                TestResults.addFail(`Expected the displayed message to increase in length by 1 character after half a second. At the start of the sketch, the message is ${oldMsg.length} characters long and after half a second it is ${newMsg.length} characters long. Check that the animation speed is implemented correctly and that the length of the displayed message is updated before the text is drawn to the screen, not after.`)
            }
        }
    }
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
