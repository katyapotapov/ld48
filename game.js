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

function render() {
    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#000"); 
    console.log(mouseX, mouseY);

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    attachMouseListener();
    render();
}

window.addEventListener('load', init);

