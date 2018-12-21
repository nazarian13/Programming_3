var matrix = [];
var n = 80, m = 80;
var side = 50;

function setup() {

    for (var y = 0; y < m; y++) {
        matrix[y] = [x];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 3, 1, 1, 0, 0, 0, 1, 1, 0, 0, 4, 0, 0, 1, 1, 0, 0, 5, 0, 0]);
        }
    }

var Grass = require("./class.grass.js");
var GrassEater = require ("./class.grasseater.js");
var Depredador = require("./class.depredador.js");
var Hunter = require("./class.hunter.js");
var Destroyer = require("./class.destroyer.js");


    function draw (){
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
                matrix[y][x] = new Destroyer(x, y, 5);
            }
        }
    }
}
}

module.exports = matrix;