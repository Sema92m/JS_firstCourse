function incrementString(strng) {
    if (
        strng.replace(/[\D]/gi, "") === strng &&
        String(Number(strng)) === strng
    ) {
        return String(Number(strng) + 1);
    }
    let remNums = "";
    let mainPart = "";
    for (let i = strng.length - 1; i > 0; i--) {
        if (Number(strng[i]) || strng[i] === "0") {
            remNums = remNums + strng[i];
        } else {
            break;
        }
    }
    remNums = remNums.split("").reverse().join("");
    mainPart = strng.slice(0, strng.length - remNums.length);

    if (remNums[0] === "0") {
        remNums = String(+("10" + remNums) + 1).slice(2);
        return mainPart + remNums;
    }
    return mainPart + (Number(remNums) + 1);
}

console.log(incrementString("1"));
