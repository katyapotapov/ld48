let canvas = null;
let ctx = null;

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

function render() {
    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#000"); 

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    render();
}

window.addEventListener('load', init);

