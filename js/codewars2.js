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

//7 kyu 16+18=214
function add(num1, num2) {
    const arr1 = String(num1)
        .split("")
        .map((el) => Number(el));
    const arr2 = String(num2)
        .split("")
        .map((el) => Number(el));
    let str = [];
    let res = [arr1, arr2].sort((a, b) => b.length - a.length);

    for (let i = res[0].length; i >= 0; i--) {
        if (res[1][i]) console.log(res[0][i]);
    }
    return str;
}
console.log(add(123, 12));

function sumOfIntegersInString(s) {
    return s
        .replace(/[\D]/gi, ",")
        .split(",")
        .reduce((acc, el) => acc + Number(el), 0);
}
console.log(sumOfIntegersInString("12.4"));

function pattern(n) {
    var output = "";
    for (let i = 1; i <= n; i++) {
        output += String(i).repeat(i);
        if (i !== n) {
            output += "\n";
        }
    }
    return output;
}
console.log(pattern(1));

var splitInParts = function (s, partLength) {
    return s.match(new RegExp(`.{1,${partLength}}`, "g")).join(" ");
};

console.log(splitInParts("supercalifragilisticexpialidocious", 3));

/*  Explanation:
Regex .{1,3}:

. matches any character.
{1,3} specifies that the match should be between 1 and 3 characters.
match:

Splits the string into an array of substrings, each up to 3 characters long.
join(' '):

Joins the array of substrings with a space (' ') to form the desired output.
*/

function myCrib(n) {
    const roofHeight = n + 1;
    let res = "";
    for (let i = 0; i < roofHeight; i++) {
        if (i === roofHeight - 1) {
            res +=
                ` `.repeat(roofHeight - i - 1) +
                `/` +
                `${"_".repeat(i * 2)}` +
                `\\` +
                "\n";
            break;
        }
        res +=
            ` `.repeat(roofHeight - i - 1) +
            `/` +
            `${" ".repeat(i * 2)}` +
            `\\` +
            ` `.repeat(roofHeight - i - 1) +
            "\n";
    }
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            res += `|` + `${"_".repeat(n * 2)}` + `|`;
            break;
        }
        res += `|` + `${" ".repeat(n * 2)}` + `|` + "\n";
    }
    return res;
}
console.log(myCrib(3));

function yesNo(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
            res.push(arr[i]);
            i++;
        }
    }
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i + 1]) {
            res.push(arr[i]);
            i++;
        }
    }
    return res;
}
console.log(yesNo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function censor(sentence) {
    const strLower = sentence.toLowerCase().split(" ");
    const str = sentence.split(" ");
    const words1 = ["pancakes", "flapjacks", "slapjacks", "hotcakes"];
    const words2 = ["waffles", "crepes", "blintzes"];
    const words3 = [
        "syrup",
        "honey",
        "jam",
        "butter",
        "chocolate",
        "margarine",
        "pancakes",
        "flapjacks",
        "slapjacks",
        "hotcakes",
    ];
    if (!str.includes("waffles")) {
        for (let i = 0; i < words3.length; i++) {
            if (strLower.includes(words3[i])) {
                str[strLower.indexOf(words3[i])] = "*".repeat(words3[i].length);
            }
        }
    } else {
        for (let i = 0; i < words3.length; i++) {
            if (strLower.includes(words3[i])) {
                str[strLower.indexOf(words3[i])] =
                    "**" + str[strLower.indexOf(words3[i])] + "**";
            }
        }
    }
    for (let i = 0; i < words1.length; i++) {
        if (strLower.includes(words1[i])) {
            str[strLower.indexOf(words1[i])] = "*".repeat(words1[i].length);
        }
    }
    for (let i = 0; i < words2.length; i++) {
        if (strLower.includes(words2[i])) {
            str[strLower.indexOf(words2[i])] =
                "**" + str[str.indexOf(words2[i])] + "**";
        }
    }

    return str.join(" ");
}
console.log(
    censor("The debate between pancakes and waffles is as sweet as honey")
);

function vowel2index(str) {
    const letters = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return str
        .split("")
        .map((curr, index) =>
            letters.includes(curr) ? (curr = index + 1) : curr
        )
        .join("");
    //code me
}
console.log(vowel2index("this is my string"));

// function vowel2index(str) {
//     return str.replace(/[aeiou]/gi, (m, i) => i + 1);
// }
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name;
    };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let num1 = 0;
    let num2 = 0;
    // num1 = fighter1.health / fighter2.damagePerAttack;
    // num2 =  (fighter2.health - fighter1.damagePerAttack)  / fighter1.damagePerAttack
    if (fighter1.name === firstAttacker) {
        num1 = fighter1.health / fighter2.damagePerAttack;
    } else {
        num2 =
            (fighter2.health - fighter1.damagePerAttack) /
            fighter1.damagePerAttack;
    }

    return num1 > num2 ? fighter1.name : fighter2.name;
}
console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
);
