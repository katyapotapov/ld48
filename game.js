
function setupCanvas() {
    const canvas = document.getElementById('canvas');

    function resizeCanvas() {
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas, false);

    resizeCanvas();
}

function render() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    window.requestAnimationFrame(render);
}

function init() {
    setupCanvas();
    render();
}

window.addEventListener('load', init);

