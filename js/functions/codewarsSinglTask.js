function orderWeight(strng) {
    let str = strng.replace(/\s+/g, " ").trim().split(" ");
    if (str.join("") === "") {
        return "";
    }
    const arr = str
        .map((el) =>
            el
                .split("")
                .map((el) => +el)
                .reduce((a, b) => a + b)
        )
        .sort((a, b) => a - b);
    const sortArr = str.sort();
    // console.log(["sortArr", sortArr]);
    // console.log(["arr", arr]);
    //
    for (let i = 0; i < sortArr.length; i++) {
        let num = +[sortArr[i]].map((el) =>
            el.split("").reduce((a, b) => +a + +b)
        )[0];
        // console.log(typeof num);
        if (arr.includes(num)) {
            arr[arr.indexOf(num)] = sortArr[i];
        }
    }
    // console.log(sortArr);
    return arr.join(" ");
}
console.log(orderWeight("112 32 6 33 42 7"));
