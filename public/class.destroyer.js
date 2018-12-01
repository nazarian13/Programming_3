class Destroyer {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
        this.acted = false;
    }

    getNewCoordinates() {
        this.directions = [];
        var i = 1;
        while (this.y + i < matrix.length && this.x + i < matrix[0].length) {
            this.directions.push([this.x + i, this.y + i]);
            i++;
            // this.directions,push([this.x-1, this. y-1]);
        }
        i = 0;
        while (this.x - i >= 0 && this.y + i < matrix[0].length) {
            this.directions.push([this.x - i, this.y - i]);
            // this.directions,push([this.x-1, this. y+1]);
            i++;
        }
        i = 0;
        while(this.x+i < matrix[0].length && this.y - i >= 0){
            this.directions.push([this.x + i, this.y - i]);
            i++;
        }
        i = 0;
        while(this.x-i >= 0 && this.y+i < matrix.length){
            this.directions.push([this.x - i, this.y + i]);
            i++;
        }
        // console.log(this.directions);
    }
    chooseCell(num) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == num) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x].index == num) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Destroyer(newX, newY, 5);
            this.multiply = 0;

        }
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

            var newCell = random(this.chooseCell(3, 4));
            if (newCell) {

                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;
                this.x = newX;
                this.y = newY;
                this.acted = true;
                this.energy++;
                if (this.energy >= 10) {
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