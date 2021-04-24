let canvas = null;
let ctx = null;

let mouseX = 0;
let mouseY = 0;

let lastFrameTime = new Date();
let timeElapsedSeconds = 0;

const CURSOR_Y = 200;
const CURSOR_W = 10;
const CURSOR_H = 10;
const CURSOR_COL = "#fff";

function setupCanvas() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
}

function fillRect(x, y, w, h, col = "#fff") {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
}

function drawCursor() {
    fillRect(mouseX, CURSOR_Y, CURSOR_W, CURSOR_H, CURSOR_COL);
}

function attachMouseListener() {
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });
}

// Data must be supplied as [x0, y0, x1, y1, x2, y2, ...]
function fillLine(data, col = "#fff", thickness = 1) {
    ctx.strokeStyle = col;
    ctx.lineWidth = thickness;

    ctx.beginPath();

    for(let i = 0; i < data.length; i += 2) {
        const x = data[i];
        const y = data[i + 1];

        if(i > 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }

    ctx.stroke();
}

function drawStars() {
}

function render() {
    // Update elapsed time
    const curTime = new Date();

    timeElapsedSeconds += (curTime - lastFrameTime) / 1000;
    lastFrameTime = curTime;

    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#000"); 
    drawCursor();

    console.log(timeElapsedSeconds);

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    attachMouseListener();
    render();
}

window.addEventListener('load', init);

