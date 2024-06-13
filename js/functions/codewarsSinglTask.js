function isSolved(board) {
    let res = 0;
    let arr = [];
    let diag1 = [board[0][0], board[1][1], board[2][2]];
    let diag2 = [board[2][0], board[1][1], board[0][2]];

    console.log([diag1, diag2]);
    if (res > 0) {
        return res;
    }
    function run(array) {
        console.log(array);
        if (array.length == 0) {
            return;
        }
        if (array.every((el) => el === 1)) {
            console.log([arr, "1"]);
            arr = [];
            return (res = 1);
        } else if (array.every((el) => el === 2)) {
            console.log([arr, "2"]);
            arr = [];
            return (res = 2);
        }
        arr = [];
        // return 0;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            arr.push(board[i][j]);
        }
        console.log([arr, "lewo-prawo"]);

        run(arr);
        for (let j = 0; j < board.length; j++) {
            arr.push(board[j][i]);
        }
        console.log([arr, "werch-niz"]);
        run(arr);

        if (res > 0) {
            return res;
        }
    }
    run(diag1);
    run(diag2);
    return res;
}
console.log(
    isSolved([
        [2, 1, 5],
        [1, 2, 2],
        [1, 1, 2],
    ])
);
console.log(
    [
        [2, 1, 5],
        [1, 2, 2],
        [1, 1, 2],
    ].flat()
);
