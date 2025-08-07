import { LOAD_FONT, TestResults, advanceToFrame, canvasStatus, checkBackgroundIsCalledInDraw, checkCanvasSize, getShapes, testSettingIsCalled } from "../../lib/test-utils.js";

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
    if (canvasStatus.preloadContents.length === 3 && canvasStatus.preloadContents[1].indexOf("noLoop();") >= 0) {
        TestResults.addFail("<code>preload()</code> is not implemented.");
    } else {
        TestResults.addPass("<code>preload()</code> is implemented.");
    }
    if (testSettingIsCalled(LOAD_FONT, false, false, true)) {
        TestResults.addPass("<code>loadFont()</code> is called in <code>preload()</code>.");
    } else {
        TestResults.addFail("<code>loadFont()</code> is not called in <code>preload()</code>. It should only be called in <code>preload()</code> to ensure that the fonts are fully loaded before they are used.");
    }
    checkBackgroundIsCalledInDraw();
    if (window.hasOwnProperty("keyPressed") || window.hasOwnProperty("keyReleased") || window.hasOwnProperty("keyTyped")) {
        TestResults.addPass("A keyboard event function is implemented.");
    } else {
        TestResults.addFail("No keyboard event function is implemented.");
    }
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);
