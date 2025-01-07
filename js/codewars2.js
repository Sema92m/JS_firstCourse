JavaScript;

function balancedNum(number) {
    console.log(number);
    if (String(number).length < 3) {
        return "Balanced";
    }
    const arr = String(number);
    let arr1 = "";
    let arr2 = "";
    if (arr.length % 2 === 0) {
        arr1 = arr.slice(0, arr.length / 2 - 1);
        arr2 = arr.slice(arr.length / 2 + 1);
        arr1 = arr1
            .split("")
            .map((el) => Number(el))
            .reduce((a, b) => a + b);
        arr2 = arr2
            .split("")
            .map((el) => Number(el))
            .reduce((a, b) => a + b);
    } else {
        arr1 = arr.slice(0, arr.length / 2);
        arr2 = arr.slice(arr.length / 2 + 1);
        arr1 = arr1
            .split("")
            .map((el) => Number(el))
            .reduce((a, b) => a + b);
        arr2 = arr2
            .split("")
            .map((el) => Number(el))
            .reduce((a, b) => a + b);
    }

    return arr1 === arr2 ? "Balanced" : "Not Balanced";
}

function maxProduct(numbers, size) {
    return numbers
        .sort((a, b) => b - a)
        .slice(0, size)
        .reduce((a, b) => a * b);
}
console.log(maxProduct([10, 8, 7, 9], 3));
