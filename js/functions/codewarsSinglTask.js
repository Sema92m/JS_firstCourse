snail = function (array) {
    if (array.flat().length === 0) {
        return [];
    }
    let res = [];
    let startCol = 0;
    let endCol = array.length - 1;
    let startRow = 0;
    let endRow = array.length - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            //-->
            res.push(array[startCol][i]);
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            //down
            res.push(array[i][endCol]);
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            // <--
            res.push(array[endRow][i]);
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            // ^
            res.push(array[i][startCol]);
        }
        startCol++;
    }
    return res;
};
const arr = [[]];
console.log(snail(arr));
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21,
//  16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
