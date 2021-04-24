
function init() {
    setupCanvas();
    attachMouseListener();
    initStars();

    render();
}

window.addEventListener("load", init);
