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

function strong(n) {
    const factorial = (num) => {
        let res = 1;
        while (num > 1) {
            res *= num;
            num--;
        }
        return res;
    };
    let subRes = 0;
    const digits = String(n)
        .split("")
        .map((n) => Number(n));
    for (let i = 0; i < digits.length; i++) {
        subRes += factorial(digits[i]);
    }
    return subRes === n ? "STRONG!!!!" : "Not Strong !!";
}
console.log(strong(145));

function maxTriSum(numbers) {
    console.log(numbers);
    return [...new Set(numbers)]
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((a, b) => a + b, 0);
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));

function pairs(ar) {
    let counter = 0;
    for (let i = 0; i < ar.length; i++) {
        if (Math.abs(ar[i] - ar[i + 1]) === 1) {
            counter += 1;
        }
        ++i;
    }
    return counter;
}
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));

function review(height, ornaments, tree) {
    let str = "";
    let counter = 1;
    let maxWidth = height * 2 - 1;
    for (let i = 0; i < height; i++) {
        str +=
            " ".repeat((maxWidth - counter) / 2) +
            "*".repeat(counter) +
            " ".repeat((maxWidth - counter) / 2) +
            "\n";
        counter = counter + 2;
    }
    str += " ".repeat(maxWidth / 2) + "|" + " ".repeat(maxWidth / 2);

    return str;
}
console.log(review(5, "yes"));

function evenOrOdd(n) {
    if (typeof n !== "number") {
        return n[0] % 2 !== 0 ? "Odd" : "Even";
    }
    return n % 2 !== 0 ? "Odd" : "Even";
}

console.log(typeof evenOrOdd[0]);

function encode(str, n) {
    const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const res = [];
    const numArr = String(n)
        .split("")
        .map((el) => Number(el));
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        res.push(letters.indexOf(str[i]) + 1 + numArr[counter]);
        counter++;
        if (counter >= numArr.length) {
            counter = 0;
        }
    }
    return res;
}
console.log(encode("scout", 1939));

function disariumNumber(n) {
    const arr = String(n)
        .split("")
        .reduce((acc, digit, idx) => acc + Math.pow(Number(digit), idx + 1), 0);

    return arr === n ? "Disarium !!" : "Not !!";
}
console.log(disariumNumber(89));

function add(num1, num2) {
    const arr1 = String(num1)
        .split("")
        .map((el) => Number(el));
    const arr2 = String(num2)
        .split("")
        .map((el) => Number(el));
    let str = [];
    let res = [arr1, arr2].sort((a, b) => b.length - a.length);
    console.log(res);
    for (let i = 0; i < res[0].length; i++) {
        if (res[1][i]) {
            str.push(res[0][i] + res[1][i]);
        } else {
            str.push(res[0][i]);
        }
    }
    return str.join("");
}
console.log(add(16, 1));
