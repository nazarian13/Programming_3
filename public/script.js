var matrix = [];
var n = 80, m = 80;
var side = 50;

// var matrix = [
//     [1, 0, 0, 0, 0, 0, 0, 0,],
//     [0, 1, 2, 0, 0, 0, 0, 0,],
//     [0, 0, 1, 0, 0, 03, 0, 0,],
//     [0, 0, 0, 1, 0, 0, 0, 0,],
//     [0, 0, 0, 0, 1, 0, 4, 0,],
//     [0, 0, 0, 0, 0, 1, 0, 5,],
//     [0, 0, 0, 0, 0, 0, 1, 0,],
//     [0, 0, 0, 0, 0, 0, 0, 1,]
// ]
function setup() {

    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 3, 1, 1, 0, 0, 0, 1, 1, 0, 0, 4, 0, 0, 1, 1, 0, 0, 5, 0, 0]);
        }
    }
    createCanvas(500, 500);

    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = new Grass(x, y, 1);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = new GrassEater(x, y, 2);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = new Depredador(x, y, 3);
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = new Hunter(x, y, 4);
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = new Destroyer (x, y, 5);
            }
        }
    }
    console.log(matrix);

}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                matrix[y][x].mul();
            }
            else if (matrix[y][x].index == 2) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 3) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 4) {
                matrix[y][x].eat();
            }
            else if (matrix[y][x].index == 5) {
                matrix[y][x].eat();
            }
        }
    }

    background("#acacac");
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x].index == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x].index == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;

            }
            else if (matrix[y][x].index == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (matrix[y][x].index == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }

    }
}
