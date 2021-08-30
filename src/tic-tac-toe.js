class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol === 'x' ? this.currentSymbol = 'o' : this.currentSymbol = 'x';
        }
    }

    isFinished() {
        return this.isDraw() || !!this.getWinner();
    }

    isGameOver() {
        if (
            this.matrix[0][0] === this.matrix[1][1] &&
            this.matrix[0][0] === this.matrix[2][2]
        ) {
            return this.matrix[0][0];
        }

        if (
            this.matrix[0][2] === this.matrix[1][1] &&
            this.matrix[0][2] === this.matrix[2][0]
        ) {
            return this.matrix[0][2];
        }

        for (let i = 0; i < 3; i++) {
            if (
                this.matrix[i][0] === this.matrix[i][1] &&
                this.matrix[i][0] === this.matrix[i][2]
            ) {
                return this.matrix[i][0];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                this.matrix[0][i] === this.matrix[1][i] &&
                this.matrix[0][i] === this.matrix[2][i]
            ) {
                return this.matrix[0][i];
            }
        }
        return null;
    }

    getWinner() {
        this.winner = this.isGameOver();
        return this.winner;
    }

    noMoreTurns() {
        return this.matrix.flat().every((item) => item !== null);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
