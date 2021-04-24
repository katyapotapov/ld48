const CURSOR_Y = 200;
const CURSOR_COL = "#ff3392";

function drawCursor() {
    const bpm = 120;
    const bps = bpm / 60;

    const scaleFactor =
        Math.sin(Math.PI * 2 * bps * timeElapsedSeconds) * 0.1 + 1;

    const cursorCoords = [0, 0, 15, 50, 30, 0, 15, 20].map((elem, ind) =>
        ind % 2
            ? elem * scaleFactor + CURSOR_Y
            : (elem - 15) * scaleFactor + mouseX
    );

    fillLine(cursorCoords, CURSOR_COL, 2, true);
}

