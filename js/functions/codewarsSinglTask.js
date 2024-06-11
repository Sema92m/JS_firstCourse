function isSolved(board) {
    let res = 0;
    let arr = [];
    function run(array) {
        if (array.every((el) => el === 1)) {
            return (res = 1);
        } else if (array.every((el) => el === 2)) {
            return (res = 2);
        }
        return 0;
    }
    for (let i = 0; i < board.length; i++) {
        run(arr);
        for (let j = 0; j < board[i].length; j++) {
            arr.push(board[j][i]);
        }
        run(arr);
        arr = [];
        for (let j = 0; j < board.length; j++) {
            arr.push(board[j][i]);
            i++;
        }
        run(arr);
        arr = [];
        for (let j = board.length - 1; j >= 0; j--) {
            arr.push(board[j][i]);
            i++;
        }
        run(arr);
    }
    return res;
}
console.log(
    isSolved([
        [2, 0, 2],
        [2, 1, 1],
        [1, 1, 2],
    ])
);
