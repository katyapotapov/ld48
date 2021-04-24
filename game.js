let canvas = null;
let ctx = null;

let mouseX = 0;
let mouseY = 0;

let lastFrameTime = new Date();
let timeElapsedSeconds = 0;

let starData = [];
let starData2 = [];

const CURSOR_Y = 200;
const CURSOR_COL = "#ff3392";

const STARS_X = 10;
const STARS_Y = 10;

const STAR_COL = "#ffbb32";
const STAR_2_COL = "#e66c06";

function setupCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas, false);

    resizeCanvas();
}

function fillRect(x, y, w, h, col = "#fff") {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
}

function attachMouseListener() {
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });
}

// Data must be supplied as [x0, y0, x1, y1, x2, y2, ...]
function fillLine(data, col = "#fff", thickness = 1, closePath = false) {
    ctx.strokeStyle = col;
    ctx.lineWidth = thickness;

    ctx.beginPath();

    for (let i = 0; i < data.length; i += 2) {
        const x = data[i];
        const y = data[i + 1];

        if (i > 0) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, y);
        }
    }

    if (closePath) {
        ctx.closePath();
    }

    ctx.stroke();
}

function generateStarData(xCount, yCount) {
    let data = [];
    
    for(let y = 0; y < yCount; ++y) {
        for(let x = 0; x < xCount; ++x) {
            data.push(x * (canvas.width / xCount) + Math.random() * 100 - 50 + 40);
            data.push(y * (canvas.height / yCount) + Math.random() * 100 - 50); 
        }
    }

    return data;
}

function drawStarLayer(data, speed, col) {
    for(let i = 0; i < data.length; i += 2) {
        const x = data[i];

        let y = Math.round(data[i + 1] - timeElapsedSeconds * speed);

        y = ((y % canvas.height) + canvas.height) % canvas.height;

        fillLine([
            x, y,
            x, y + 10
        ], col);
    }
}

function drawStars() {
    drawStarLayer(starData2, 600, STAR_2_COL);
    drawStarLayer(starData, 1000, STAR_COL);
}

function drawCursor() {
    const cursorCoords = [0, 0, 15, 50, 30, 0, 15, 20].map((elem, ind) =>
        ind % 2 ? elem + CURSOR_Y : elem + mouseX - 15
    );

    fillLine(cursorCoords, CURSOR_COL, 2, true);
}

function render() {
    // Update elapsed time
    const curTime = new Date();

    timeElapsedSeconds += (curTime - lastFrameTime) / 1000;
    lastFrameTime = curTime;

    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#122d68");

    drawStars();

    drawCursor();

    console.log(mouseX);
    console.log(mouseY);

    console.log(timeElapsedSeconds);

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    attachMouseListener();
    
    starData = generateStarData(STARS_X, STARS_Y);
    starData2 = generateStarData(Math.floor(STARS_X * 1.25), Math.floor(STARS_Y * 1.25));

    render();
}

window.addEventListener("load", init);
