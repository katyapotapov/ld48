let canvas = null;
let ctx = null;

let mouseX = 0;
let mouseY = 0;

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

function render() {
    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#000"); 

    fillLine([
        0, 0,
        100, 100
    ], "#fff", 4);

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    attachMouseListener();
    render();
}

window.addEventListener('load', init);

