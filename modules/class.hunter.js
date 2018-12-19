var LivingCreature = require("./class.livingcreature");

class Hunter {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.acted = false;
        this.directions = [];

    }
    getNewCoordinates() {
        this.directions = [];
        for (var xx = 0; xx < matrix[0].length; xx++) {
            if (xx != this.x) {
                this.directions.push([xx, this.y]);
            }
        }
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push([x, y]);
                }
                else if (matrix[y][x].index == num) {
                    found.push([x, y]);
                }
            }
        }
        return found;
    }
    move() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;

            }
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(3));
            if (newCell) {
 
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy++;
                if (this.energy >= 16) {
                    this.mul();
                    this.energy = 6

                }
            }
            else {
                this.move();

            }

        }

    }
    die() {
        matrix[this.y][this.x] = 0;


    }
}
