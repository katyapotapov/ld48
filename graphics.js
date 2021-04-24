let canvas = null;
let ctx = null;

function fillRect(x, y, w, h, col = "#fff") {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
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


function setupCanvas() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas, false);

    resizeCanvas();
}

