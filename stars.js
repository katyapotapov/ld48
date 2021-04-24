let starData = [];
let starData2 = [];

const STARS_X = 10;
const STARS_Y = 10;

const STAR_COL = "#ffbb32";
const STAR_2_COL = "#e66c06";

function generateStarData(xCount, yCount, thickness) {
    let data = [];

    for (let y = 0; y < yCount; ++y) {
        for (let x = 0; x < xCount; ++x) {
            data.push({
                x: x * (canvas.width / xCount) + Math.random() * 100 - 50 + 40,
                y: y * (canvas.height / yCount) + Math.random() * 100 - 50,
                t: thickness,
            });
        }
    }

    return data;
}

function initStars() {
    starData = generateStarData(STARS_X, STARS_Y, 1);
    starData2 = generateStarData(
        Math.floor(STARS_X * 1.25),
        Math.floor(STARS_Y * 1.25),
        1
    );
}

function drawStarLayer(data, speed, col) {
    for (const star of data) {
        const x = star.x;

        let y = Math.round(star.y - timeElapsedSeconds * speed);

        y = ((y % canvas.height) + canvas.height) % canvas.height;

        fillLine([x, y, x, y + 10], col, star.t);
    }
}

function drawStars() {
    drawStarLayer(starData2, 600, STAR_2_COL);
    drawStarLayer(starData, 1000, STAR_COL);
}
