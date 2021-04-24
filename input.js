let mouseX = 0;
let mouseY = 0;

function attachMouseListener() {
    canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();

        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });
}

