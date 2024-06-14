function longestConsec(strarr, k) {
    if (k >= strarr.length || strarr.length === 0) {
        return "";
    }
    let arr = [];
    let res = "";
    for (let i = 0; i < strarr.length - 1; i++) {}
    let maxLength = arr.map((el) => el.length).sort((a, b) => b - a)[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === maxLength) {
            res = arr[i];
        }
    }
    return res;
}
console.log(
    longestConsec((["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
);
