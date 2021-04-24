let lastFrameTime = new Date();
let timeElapsedSeconds = 0;

function render() {
    // Update elapsed time
    const curTime = new Date();

    timeElapsedSeconds += (curTime - lastFrameTime) / 1000;
    lastFrameTime = curTime;

    // Fill background
    fillRect(0, 0, canvas.width, canvas.height, "#122d68");

    drawStars();
    drawCursor();

    window.requestAnimationFrame(render);
}

