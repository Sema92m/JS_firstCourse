// 7 kyu
// Area of an arrow

function arrowArea(a, b) {
    return (a * 0.5 * b) / 2;
}
console.log(arrowArea(7, 6));
(a * b) / 4;

// 7 kyu
// Divide and Conquer
function divCon(x) {
    let a = x.filter((item) => typeof item === "number");
    let b = x.filter((item) => typeof item === "string");
    if (a.length > 0 && b.length > 0) {
        return a.reduce((a, b) => a + b) - b.reduce((a, b) => +a + +b);
    }
    if (a.length < 0 && b.length < 0) {
        return 0;
    }
    if (a.length > 0) {
        return a.reduce((a, b) => a + b);
    }
    if (b.length > 0) {
        return -b.reduce((a, b) => +a + +b);
    }
}
console.log(divCon([2, 5, 3]));
return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
);

// 7 kyu
// Number of People in the Bus

var number = function (busStops) {
    return;
};

number([
    [10, 0],
    [3, 5],
    [5, 8],
]);

// 7 kyu
// Find the divisors!

function divisors(integer) {
    for (let i = 1; i < integer; i++) {
        if (integer / i == -1) continue;
        console.log(i);
    }
}
divisors(12);

// 7 kyu
// The highest profit wins!

function minMax(arr) {
    if (arr.length >= 2) {
        return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
    }
    if (arr.length == 1) {
        return [...arr, ...arr];
    }
}
console.log(minMax([1, 2, 3, 4, 5]));
return [Math.min(...arr), Math.max(...arr)];

// 7 kyu
// Sum of the first nth term of Series

function SeriesSum(n) {
    return n.toFixed(2);
}
console.log(SeriesSum(1));

// 7 kyu
// Remove the minimum

function removeSmallest(numbers) {
    // let a = Math.min(...numbers);
    return numbers.filter((e) => e != Math.min(...numbers));
}
console.log(removeSmallest([1, 2, 3, 4, 1, 5]));

// 7 kyu
// Money, Money, Money

function nbYear(principal, interest, tax, desired) {
    let year = 0;
    while (principal < desired) {
        year++;
        principal =
            principal + principal * interest - principal * interest * tax;
    }
    return year;
}
console.log(nbYear(1000, 0.05, 0.18, 1100));

// 7 kyu
// Sort Numbers

function solution(nums) {
    return nums !== null && nums.length > 0 ? nums.sort((a, b) => a - b) : [];
}
console.log(solution(null));
return (nums || []).sort(function (a, b) {
    return a - b;
});

function head(arr) {
    return arr.slice(0, 1).join("") * 1;
}
function tail(arr) {
    return arr.slice(1);
}

function init(arr) {
    return arr.slice(0, arr.length - 1);
}

function last(arr) {
    return arr.slice(-1).join("") * 1;
}
console.log(head([1, 2, 3, 4, 5]));
console.log(tail([1, 2, 3, 4, 5]));
console.log(init([1, 2, 3, 4, 5]));
console.log(last([1, 2, 3, 4, 5]));
function head(a) {
    return a[0];
}

function last(a) {
    return a[a.length - 1];
}

function init(a) {
    return a.slice(0, -1);
}

function tail(a) {
    return a.slice(1);
}

function basicOp(operation, value1, value2) {
    return value1 + "" + operation + (value2 + "");
}

console.log(basicOp("+", 4, 7));

function printArray(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            result += array[i];
            break;
        }
        result += array[i] + ",";
    }
    return result;
}

console.log(printArray(["h", "o", "l", "a"]));

function rentalCarCost(d) {
    let amount = d * 40;
    if (d < 3) {
        return amount;
    } else if (d >= 3 && d < 7) {
        return amount - 20;
    } else if (d >= 7) {
        return amount - 50;
    }
}

console.log(rentalCarCost(d));

function getMiddle(s) {
    if (s.length === 0) {
        return "";
    }
    if (s.length === 1) {
        return s[0];
    }
    if (s.length % 2 === 0) {
        return s[s.length / 2 - 1] + s[s.length / 2];
    }
    if (s.length % 2 === 1) {
        return s[(s.length - 1) / 2];
    }
}
console.log(getMiddle("testing"));
return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

function array(arr) {
    if (arr.length <= 2) {
        return null;
    }
    return arr.split(",").slice(1, -1).join(" ") || null;
}
console.log(array(""));

// function array(arr) {
//   return arr.split(",").slice(1, -1).join(" ").length < 1 ? null || arr.split(",").slice(1, -1).join(" ").length
// }
// console.log(array(''));
// return arr.split(",").slice(1,-1).join(" ") || null;

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(/* Insert your parameters here */) {
        super(/* Make a call to the parent class's constructor with the correct arguments */);
    }
}

class Cat extends Animal {}

class Dog extends Animal {}

function prefill(n, v) {
    let res = [];
    if (typeof n !== "number" || typeof n !== "string") {
        return `${n} is invalid`;
    }
    if (n === 0 || n === "0") {
        return [];
    }
    if (!v) {
        return [undefined];
    }
    // if (parseFloat(n) !== +n || parseFloat(n) < 0) {
    //     return `${n} is invalid`;
    // }
    for (let i = 1; i <= +n; i++) {
        res.push(v);
    }
    return res;
}
console.log(prefill("3", 5));

console.log(typeof 1);

var maxRedigit = function (num) {
    return num <= 99 || num > 999
        ? null
        : +String(num)
              .split("")
              .sort((a, b) => b - a)
              .join("");
};
console.log(maxRedigit(1480));

function maskify(c) {
    const newStr = c.slice(0, -4).replace(/./g, "#") + c.slice(-4) || c;
    return newStr;
}
console.log(maskify("4556364607935616"));

function DNAStrand(dna) {
    const result = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result.push("T");
        } else if (dna[i] === "T") {
            result.push("A");
        } else if (dna[i] === "C") {
            result.push("G");
        } else if (dna[i] === "G") {
            result.push("C");
        }
    }
    return result.join("");
}

console.log(DNAStrand("ATTGC"));

function arithmetic(a, b, operator) {
    if (operator === "add") {
        return a + b;
    }
    if (operator === "subtract") {
        return a - b;
    }
    if (operator === "multiply") {
        return a * b;
    }
    if (operator === "divide") {
        return a / b;
    }
}

console.log(arithmetic(a, b, operator));

var Calculator = {
    average: function () {
        return [...arguments];
    },
};

console.log(Calculator.average());

function whoseBicycle(diary1, diary2, diary3) {
    const ageTable = {
        firstSonAge: 14,
        secondSonAge: 9,
        thirdSonAge: 8,
    };

    function averageMark(diary) {
        return (
            Object.values(diary).reduce((acc, num) => acc + num) /
            Object.values(diary).length
        );
    }

    const averageMark1 = averageMark(diary1);
    const averageMark2 = averageMark(diary2);
    const averageMark3 = averageMark(diary3);

    if (averageMark3 >= averageMark2 && averageMark3 >= averageMark1) {
        return "I need to buy a bicycle for my third son.";
    } else if (averageMark2 >= averageMark3 && averageMark2 > averageMark1) {
        return "I need to buy a bicycle for my second son.";
    } else {
        return "I need to buy a bicycle for my first son.";
    }
}

console.log(
    whoseBicycle(
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 8,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 5,
            physics: 5,
            geography: 9,
            chemistry: 10,
        }
    )
);

const array1 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, [12]]]];
const result = [];

const flatternArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            flatternArray(arr[i]);
        } else result.push(arr[i]);
    }
    return result;
};
console.log(flatternArray(array1));

function sumTriangularNumbers(n) {
    if (n <= 0) {
        return 0;
    }
    let res = 0;
    for (let i = 1; i < n + 1; i++) {
        res += (i * (i + 1)) / 2;
    }
    return res;
}

console.log(sumTriangularNumbers(4));

var myArray = [1, 2, 3];
function factory(x) {
    return function a(arr) {
        return arr.map((el) => el * x);
    };
}
var fives = factory(5);
console.log(fives(myArray));

function absentVowel(x) {
    if (!x.includes("a")) {
        return 0;
    } else if (!x.includes("e")) {
        return 1;
    } else if (!x.includes("i")) {
        return 2;
    } else if (!x.includes("o")) {
        return 3;
    } else if (!x.includes("u")) {
        return 4;
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"));

// function absentVowel(x) {
//   switch (true) {
//     case !x.includes('a'):
//       return 0;
//     case !x.includes('e'):
//       return 1;
//     case !x.includes('i'):
//       return 2;
//     case !x.includes('o'):
//       return 3;
//     case !x.includes('u'):
//       return 4;
//       }
// }

function isIsogram(str) {
    let a = str.toLowerCase().split("").sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isIsogram(""));

function nicknameGenerator(name) {
    if (name.length <= 3) {
        return "Error: Name too short";
    }
    if (name.length === 4 && consonants.includes(name[2])) {
        return name;
    }
    const consonants = "aeiuo";
    if (consonants.includes(name[2])) {
        return name.slice(0, 4);
    } else {
        return name.slice(0, 3);
    }
}
console.log(nicknameGenerator("Kqqt"));

function explode(s) {
    let result = "";
    // const arr = s.replace(/0/g,'')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            s[i] = "";
        }
        result += s[i].repeat(+s[i]);
    }
    return result;
}

console.log(explode("31020"));

function highAndLow(numbers) {
    const str = numbers.split(" ").sort((a, b) => b - a);
    return `${str[0]} ${str[str.length - 1]}`;
}
console.log(highAndLow("1 2 3 4 5"));

function toJadenCase(str) {
    let a = str.split(" ");
    let s = "";
    for (let i = 0; i < a.length; i++) {
        s += a[i][0].toUpperCase() + a[i].substr(1) + " ";
    }
    return s.trimEnd();
}
console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));
String.prototype.toJadenCase = function () {
    let a = this.split(" ");
    let s = "";
    for (let i = 0; i < a.length; i++) {
        s += a[i][0].toUpperCase() + a[i].substr(1) + " ";
    }
    return s.trim().trimEnd();
};

function disemvowel(str) {
    const vowels = /[aeuio]/gi;
    return str.replace(vowels, "");
}
console.log(disemvowel("This website is for losers LOL!"));

function brightest(colors) {
    let col = colors.forEach();
}
console.log(brightest(["#001000", "#000000"]));

function convertHEXtoRGB(color) {
    color = color.toUpperCase();
    const R = color.slice(1, 3);
    const G = color.slice(3, 5);
    const B = color.slice(5, 7);

    function rgb(color) {
        for (let i = 1; i < color.length; i++) {
            if (color[i] === "A") {
                color[i] = 10;
            } else if (color[i] === "B") {
                color[i] = 11;
            } else if (color[i] === "C") {
                color[i] = 12;
            } else if (color[i] === "D") {
                color[i] = 13;
            } else if (color[i] === "E") {
                color[i] = 14;
            } else if (color[i] === "F") {
                color[i] = 15;
            }
            return +color[0] + +color[1];
        }
    }

    return rgb(R);
}

console.log(convertHEXtoRGB("#ABCDEF"));

function myLanguages(results) {
    const result = [];
    const sortObj = Object.entries(results).sort((a, b) => b[1] - a[1]);
    // [ [ 'Ruby', 80 ], [ 'Python', 65 ], [ 'Java', 10 ] ]
    for (let i = 0; i < sortObj.length; i++) {
        if (sortObj[i][1] >= 60) {
            result.push(sortObj[i][0]);
        }
    }
    return result;
}
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

function duplicateEncode(word) {
    const newArr = word.toLowerCase().split("");
    const result = [];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr.filter((el) => el === newArr[i]).length > 1) {
            result.push(")");
        } else {
            result.push("(");
        }
    }
    return result.join("");
}

console.log(duplicateEncode("OOOyO)kOPO"));

function nthFibo(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2 || n === 3) {
        return 1;
    } else if (n === 4) {
        return 2;
    } else if (n > 4) {
        return (n = nthFibo(n - 1) + nthFibo(n - 2));
    }
}
console.log(nthFibo(10));

function deepCount(a) {
    let count = 0;
    function flatternArray(a) {
        for (let i = 0; i < a.length; i++) {
            count++;
            if (typeof a[i] !== "number" && typeof a[i] !== "string") {
                flatternArray(a[i]);
            }
        }
        return count;
    }
    return flatternArray(a);
}
console.log(deepCount(["x", "y", ["z"]]));

// --------------------------

function countYears(s) {
    const years = s / 31536000;
    if (years < 1) {
        return "";
    } else if (years >= 1 && years < 2) {
        return "1 year";
    } else if (years >= 2) {
        return `${Math.floor(years)} years`;
    }
}
console.log(countYears());

function countDays(s) {
    const years = s % 31536000;
    const days = Math.floor(years / 86400);
    if (days < 1) {
        return "";
    } else if (days >= 1 && days < 2) {
        return "1 day";
    } else if (days >= 2) {
        return `${days} days`;
    }
}
console.log(countDays(32536000));

function countHours(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = Math.floor(days / 3600);

    if (hours < 1) {
        return "";
    } else if (hours >= 1 && hours < 2) {
        return "1 hour";
    } else if (hours >= 2) {
        return `${hours} hours`;
    }
}
console.log(countHours(35536000));

function countMinutes(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = days % 3600;
    const minutes = Math.floor(hours / 60);
    if (minutes < 1) {
        return "";
    } else if (minutes >= 1 && minutes < 2) {
        return "1 minute";
    } else if (minutes >= 2) {
        return `${minutes} minutes`;
    }
}
console.log(countMinutes(35539867));

function countSeconds(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = days % 3600;
    const minutes = hours % 60;
    const sec = minutes;
    return [years, days, hours, minutes, sec];
    if (sec < 1) {
        return "";
    } else if (sec >= 1 && sec < 2) {
        return "1 second";
    } else if (sec >= 2) {
        return `${sec} seconds`;
    }
}
console.log(countSeconds(71));

function formatDuration(seconds) {
    function countYears(seconds) {
        const years = seconds / 31536000;
        if (years < 1) {
            return "";
        } else if (years >= 1 && years < 2) {
            return "1 year";
        } else if (years >= 2) {
            return `${Math.floor(years)} years`;
        }
    }
    function countDays(seconds) {
        const days = Math.floor((seconds % 31536000) / 86400);
        if (days < 1) {
            return "";
        } else if (days >= 1 && days < 2) {
            return "1 day";
        } else if (days >= 2) {
            return `${days} days`;
        }
    }
    function countHours(seconds) {
        const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        if (hours < 1) {
            return "";
        } else if (hours >= 1 && hours < 2) {
            return "1 hour";
        } else if (hours >= 2) {
            return `${hours} hours`;
        }
    }
    function countMinutes(seconds) {
        const minutes = Math.floor(
            (((seconds % 31536000) % 86400) % 3600) / 60
        );
        if (minutes < 1) {
            return "";
        } else if (minutes >= 1 && minutes < 2) {
            return "1 minute";
        } else if (minutes >= 2) {
            return `${minutes} minutes`;
        }
    }

    function countSeconds(seconds) {
        const sec = (((seconds % 31536000) % 86400) % 3600) % 60;
        if (sec < 1) {
            return "";
        } else if (sec >= 1 && sec < 2) {
            return "1 second";
        } else if (sec >= 2) {
            return `${sec} seconds`;
        }
    }
    const result = [
        countYears(seconds),
        countDays(seconds),
        countHours(seconds),
        countMinutes(seconds),
        countSeconds(seconds),
    ];
    const filterArr = result.filter((el) => el !== "");
    if (seconds === 0) {
        return "now";
    } else if (filterArr.length === 2) {
        return `${filterArr[0]} and ${filterArr[1]}`;
    } else if (filterArr.length === 3) {
        return `${filterArr[0]}, ${filterArr[1]} and ${filterArr[2]}`;
    } else if (filterArr.length === 4) {
        return `${filterArr[0]}, ${filterArr[1]}, ${filterArr[2]} and ${filterArr[3]}`;
    } else if (filterArr.length === 5) {
        return `${filterArr[0]}, ${filterArr[1]}, ${filterArr[2]}, ${filterArr[3]} and ${filterArr[4]}`;
    } else if (filterArr.length === 1) {
        return `${filterArr[0]}`;
    }
}
console.log(formatDuration(38557662));

function numberOfPairs(gloves) {
    const set = Array.from(new Set(gloves));
    const countPairs = [];
    for (let i = 0; i < set.length; i++) {
        let a = gloves.filter((el) => el === set[i]);
        if (a.length === 1) {
            continue;
        } else if (a.length > 1) {
            countPairs.push(a.length);
        }
    }
    const result = countPairs.map((el) => (el % 2 === 0 ? el : el - 1));
    return result.length === 0
        ? 0
        : countPairs
              .map((el) => (el % 2 === 0 ? el : el - 1))
              .reduce((a, b) => a + b) / 2;
}
console.log(numberOfPairs(["red", "green", "blue"]));

function getLengthOfMissingArray(arrayOfArrays) {
    const arrOfLength = (arrayOfArrays || [])
        .map((el) => (el ? el.length : 0))
        .sort((a, b) => a - b);
    if (arrOfLength.includes(0)) {
        return 0;
    }
    for (let i = 0; i < arrOfLength.length - 1; i++) {
        if (arrOfLength.includes(0) || arrOfLength.length === 0) {
            return 0;
        }
        if (arrOfLength[i] + 1 !== arrOfLength[i + 1]) {
            return arrOfLength[i] + 1;
        }
    }
    return 0;
}
console.log(
    getLengthOfMissingArray([[1], [2, 4], [5, 6, 7], null, [6, 7, 8, 9]])
);

const addCurry = (...args1) => {
    return (...args2) => {
        const arr = [args1, args2];

        const result = [];
        const flatternArray = function (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] !== "number") {
                    flatternArray(arr[i]);
                } else result.push(arr[i]);
            }
            return result;
        };
        flatternArray(arr);

        return result.reduce((acc, num) => acc + num);
    };
};

console.log(addCurry(2, 5)(7, 2));

function recycle(array) {
    const paperArr = [];
    const glassArr = [];
    const organicArr = [];
    const plasticArr = [];
    let result = [];
    function materialLoop(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].material && !array[i].secondMaterial) {
                if (array[i].material === "paper") {
                    paperArr.push(array[i].type);
                } else if (array[i].material === "glass") {
                    glassArr.push(array[i].type);
                } else if (array[i].material === "organic") {
                    organicArr.push(array[i].type);
                } else if (array[i].material === "plastic") {
                    plasticArr.push(array[i].type);
                }
            }
            if (array[i].material && array[i].secondMaterial) {
                if (array[i].material === "paper") {
                    paperArr.push(array[i].type), secondMaterialLoop(array[i]);
                } else if (array[i].material === "glass") {
                    glassArr.push(array[i].type), secondMaterialLoop(array[i]);
                } else if (array[i].material === "organic") {
                    organicArr.push(array[i].type),
                        secondMaterialLoop(array[i]);
                } else if (array[i].material === "plastic") {
                    plasticArr.push(array[i].type),
                        secondMaterialLoop(array[i]);
                }
            }
        }
        return result;
    }
    function secondMaterialLoop(array) {
        if (array.secondMaterial === "paper") {
            paperArr.push(array.type);
        } else if (array.secondMaterial === "glass") {
            glassArr.push(array.type);
        } else if (array.secondMaterial === "organic") {
            organicArr.push(array.type);
        } else if (array.secondMaterial === "plastic") {
            plasticArr.push(array.type);
        }
        return result;
    }

    materialLoop(array);
    return console.log((result = [paperArr, glassArr, organicArr, plasticArr]));
}

recycle([
    { type: "rotten apples", material: "organic" },
    {
        type: "out of date yogurt",
        material: "organic",
        secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
]);

//             const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

// function recycle(objects) {
//   return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
// }

// function recycle(arr) {
//   let paper = [], glass = [], organic = [], plastic = [];

//   arr.forEach(obj => {
//     if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
//     if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
//     if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
//     if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
//   });

//   return [paper, glass, organic, plastic]
// }

var runLengthEncoding = function (str) {
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result.push([count, str[i]]);
            count = 1;
        } else if (str[i] === str[i + 1]) {
            count++;
        }
    }
    return result;
};

console.log(runLengthEncoding("abc"));

function unluckyDays(year) {
    let countUnlDays = 0;
    for (i = 0; i < 12; i++) {
        new Date(year, i, 13).getDay() === 5 ? countUnlDays++ : 0;
    }
    return countUnlDays;
}
console.log(unluckyDays(2065));

function getParticipants(handshakes) {
    return (handshakes * (handshakes - 1)) / 2;
}
console.log(getParticipants(4));

function createFunctions(n) {
    let callbacks = [];

    for (let i = 1; i <= n; i++) {
        function call(n) {
            return n;
        }
        callbacks.push(call());
    }
    return callbacks;
}
console.log(createFunctions(3));

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }
    const dateArr = [];
    function getDateArr(strDate) {
        const date = new Date(strDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        dateArr.push(year, month, day);
        return dateArr;
    }
    getDateArr(currentDate);
    getDateArr(expirationDate);

    if (
        dateArr[0] > dateArr[3] ||
        (dateArr[0] === dateArr[3] && dateArr[1] > dateArr[4]) ||
        (dateArr[0] >= dateArr[3] &&
            dateArr[1] === dateArr[4] &&
            dateArr[2] > dateArr[5])
    ) {
        return false;
    } else {
        return true;
    }
}
console.log(checkCoupon("123", "123", "November 8, 2013", "November 5, 2014"));
// [ 2013, 11, 8, 2014, 11, 5 ]

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }

    return Date.parse(currentDate) <= Date.parse(expirationDate) ? true : false;
}
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));

function brightest(colors) {
    let ind = 0;
    let maxVal = 0;
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5), 16);
        let val = [r, g, b].sort((a, b) => b - a)[0];
        if (val > maxVal) {
            maxVal = val;
            ind = i;
        }
    }
    return colors[ind];
}

console.log(brightest(["#00FF00", "#FFFF00"]));

function handAngle(date) {
    let hours = date.getHours();
    let min = date.getMinutes();
    let minAng = min * 6;
    let hourAng1 = hours * 30;
    if (minAng >= 180) {
        hourAng1 = Math.abs(hours * 30 - (minAng * 15) / 180);
    }
    if (minAng < 180) {
        hourAng1 = hours * 30 + (minAng * 15) / 180;
    }

    let angel = Math.abs(minAng - hourAng1);
    let res = Math.PI - Math.abs(Math.PI - (angel * Math.PI) / 180);

    return res;
    // return [res, [angel, "Hours " + hourAng1, 'Minutes ' + minAng]];
}
let d = new Date("Tue Mar 14 2023 12:30");
console.log(handAngle(d));

function sortByBit(arr) {
    function bitLength(num) {
        return num.toString(2).replace(/0/g, "").length;
    }
    return arr.sort((a, b) => {
        if (bitLength(a) > bitLength(b)) {
            return 1;
        } else if (bitLength(a) < bitLength(b)) {
            return -1;
        } else if (bitLength(a) === bitLength(b) && a < b) {
            return -1;
        }
    });
}
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));

const sortByBit = (arr) =>
    arr.sort(
        (a, b) =>
            a.toString(2).replace(/0/g, "") - b.toString(2).replace(/0/g, "") ||
            a - b
    );

console.log(new Array(2));

var runLengthEncoding = function (str) {
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result.push([count, str[i]]);
            count = 1;
        } else if (str[i] === str[i + 1]) {
            count++;
        }
    }
    return result;
};

function accum(s) {
    return s
        .toLowerCase()
        .split("")
        .map(
            (symbol, index) => `${symbol.toUpperCase()}${symbol.repeat(index)}`
        )
        .join("-");
}

function filterHomogenous(arrays) {
    // Alea iacta est, code legionary!
    return arrays.filter(
        (arr) =>
            arr.length && arr.every((item) => typeof item === typeof arr[0])
    );
}
console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]));

function inter(s1, s2) {
    return new Set([...s1].filter((item) => s2.has(item)));
}

let ar1r = ["Rysn", "Jimmy", "123", "4", "Cool Man", "Rysn"];
function friend(friends) {
    return friends.filter((el) => typeof el === "string" && el.length === 4);
}
console.log(friend(arr));
return friends.filter((n) => n.length === 4);

function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
        year++;
        p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    }
    return year;
}
console.log(nbYear(1500, 5, 100, 5000));

function findNextSquare(sq) {
    // if ((Math.sqrt(sq) % 2 == 0) || (Math.sqrt(sq) % 2 == 0.5 || (Math.sqrt(sq) % 2 == 1))) {
    // 	return ((Math.sqrt(sq)) + 1) ** 2;
    // } else { return -1;
    // }
    if (Math.sqrt(sq) == Math.floor(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1) ** 2;
    } else {
        return -1;
    }
}
console.log(findNextSquare(121));

function printerError(s) {
    let b = s.length - s.replace(/[n-z]/gi, "").length;
    return `${b}` + `${"/"}` + `${s.length}`;
}
console.log(printerError("aaabbbbhaijjjmx"));
const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
return n ** 3;
return n * n * n;

function stray(numbers) {
    let a = numbers.sort((a, b) => a - b);
    return a[0] == a[1] ? a[a.length - 1] : a[0];
}
console.log(stray([1, 1, 1, 2]));
const stray = (nums) => nums.reduce((a, b) => a ^ b);

function isAValidMessage(message) {
    function numFromStr(str) {
        let num = [...str]
            .map((i) => {
                if (isFinite(i) == true || i == ".") {
                    return i;
                } else {
                    return " ";
                }
            })
            .join("")
            .split(" ")
            .filter((i) => i != "")
            .map((i) => Number(i));
        return num;
    }
    console.log(numFromStr("3hey5hello2hi"));
    let b = message.replace(/[0-9]/gi, " ");
    console.log(b);

    return b;
}
console.log(isAValidMessage("3hey5hello2hi"));

function noOdds(values) {
    return values.filter((a) => a % 2 == 0);
}
console.log(noOdds([0, 1, 2, 3]));

function angle(n) {
    return 180 * (n - 2);
}
console.log(angle(61));

function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b);
}

console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ])
);

function digits(n) {
    return String(n).length;
}

console.log(digits(12345));

function digits(n) {
    return n.toString().length;
}

function sortGiftCode(code) {
    return [...code].sort().join("");
}

console.log(sortGiftCode("pqksuvy"));

var SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        let arr = [];
        for (let i = 0; i <= count; i++) {
            arr.push(i);
        }
        let b = arr.reduce((total, next) => total + next, 0);
        let a = arr.join("+");
        if (count < 0) return `${count}<0`;
        if (count == 0) return `${count}=0`;
        return `${a} = ${b}`;
    };

    return SequenceSum;
})();

function countA(n) {
    let res = [];
    for (i = 1; i <= n; i++) {
        res.push(i);
    }
    return res.reduce((a, b) => a + b);
}
console.log(countA(6));

function generateShape(integer) {
    console.log("*" + integer.repeat(integer));
}
console.log(generateShape(5));

function countRedBeads(n) {
    if (n < 2) {
        return 0;
    }
    if (n > 2) {
        return (n - 1) * 2;
    }
}

console.log(countRedBeads(3));

function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1) * 2;
}

function getParticipants(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipant2s(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants3(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}

function getParticipants3(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants112(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants1312(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}

//virtual keyboard task done
//virtual keyboard cross check review task
//HTML Builder task start
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task crosscheck
//HTML Builder task crosscheck
//HTML Builder task crosscheck
//webpack test completed
//Client - Server interaction test completed
//Client - Server interaction test completed
//Client - Server interaction test
//Self-introduction
//Self-introduction video make
//JavaScript Classes lection 1
// OOP module// OOP test passed
//JavaScript Classes lection 2

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    toString() {
        console.log(`${this.name} is a ${this.type}`);
    }
}
const dog = new Animal("Max", "dog");
dog.toString();
console.log(dog.type);
