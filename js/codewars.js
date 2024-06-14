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

// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     toString() {
//         console.log(`${this.name} is a ${this.type}`);
//     }
// }
// const dog = new Animal("Max", "dog");
// dog.toString();
// console.log(dog.type);

var numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
    return this.map((n) => n ** 2);
};
Array.prototype.cube = function () {
    return this.map((n) => n ** 3);
};

Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b;
    }, 0);
};
Array.prototype.average = function () {
    return this.sum() / this.length;
};
Array.prototype.even = function () {
    return this.filter((item) => 0 === item % 2);
};
Array.prototype.odd = function () {
    return this.filter((item) => 0 !== item % 2);
};

console.log(numbers.square());

function neutralise(s1, s2) {
    let res = "";
    for (let i = 0; i < s1.length; i++) {
        res += s1[i] === s2[i] ? s1[i] : "0";
    }
    return res;
}
console.log(neutralise("-+-+-+", "-+-+-+"));

function flickSwitch(arr) {
    let result = [];
    let switchValue = true;

    for (let item of arr) {
        if (item === "flick") {
            result.push(!switchValue);
            switchValue = !switchValue;
        } else {
            result.push(switchValue);
        }
    }

    return result;
}

console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));

const flip = (d, a) => {
    return d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
};
console.log(flip("L", [3, 2, 1, 2]));

function sameCase(a, b) {
    const res = a + b;
    if (res.replace(/[\W\d\_]/g, "") !== res) {
        return -1;
    } else if (res.toUpperCase() === res || res.toLowerCase() === res) {
        return 1;
    }

    return 0;
}

console.log(sameCase("1 a", "B:"));

function pillars(numPill, dist, width) {
    return numPill === 1
        ? 0
        : (numPill - 1) * (dist * 100) + (numPill * width - 2 * width);
}
console.log(pillars(11, 15, 30));

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
        return 0;
    }
    const newArr = arr.sort((a, b) => b - a);
    let res = [];
    for (let i = 0; i < newArr.length - 1; i++) {
        res.push(newArr[i] - newArr[i + 1]);
    }

    return res.reduce((cur, acc) => acc + cur);
}
console.log(sumOfDifferences([-1]));

function multipleOfIndex(array) {
    const res = [];
    if (array[0] === 0) {
        res.push(array[0]);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            res.push(array[i]);
        }
    }
    return res;
}
console.log(multipleOfIndex([0, 2, 3, 6, 9]));

function spinAround(turns) {
    let res = 0;
    for (let i = 0; i < turns.length; i++) {
        turns[i] === "left" ? (res -= 0.25) : (res += 0.25);
    }
    return Math.floor(Math.abs(res));
}
console.log(spinAround(["right", "right", "right", "right", "left", "right"]));

function closingInSum(n) {
    let res = [];
    const arr = String(n).split("");
    if (arr.length === 1) {
        return arr.map(Number)[0];
    }
    if (arr.length % 2 !== 0) {
        res.push(arr[Math.floor(arr.length / 2)]);
    }
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + arr[arr.length - 1 - i]);
        if (i >= Math.floor(arr.length / 2 - 1)) {
            break;
        }
    }
    return res.map(Number).reduce((acc, curr) => acc + curr);
}
console.log(closingInSum(1));

function madShout(sidewalk) {
    const distanceYF = sidewalk.indexOf("F") - sidewalk.indexOf("Y");
    if (distanceYF > 2) {
        let arr = [];
        for (let i = 0; i < distanceYF / 2; i++) {
            arr.push("i");
        }
        return `O${arr.join("")} F!`;
    }
    return "Oi F!";
}
console.log(madShout("---------Y-----F------------"));

function openOrSenior(data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            res.push("Senior");
        } else {
            res.push("Open");
        }
    }
    return res;
}

console.log(
    openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
    ])
);

function breakChocolate(n, m) {
    if (n < 1 || m < 1) {
        return 0;
    }
    let counter2 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {
            counter2++;
        }
    }
    return counter2 + n - 1;
}
console.log(breakChocolate(5, 5));

function nbDig(n, d) {
    let arrOfSqNums = [];
    for (let i = 0; i <= n; i++) {
        arrOfSqNums.push(i ** 2);
    }
    return arrOfSqNums
        .join("")
        .split("")
        .filter((item) => +item === d).length;
}
console.log(nbDig(25, 1));

function solution(digits) {
    let str = digits + "";
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(+str.slice(i, i + 5));
    }
    return Math.max(...arr);
}
console.log(solution(1234567890));

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reduce((a, b) => a * b);
}
console.log(factorial(0));

function alphabetWar(fight) {
    let res = [];
    for (let i = 0; i < fight.length; i++) {
        switch (fight[i]) {
            case "w":
                res.push(4);
                break;
            case "p":
                res.push(3);
                break;
            case "b":
                res.push(2);
                break;
            case "s":
                res.push(1);
                break;
            case "m":
                res.push(-4);
                break;
            case "q":
                res.push(-3);
                break;
            case "d":
                res.push(-2);
                break;
            case "z":
                res.push(-1);
                break;
        }
    }
    const num = res.reduce((a, b) => a + b, 0);
    if (num > 0) {
        return "Left side wins!";
    } else if (num < 0) {
        return "Right side wins!";
    }
    return "Let's fight again!";
}
console.log(alphabetWar("zzzzs"));

const greet = function (name) {
    const firstLetter = name.slice(0, 1).toUpperCase();
    const otherLetters = name.slice(1).toLowerCase();
    return "Hello " + firstLetter + otherLetters + "!";
};
console.log(greet("rocky"));

function spinWords(string) {
    let res = [];
    const arr1 = string.split(" ").map((item) => item.split(""));
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length > 4) {
            res.push(arr1[i].reverse().join(""));
        } else {
            res.push(arr1[i].join(""));
        }
    }
    return res.join(" ");
}
console.log(spinWords("Hey fellow warriors"));

function duplicateCount(text) {
    let res = Array.from(text.toLowerCase()).sort();
    let arr = [];
    for (let i = 0; i < res.length; i++) {
        if (res[i] === res[i + 1]) {
            arr.push(res[i]);
        }
    }
    return Array.from(new Set(arr)).length;
}
console.log(duplicateCount("aabBcde"));

const n = [1, 2, 3, 4, 5];
function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    const minNum = Math.min(...numbers);
    const minNumFLowerIndex = numbers.indexOf(minNum);
    return numbers.filter((elem, index) => index !== minNumFLowerIndex);
}
console.log(removeSmallest(n));
console.log(n);

function findOdd(A) {
    const res = [...new Set(A)]; //[ 1, 2, 3, 4 ]
    const arr1 = res.map((num) => A.filter((item) => item === num));
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].length % 2 > 0) {
            return arr1[i][0];
        }
    }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

function solution(number) {
    if (number < 0) {
        return 0;
    }
    let arr = [];
    for (let i = 1; i < number; i++) {
        arr.push(i);
    }
    const arrFiveFilter = arr.filter((item) => item % 5 === 0);
    const arrThreeFilter = arr.filter((item) => item % 3 === 0);
    return [...new Set([arrFiveFilter, arrThreeFilter].flat())].reduce(
        (acc, cur) => acc + cur,
        0
    );
}
console.log(solution(20));

function getDivisorsCnt(n) {
    let count = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
console.log(getDivisorsCnt(12));

// function getDivisorsCnt(n) {
//     let count = 0;
//     for (let i = 1; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             // If i is a divisor, increment count by 2 (for both i and n/i)
//             if (i * i === n) {
//                 count++;
//             } else {
//                 count += 2;
//             }
//         }
//     }
//     return count;
// }
// console.log(getDivisorsCnt(12));

var capitals = function (word) {
    let res = [];
    [...word.replace(/[a-z]/g, "0")].map((item, index) =>
        item !== "0" ? res.push(index) : -1
    );
    return res;
};
console.log(capitals("CodEWaRs"));

var countBits = function (n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return [...n.toString(2)].reduce((acc, cur) => +acc + +cur);
};

function findUniq(arr) {
    const sortArr = arr.sort();
    return sortArr.at(0) === sortArr.at(1) ? sortArr.at(-1) : sortArr.at(0);
}
console.log(findUniq([1, 1, 2, 1, 1]));

function solution(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            res.push(str[i] + "_");
            break;
        }
        res.push(str[i] + str[i + 1]);
        i++;
    }
    return res;
}
console.log(solution(""));

function sortArray(array) {
    const filteredArr = array
        .filter((item) => item % 2 !== 0)
        .sort((a, b) => a - b);
    let res = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            res.push(filteredArr[count]);
            count++;
        } else {
            res.push(array[i]);
        }
    }
    return res;
}
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let countNS = 0;
    let countWE = 0;
    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case "n":
                countNS++;
                break;
            case "s":
                countNS--;
                break;
            case "w":
                countWE++;
                break;
            case "e":
                countWE--;
                break;
        }
    }
    console.log([countNS, countWE]);
    return countNS !== 0 || countWE !== 0 ? false : true;
}
console.log(isValidWalk(["s", "e", "s", "s", "w", "w", "n", "w", "n", "e"]));

function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const formatedText = text.replace(/[\W\d\s\_]/gi, "");
    console.log(formatedText);
    if (formatedText.length < 1) {
        return "";
    }
    let res = "";
    for (let i = 0; i < formatedText.length; i++) {
        res = res + (alphabet.indexOf(formatedText[i].toLowerCase()) + 1) + " ";
    }
    return res.trim();
}
console.log(alphabetPosition("i<cvmc_!"));

function moveZeros(arr) {
    let res = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            res.push(arr[i]);
        } else {
            count++;
        }
    }
    for (let i = 0; i < count; i++) {
        res.push(0);
    }
    return res;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

function pigIt(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].replace(/[^A-Za-z]/gi, "") !== arr[i]) {
            arr[i] === arr[i];
            break;
        }
        arr[i] = arr[i].slice(1) + arr[i][0] + "ay";
    }
    return arr.join(" ");
}
console.log(pigIt("Pig latin is cool !"));

function humanReadable(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor((seconds % 3600) / 60);
    let sec = seconds - (3600 * hour + 60 * min);
    sec < 10 ? (sec = "0" + sec) : sec;
    min < 10 ? (min = "0" + min) : min;
    hour < 10 ? (hour = "0" + hour) : hour;
    return `${hour}:${min}:${sec}`;
}
console.log(humanReadable(15125));

function dirReduc(arr) {
    let newArr = [...arr];
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === "NORTH" && arr.slice(i).indexOf("SOUTH") > -1) {
            newArr[i] = 0;
            newArr[newArr.indexOf("SOUTH")] = 0;
        }
        if (arr[i] === "WEST" && arr.slice(i).indexOf("EAST") > -1) {
            newArr[i] = 0;
            newArr[newArr.indexOf("EAST")] = 0;
        }
        if (arr[i] === "SOUTH" && arr.slice(i).indexOf("NORTH") > -1) {
            newArr[i] = 0;
            newArr[newArr.indexOf("NORTH")] = 0;
        }
        if (arr[i] === "EAST" && arr.slice(i).indexOf("WEST") > -1) {
            newArr[i] = 0;
            newArr[newArr.indexOf("WEST")] = 0;
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (
            newArr[i] === "NORTH" ||
            newArr[i] === "SOUTH" ||
            newArr[i] === "EAST" ||
            newArr[i] === "WEST"
        ) {
            res.push(newArr[i]);
        }
    }
    return res;
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));

function rot13(message) {
    const newMessage = [...message.toLowerCase()];
    let res = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < newMessage.length; i++) {
        if (alphabet.includes(newMessage[i])) {
            if (alphabet.indexOf(newMessage[i]) <= 12) {
                res.push(alphabet[alphabet.indexOf(newMessage[i]) + 13]);
            }
            if (alphabet.indexOf(newMessage[i]) > 12) {
                res.push(alphabet[alphabet.indexOf(newMessage[i]) - 13]);
            }
        } else {
            res.push(newMessage[i]);
        }
    }
    for (let i = 0; i < message.length; i++) {
        if (message[i] === message[i].toUpperCase()) {
            res[i] = res[i].toUpperCase();
        }
    }
    return res.join("");
}
console.log(rot13("Te2st"));

function firstNonRepeatingLetter(s) {
    s = s.split("");
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (
            s.filter((elem) => elem.toLowerCase() === s[i].toLowerCase())
                .length === 1
        ) {
            res = s[i];
            break;
        }
    }
    return res;
}
console.log(firstNonRepeatingLetter("stress"));

function incrementString(strng) {
    let str = "";
    if (strng === strng.replace(/[]\d/g, "")) {
        str === strng.slice(0, -1) + (+strng.slice(-1) + 1);
        return str;
    }

    let res = [];
    let strngSplit = strng.split("");
    for (let i = strngSplit.length - 1; i >= 0; i--) {
        if (+strngSplit[i]) {
            res.push(strngSplit[i]);
        } else {
            console.log("break");
            break;
        }
    }
    console.log(res);
    if (res.length > 0) {
        res = res.reverse().join("");
        console.log(res);
        str = strng.slice(0, strng.length - res.length);
        console.log(str);
        return str + (+res + 1);
    }
    return str;
}
console.log(incrementString("0123"));

function generateHashtag(str) {
    if (str.trim() === "") {
        return false;
    }
    const capitalized = str
        .trim()
        .split(" ")
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1));
    const res = "#" + capitalized.join("");
    return res.length > 140 ? false : res;
}
console.log(generateHashtag(" Hello there thanks for trying my Kata"));

function scramble(str1, str2) {
    const count1 = {};
    const count2 = {};
    for (const char of str1) {
        count1[char] = (count1[char] || 0) + 1;
    }
    for (const char of str2) {
        count2[char] = (count2[char] || 0) + 1;
    }
    for (const char in count2) {
        if (!count1[char] || count1[char] < count2[char]) {
            return false;
        }
    }
    return true;
}
console.log(scramble("katas", "steak"));

function alphanumeric(string) {
    return string.replace(/[\W\_]/gi, "") === string && string !== ""
        ? true
        : false;
}
console.log(alphanumeric(""));

function rot13(str) {
    const alphabet =
        "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const arr = str.split("");
    const res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     alphabet.indexOf(arr[i]) > -1
    //         ? (arr[i] = alphabet[alphabet.indexOf(arr[i]) + 13])
    //         : 0;
    // }

    arr.forEach((elem) =>
        alphabet.indexOf(elem) > -1
            ? res.push(alphabet[alphabet.indexOf(elem) + 13])
            : res.push(elem)
    );
    return res.join("");
}
console.log(rot13("EBG13 rknzcyr."));

function isSolved(board) {
    let res = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i].includes(0)) {
            return -1;
        }
        if (
            board[i].length ===
            board[i].filter((el) => el === board[i][0]).length
        ) {
            return 1;
        }
        for (let j = 0; j < board[i].length; j++) {}
    }
}

console.log(
    isSolved([
        [1, 1, 1],
        [0, 1, 2],
        [0, 0, 0],
    ])
);

function persistence(num) {
    let count = 0;
    while (num >= 10) {
        num = num
            .toString()
            .split("")
            .reduce((acc, cur) => acc * +cur, 1);
        count++;
    }
    return count;
}
console.log(persistence(39));

var uniqueInOrder = function (iterable) {
    const res = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            res.push(iterable[i]);
        }
    }
    return res;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));

var beeramid = function (bonus, price) {
    let count = 0;
    let beersCount = Math.floor(bonus / price);
    for (let i = 1; i <= beersCount; i++) {
        if (beersCount - i ** 2 >= 0) {
            count++;
            beersCount = beersCount - i ** 2;
        } else {
            break;
        }
    }
    return count;
};
console.log(beeramid(454, 5));

var solution = function (firstArray, secondArray) {
    const arr = [];
    for (let i = 0; i < firstArray.length; i++) {
        arr.push(Math.abs(firstArray[i] - secondArray[i]) ** 2);
    }

    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

console.log(solution([1, 2, 3], [4, 5, 6]));

function rgb(r, g, b) {
    const arr = [r, g, b];
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 255) {
            subArr.push("FF");
            continue;
        }
        if (arr[i] <= 0) {
            subArr.push("00");
            continue;
        }
        subArr.push(parseInt(arr[i] / 16), arr[i] % 16);
    }
    for (let i = 0; i < subArr.length; i++) {
        if (subArr[i] === 10) {
            subArr[i] = "A";
        } else if (subArr[i] === 11) {
            subArr[i] = "B";
        } else if (subArr[i] === 12) {
            subArr[i] = "C";
        } else if (subArr[i] === 13) {
            subArr[i] = "D";
        } else if (subArr[i] === 14) {
            subArr[i] = "E";
        } else if (subArr[i] === 15) {
            subArr[i] = "F";
        }
    }
    return subArr.join("");
}
console.log(rgb(0, 0, 0));
2;
const getNumbers = (numbers, target) => {
    return [];
};

console.log(getNumbers([100, 25, 15, 7, 3], target));

function lastSurvivor(letters, coords) {
    let str = letters.slice(0);
    for (let i = 0; i < coords.length; i++) {
        str = str;
    }
    return str;
}
console.log(lastSurvivor("zbk", [0, 1]));

function toCamelCase(str) {
    const string = str.replace(/[_-]/gi, "-").split("-");
    for (let i = 1; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
    }
    return string.join("");
}
console.log(toCamelCase("the_stealth_warrior"));

function validISBN10(isbn) {
    if (isbn.length !== 10 || isbn.slice(0, 9).includes("X")) {
        return false;
    }
    const res = [];
    for (let i = 0; i < isbn.length; i++) {
        if (isbn[i] === "X") {
            res.push((i + 1) * 10);
            continue;
        }
        res.push((i + 1) * +isbn[i]);
    }
    return res.reduce((acc, cur) => acc + cur) % 11 === 0 ? true : false;
}
console.log(validISBN10("X123456789"));

function hexStringToRGB(hexString) {
    return {
        r: parseInt(hexString.slice(1, 3), 16),
        g: parseInt(hexString.slice(3, 5), 16),
        b: parseInt(hexString.slice(5, 7), 16),
    };
}
console.log(hexStringToRGB("#1ABBCC"));

function findMissingLetter(array) {
    let counter = 1;
    let res = "";
    const arr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = arr.indexOf(array[0]);

    for (let i = index; i < array.length + index; i++) {
        if (arr[i + 1] !== array[counter]) {
            res = arr[i + 1];
            break;
        }
        counter++;
    }

    return res;
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

function isLeapYear(year) {
    if (0 == year % 400) return true;
    if (0 == year % 100) return false;
    if (0 == year % 4) return true;
    return false;
}
console.log(isLeapYear(2100));

function bump(x) {
    return x.replace(/[_]/g, "").length <= 15 ? "Woohoo!" : "Car Dead";
}
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));

function fizzbuzz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            arr.push("Fizz");
            continue;
        }
        if (i % 5 === 0) {
            arr.push("Buzz");
            continue;
        } else {
            arr.push(i);
        }
    }
    return arr;
}
console.log(fizzbuzz(15));

function evaporator(content, evap_per_day, threshold) {
    let content1 = content;
    let threshold1 = content * threshold * 0.01;
    let evap_per_day1 = content * evap_per_day * 0.01;
    function a(content1) {
        content2 = content1 - evap_per_day1;
        return content2;
    }
    // for (let i = 0; i < 150; i++) {
    //     content1 = content1 - evap_per_day1;
    //     console.log(content1);
    //     if (content1 <= threshold1) {
    //         break;
    //     }
    // }
    return content1;
}
console.log(evaporator(10, 10, 5));

const solve = function (arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let count2 = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase() === alphabet[j]) {
                count2++;
            }
        }
        res.push(count2);
    }
    return res;
};
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]));

function isRubyComing(list) {
    return list.find((item) => item.language === "Ruby") ? true : false;
}

console.log(
    isRubyComing([
        {
            firstName: "Sofia",
            lastName: "I.",
            country: "Argentina",
            continent: "Americas",
            age: 35,
            language: "Java",
        },
        {
            firstName: "Lukas",
            lastName: "X.",
            country: "Croatia",
            continent: "Europe",
            age: 35,
            language: "Python",
        },
        {
            firstName: "Madison",
            lastName: "U.",
            country: "United States",
            continent: "Americas",
            age: 32,
            language: "Ruby",
        },
    ])
);

function toNumberArray(stringarray) {
    return stringarray.map((item) => +item);
}
console.log(toNumberArray(["1", "2", "3"]));

var filterString = function (value) {
    return typeof +value.replace(/\D/g, "");
};
console.log(filterString("12wd3"));

function solution(roman) {
    const symbols = ["I", "V", "X", "L", "C", "D", "M"];
    const nums = [1, 5, 10, 50, 100, 500, 1000];
    let res = [];
    let num = 0;
    for (let i = 0; i < roman.length; i++) {
        let index = symbols.indexOf(roman[i]);
        res.push(nums.at(index));
    }

    for (let i = 0; i < res.length; i++) {
        res[i] >= res[i + 1] || i + 1 === res.length
            ? (num = num + res[i])
            : ((num = num + res[i + 1] - res[i]), i++);
    }
    return num;
}
console.log(solution("DXXXIX"));

function solution(string) {
    let res = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            res.push(" " + string[i]);
        } else {
            res.push(string[i]);
        }
    }
    return res.join("");
}
console.log(solution("camelCasingTest"));

function generateShape(integer) {
    let str = "";
    for (let i = 0; i < integer; i++) {
        if (i === 0) {
            str = str + "+".repeat(integer);
            continue;
        }
        str = str + "\n" + "+".repeat(integer);
    }
    return str;
}
console.log(generateShape(8));

function towerBuilder(nFloors) {
    let res = [];
    for (let i = 0; i < nFloors; i++) {
        res.push(
            " ".repeat(nFloors - i - 1) +
                "*".repeat(i * 2 + 1) +
                " ".repeat(nFloors - i - 1)
        );
    }
    return res;
}
console.log(towerBuilder(9));

function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].length === 2 &&
            (arr[i][0] === ":" || arr[i][0] === ";") &&
            (arr[i].at(-1) === ")" || arr[i].at(-1) === "D")
        ) {
            count++;
        } else if (
            arr[i].length === 3 &&
            (arr[i][0] === ":" || arr[i][0] === ";") &&
            (arr[i][1] === "-" || arr[i][1] === "~") &&
            (arr[i].at(-1) === ")" || arr[i].at(-1) === "D")
        ) {
            count++;
        }
    }
    return count;
}
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));

function expandedForm(num) {
    let arr = String(num);
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "0") {
            res = res + (arr[i] + "0".repeat(arr.length - i - 1)) + " + ";
        } else if (arr[i] === "0") {
            continue;
        } else {
            res = res + arr[i];
        }
    }
    return res.slice(0, -3);
}
console.log(expandedForm(12345));

function wave(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        }
        str[i] = str[i].toUpperCase();
        res.push(str.join(""));
        str[i] = str[i].toLowerCase();
    }
    return res;
}
console.log(wave("two words"));

// function solution(number) {
//     const obj = {
//         I: 1,
//         II: 2,
//         III: 3,
//         IV: 4,
//         V: 5,
//         VI: 6,
//         VII: 7,
//         VIII: 8,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     };
//     let arr = String(number).split("");
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== "0") {
//             res.push(arr[i] + "0".repeat(arr.length - i - 1));
//         } else if (arr[i] === "0") {
//             continue;
//         } else {
//             res.push(arr[i]);
//         }
//     }
//     res = res.map(Number);

//     return res;
// }
// console.log(solution(3999));

function inArray(array1, array2) {
    const res = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i])) {
                res.push(array1[i]);
            }
        }
    }
    return Array.from(new Set(res.sort()));
}

console.log(
    inArray(
        ["live", "strong", "arp"],
        ["lively", "alive", "harp", "sharp", "armstrong"]
    )
);

function count(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(`${string[i]}`) === true) {
            obj[string[i]] += 1;
            continue;
        }
        obj[`${string[i]}`] = 1;
    }
    return obj;
}
console.log(count("abaccab"));

function toWeirdCase(string) {
    let arr = string.split(" ");
    let fin = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                fin.push(arr[i][j].toUpperCase());
            } else {
                fin.push(arr[i][j].toLowerCase());
            }
        }
        fin.push(" ");
    }
    return fin.join("").trim();
}
console.log(toWeirdCase("This is a test"));

function isValidIP(str) {
    const arr = str
        .split(".")
        .filter((item) => +item >= 0 && +item <= 255 && item === String(+item));
    console.log(arr);
    return arr.length !== 4 ? false : true;
}
console.log(isValidIP("1.2.3.4.5"));

function titleCase(title, minorWords) {
    if (title.trim().length === 0) {
        return title;
    }
    const arrTitle = title
        .split(" ")
        .map((item) => item.toLowerCase())
        .map((item) => item[0].toUpperCase() + item.slice(1));
    const arrMinorWords = minorWords
        .split(" ")
        .map((item) => item.toLowerCase());
    console.log([arrTitle, arrMinorWords]);
    let res = [];
    for (let i = 0; i < arrTitle.length; i++) {
        if (i === 0) {
            res.push(arrTitle[i]);
            continue;
        }
        if (arrMinorWords.includes(arrTitle[i].toLowerCase())) {
            res.push(arrTitle[i].toLowerCase());
            continue;
        }
        res.push(arrTitle[i]);
    }
    return res.join(" ");
}
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));

function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
console.log(validPhoneNumber("(1111)555 2345"));
// "(123) 456-7890"

function isValidHKPhoneNumber(phoneNumber) {
    let str = phoneNumber.replace(/\d{4} \d{4}/).trim();
    console.log(str);
    // return /^\d{4} \d{4}/.test(str);
}
console.log(
    isValidHKPhoneNumber("I wonder if 2359 1478 is a valid phone number?")
);
// "(123) 456-7890"

function cleanString(s) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "#") {
            res.push(s[i]);
        } else {
            res.pop();
        }
    }
    return res.join("");
}
console.log(cleanString("abc##d######"));

function toUnderscore(string) {
    const res = [];
    string = string.toString();
    for (let i = 0; i < string.length; i++) {
        if (i === 0 || Number(string[i])) {
            res.push(string[i].toLowerCase());
            continue;
        }
        if (string[i] === string[i].toUpperCase()) {
            res.push("_");
            res.push(string[i].toLowerCase());
            continue;
        }
        res.push(string[i]);
    }
    return res.join("");
}
console.log(toUnderscore(123));

// function findUniq(arr) {
//     let res = [];
//     let arr2 = [];
//     let count = 0;
//     let arr1 = arr.map((item) =>
//         item.toLowerCase().split("").sort().join("").trim()
//     );
//     for (let i = 0; i < arr1.length; i++) {
//         arr2.push(Array.from(new Set(arr1[i].split(""))));
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         for (let j = 0; j < arr2[i].length; j++) {
//             res.push(arr2[i][j]);
//         }
//     }
//     console.log(res);
//     for (let i = 1; i < res.length; i++) {
//         if (res[i - 1] !== res[i] && res[i + 1] && res[i - 1] !== res[i + 1]) {
//             count = [i - 1];
//             break;
//         }
//     }
//     return arr[count];
// }
// console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));

function solve(s) {
    const alphabet = "0abcdefghijklmnopqrstuvwxyz";
    let res = [];
    let str = s.replace(/[aeiou]/gi, " ").split(" ");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "") {
            continue;
        }
        if (str[i].length === 1) {
            res.push(alphabet.indexOf(str[i]));
            continue;
        }
        if (str[i].length > 1) {
            let sumIndex = 0;
            for (let j = 0; j < str[i].length; j++) {
                sumIndex = sumIndex + alphabet.indexOf(str[i][j]);
            }
            res.push(sumIndex);
        }
    }
    console.log(res);
    return res.sort((a, b) => b - a)[0];
}
console.log(
    solve(
        "pufuujanuriameeuxuavexoxcioelujoaauyvmuezkepauoureeuanhiawciusktaliiuacoxejmhvqgemgteapjbroigcwihrsoexedaoaaiegoqquoehogiefiaqiatevrhjyiooiqeouocieuickqkehudniopuuluqopfsoeheaauoioiuuaueoiueioioou"
    )
);

function tripledouble(num1, num2) {
    let num1Str = String(num1);
    let num13 = [];
    let res = 0;
    for (let i = 0; i < num1Str.length; i++) {
        if (num1Str[i] === num1Str[i + 1] && num1Str[i] === num1Str[i + 2]) {
            num13.push(num1Str[i].repeat(3));
        }
    }
    for (let i = 0; i < num13.length; i++) {
        if (num13[i].length === 3 && String(num2).includes(num13[i].slice(1))) {
            res = 1;
        }
    }
    return res;
}
console.log(tripledouble(71998487111888, 4352627488));

function upArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] <= 9) {
            continue;
        }
        return null;
    }
    let num = arr.map((item) => String(item)).join("");
    console.log(num);
    console.log(typeof num);
    // let zeroCount = arr.length - String(num).length;

    // console.log(zeroCount + ' zeroCount');
    // let numStrArr = String(num).split("").reverse();
    // for (let i = 0; i < zeroCount; i++) {
    //     if (zeroCount === 0) {
    //         break;
    //     }
    //     numStrArr.push("0");
    // }
    // return numStrArr.reverse().map((item) => Number(item));
}

function pyramid(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < i + 1; j++) {
            arr.push(1);
        }
        res.push(arr);
    }
    return res;
}
console.log(pyramid(3));

function dup(s) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        let subres = [];
        for (let j = 0; j < s[i].length; j++) {
            if (s[i][j + 1] && s[i][j] === s[i][j + 1]) {
                continue;
            }
            subres.push(s[i][j]);
        }
        res.push(subres.join(""));
    }
    return res;
}
console.log(dup(["kelless", "keenness"]));

function findSenior(list) {
    let res = [];
    let maxAge = list.sort((a, b) => b.age - a.age)[0].age;
    for (let i = 0; i < list.length; i++) {
        if (list[i].age === maxAge) {
            res.push(list[i]);
        }
    }
    return res;
}
console.log(
    findSenior([
        {
            firstName: "Gabriel",
            lastName: "X.",
            country: "Monaco",
            continent: "Europe",
            age: 49,
            language: "PHP",
        },
        {
            firstName: "Odval",
            lastName: "F.",
            country: "Mongolia",
            continent: "Asia",
            age: 38,
            language: "Python",
        },
        {
            firstName: "Emilija",
            lastName: "S.",
            country: "Lithuania",
            continent: "Europe",
            age: 19,
            language: "Python",
        },
        {
            firstName: "Sou",
            lastName: "B.",
            country: "Japan",
            continent: "Asia",
            age: 49,
            language: "PHP",
        },
    ])
);

function highestRank(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
    const max = Math.max(...Object.values(obj));
    let sortedObj = Object.entries(obj)
        .sort((a, b) => a[1] - b[1])
        .filter(([key, value]) => value === max)
        .flat(Infinity);
    let res = [];
    for (let i = 0; i < sortedObj.length; i++) {
        if (typeof sortedObj[i] == "string") {
            res.push(+sortedObj[i]);
        }
    }
    return res.sort((a, b) => b - a)[0];
}
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));

function reverse(str) {
    let arr = str.split(" ");
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    return arr.join(" ").trim();
}
console.log(reverse("   "));

function dashatize(num) {
    let res = [];
    let arr = String(Math.abs(num)).split("");
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 !== 0) {
            res.push(`-${arr[i]}-`);
            continue;
        } else {
            res.push(arr[i]);
            continue;
        }
    }
    res = res.join("");
    if (res[res.length - 1] === "-") {
        res = res.slice(0, -1);
    }
    if (res[0] === "-") {
        res = res.slice(1);
    }

    return res.replace(/--/g, "-");
}
console.log(dashatize(-9743021));

function kebabize(str) {
    return str
        .replace(/([A-Z])/g, "-$1")
        .replace(/^-|\d/g, "")
        .toLowerCase();
}
console.log(kebabize("MyCamelHas3Hu3mps"));

function grabscrab(anagram, dictionary) {
    function splitSort(arr) {
        return arr
            .split("")
            .sort((a, b) => a.localeCompare(b))
            .join("");
    }
    let newAnagram = splitSort(anagram);
    let newD = dictionary.map((item) => splitSort(item));
    let res = [];
    for (let i = 0; i < newD.length; i++) {
        if (newD[i] === newAnagram) {
            res.push(dictionary[i]);
        }
        continue;
    }
    return res;
}
console.log(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]));

function sumConsecutives(s) {
    let res = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count += s[i];
            continue;
        }
        if (s[i] !== s[i + 1] && count !== 0) {
            res.push(count + s[i]);
            count = 0;
            continue;
        }
        res.push(s[i]);
    }
    return res;
}
console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]));

function stringTransformer(str) {
    let subStr = "";
    let res = [];
    let s = str.split(" ").reverse();
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (s[i][j] === s[i][j].toUpperCase()) {
                subStr += s[i][j].toLowerCase();
            } else {
                subStr += s[i][j].toUpperCase();
            }
        }
        res.push(subStr);
        subStr = "";
    }
    return res.join(" ");
}
console.log(stringTransformer("Example string"));

function stringTransformer(str) {
    return str
        .split(" ")
        .reverse()
        .join(" ")
        .split("")
        .map((item) =>
            item === item.toUpperCase()
                ? item.toLowerCase()
                : item.toUpperCase()
        )
        .join("");
}
console.log(stringTransformer("Example string"));

function encode(string) {
    const arr = ["a", 1, "e", 2, "i", 3, "o", 4, "u", 5];
    return string
        .split("")
        .map((item) =>
            arr.indexOf(item) !== -1
                ? (item = arr[arr.indexOf(item) + 1])
                : item
        )
        .join("");
}
console.log(encode("hello"));

function decode(string) {
    let arr = ["a", "1", "e", "2", "i", "3", "o", "4", "u", "5"];
    return string
        .split("")
        .map((item) =>
            arr.indexOf(item) !== -1 && Number(+item)
                ? (item = arr[arr.indexOf(item) - 1])
                : item
        )
        .join("");
}
console.log(decode("xphlwsuddxemdogbg"));

function matrixAddition(a, b) {
    let res = [];
    let subRes = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            subRes.push(a[i][j] + b[i][j]);
        }
        res.push(subRes);
        subRes = [];
    }
    return res;
}
console.log(
    matrixAddition(
        [
            [1, 2, 3],
            [3, 2, 1],
            [1, 1, 1],
        ],
        [
            [2, 2, 1],
            [3, 2, 3],
            [1, 1, 3],
        ]
    )
);

function whatCentury(year) {
    let str = String(Math.ceil(year / 100));
    let centery = str.slice(0, 2);
    if (+centery[1] === 0) {
        return centery + "th";
    } else if (+centery[1] === 1) {
        return centery + "st";
    } else if (+centery[1] === 3) {
        return centery + "rd";
    }
    return centery;
}
console.log(whatCentury(2000));

function findChildren(dancingBrigade) {
    let str = dancingBrigade
        .split("")
        .sort((a, b) => a.localeCompare(b))
        .join("")
        .toLowerCase();
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            res.push(str[i].toUpperCase());
            continue;
        }
        if (str[i] !== str[i - 1]) {
            res.push(str[i].toUpperCase());
            continue;
        }
        res.push(str[i]);
    }
    return res.join("");
}
console.log(findChildren("beeeEBb"));
// BbbEeee

function firstDup(s) {
    let newSet = Array.from(new Set(s));
    let obj = {};
    for (let i = 0; i < newSet.length; i++) {
        obj[newSet[i]] = 0;
    }
    let res = "";
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] += 1;
        // if (obj[s[i]] === 2) {
        //     res = s[i];
        //     con
        // }
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            res = key;
            break;
        }
    }
    return res;
}
console.log(firstDup("tweet"));

function diamond(n) {
    if (n % 2 === 0 || n <= 0) {
        return null;
    }
    let res = "";
    for (let i = 1; i <= n; i++) {
        res = res + " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
        if (i === n) {
            for (let i = n - 2; i > 0; i--) {
                res = res + " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
                i--;
            }
        }
        i++;
    }
    return res;
}
console.log(diamond(5));

function allContinents(list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
        if (!res.includes(list[i].continent)) {
            res.push(list[i].continent);
        }
    }
    return res.length > 4 ? true : false;
}
console.log(
    allContinents([
        {
            firstName: "Fatima",
            lastName: "A.",
            country: "Algeria",
            continent: "Africa",
            age: 25,
            language: "JavaScript",
        },
        {
            firstName: "Agustín",
            lastName: "M.",
            country: "Chile",
            continent: "Americas",
            age: 37,
            language: "C",
        },
        {
            firstName: "Jing",
            lastName: "X.",
            country: "China",
            continent: "Asia",
            age: 39,
            language: "Ruby",
        },
        {
            firstName: "Laia",
            lastName: "P.",
            country: "Andorra",
            continent: "Europe",
            age: 55,
            language: "Ruby",
        },
        {
            firstName: "Oliver",
            lastName: "Q.",
            country: "Australia",
            continent: "Oceania",
            age: 65,
            language: "PHP",
        },
    ])
);

function greetDevelopers(list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
        list[
            i
        ].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    }
    return list;
}
console.log(
    greetDevelopers([
        {
            firstName: "Sofia",
            lastName: "I.",
            country: "Argentina",
            continent: "Americas",
            age: 35,
            language: "Java",
        },
        {
            firstName: "Lukas",
            lastName: "X.",
            country: "Croatia",
            continent: "Europe",
            age: 35,
            language: "Python",
        },
        {
            firstName: "Madison",
            lastName: "U.",
            country: "United States",
            continent: "Americas",
            age: 32,
            language: "Ruby",
        },
    ])
);

function getFirstPython(list) {
    let str = "There will be no Python developers";
    for (let i = 0; i < list.length; i++) {
        if (list[i].language === "Python") {
            str = `${list[i].firstName}, ${list[i].country}`;
            break;
        }
    }
    return str;
}
// let list1 = [
//     {
//         firstName: "Mark",
//         lastName: "G.",
//         country: "Scotland",
//         continent: "Europe",
//         age: 22,
//         language: "JavaScript",
//     },
//     {
//         firstName: "Victoria",
//         lastName: "T.",
//         country: "Puerto Rico",
//         continent: "Americas",
//         age: 30,
//         language: "Python",
//     },
//     {
//         firstName: "Emma",
//         lastName: "B.",
//         country: "Norway",
//         continent: "Europe",
//         age: 19,
//         language: "Clojure",
//     },
// ];
console.log(getFirstPython(list1));

function countLanguages(list) {
    let res = {};
    for (let i = 0; i < list.length; i++) {
        if (!res[list[i].language]) {
            res[list[i].language] = 1;
        } else {
            res[list[i].language] += 1;
        }
    }
    return res;
}
var list1 = [
    {
        firstName: "Noah",
        lastName: "M.",
        country: "Switzerland",
        continent: "Europe",
        age: 19,
        language: "C",
    },
    {
        firstName: "Anna",
        lastName: "R.",
        country: "Liechtenstein",
        continent: "Europe",
        age: 52,
        language: "JavaScript",
    },
    {
        firstName: "Ramon",
        lastName: "R.",
        country: "Paraguay",
        continent: "Americas",
        age: 29,
        language: "Ruby",
    },
    {
        firstName: "George",
        lastName: "B.",
        country: "England",
        continent: "Europe",
        age: 81,
        language: "C",
    },
];
console.log(countLanguages(list1));

function isSameLanguage(list) {
    let language = list[0].language;
    return list.every((el) => el.language === language);
}
var list1 = [
    {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "JavaScript",
    },
    {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
    },
    {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 65,
        language: "JavaScript",
    },
];
console.log(isSameLanguage(list1));

function addUsername(list) {
    return list.forEach(
        (item) =>
            (item.username = `${item.firstName.toLowerCase()}${item.lastName[0].toLowerCase()}${
                2020 - item.age
            }`)
    );
}

function addUsername(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].username = `${list[i].firstName.toLowerCase()}${list[
            i
        ].lastName[0].toLowerCase()}${2020 - list[i].age}`;
    }
    return list;
}
var list1 = [
    {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 19,
        language: "Python",
    },
];
console.log(addUsername(list1));

function getAverageAge(list) {
    return Math.round(
        list.reduce((acc, cur) => acc + cur.age, 0) / list.length
    );
}
var list1 = [
    {
        firstName: "Maria",
        lastName: "Y.",
        country: "Cyprus",
        continent: "Europe",
        age: 30,
        language: "Java",
    },
    {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 70,
        language: "Python",
    },
];
console.log(getAverageAge(list1));

function formatWords(words) {
    if (!words) {
        return "";
    }
    let newArr = words.filter((item) => item.trim() !== "");
    if (newArr.length === 1) {
        return newArr[0];
    }

    let res = "";
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === "") {
            continue;
        }
        if (i + 1 === newArr.length) {
            res = res + ` and ${newArr[i]}`;
            continue;
        }
        if (i === newArr.length - 2) {
            res = res + ` ${newArr[i]}`;
            continue;
        }
        res = res + ` ${newArr[i]},`;
    }
    return res.trim();
}
console.log(formatWords(""));

function sortTheInnerContent(words) {
    let res = [];
    let arr = words.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 4) {
            res.push(arr[i]);
            continue;
        }
        res.push(
            arr[i][0] +
                arr[i]
                    .slice(1, -1)
                    .split("")
                    .sort((a, b) => a.localeCompare(b))
                    .reverse()
                    .join("") +
                arr[i][arr[i].length - 1]
        );
    }
    return res.join(" ");
}

console.log(sortTheInnerContent("sort the inner content in descending order"));

function averageString(str) {
    if (str.trim() === "") {
        return "n/a";
    }
    const nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let res = [];
    let str1 = str.split(" ");
    for (let i = 0; i < str1.length; i++) {
        if (nums.includes(str1[i])) {
            res.push(nums.indexOf(str1[i]));
        } else {
            return "n/a";
        }
    }
    const averageNum = Math.floor(res.reduce((a, b) => a + b) / res.length);
    return nums[averageNum];
}
console.log(averageString("four six two three"));

function dataReverse(data) {
    let res = [];
    let subRes = [];
    for (let i = 0; i < data.length; i++) {
        subRes.push(data[i]);
        if (subRes.length === 8) {
            res.push(subRes);
            subRes = [];
        }
    }
    return res.reverse().flat(Infinity);
}
console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 0,
    ])
);

function partsSums(ls) {
    let res = [];
    let sum = 0;
    for (let i = ls.length - 1; i >= 0; i--) {
        sum += ls[i];
        res.push(sum);
    }
    res.unshift(0);
    return res.reverse();
}
console.log(partsSums([0, 1, 3, 6, 10]));

const reverseSeq = (n) => {
    let res = [];
    for (let i = n; i > 0; i--) {
        res.push(i);
    }
    return res;
};
console.log(reverseSeq(5));

function greet(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet(("Daniel", "Daniel")));

Test.assertEquals(greet("Daniel", "Daniel"), "Hello boss");
Test.assertEquals(greet("Greg", "Daniel"), "Hello guest");

function order(words) {
    return words
        .split(" ")
        .sort((a, b) => +a.replace(/\D/g, "") - +b.replace(/\D/g, ""))
        .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

multiplicationTable = function (size) {
    let res = [];
    let arr = [];
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            arr.push(i * j);
        }
        res.push(arr);
        arr = [];
    }
    return res;
};
console.log(multiplicationTable(4));

var whatTimeIsIt = function (angle) {
    let hour = (angle - (angle % 30)) / 30;
    let min = Math.floor((angle % 30) * 2);
    if (hour > 0 && hour < 10) {
        hour = "0" + hour;
    }
    if (hour === 0) {
        hour = 12;
    }
    if (min < 10) {
        min = "0" + min;
    }

    return `${hour}:${min}`;
};
console.log(whatTimeIsIt(17.888631909538777));

var list1 = [
    {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 19,
        language: "Python",
    },
    {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 29,
        language: "JavaScript",
    },
    {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 39,
        language: "Ruby",
    },
    {
        firstName: "Noa",
        lastName: "A.",
        country: "Israel",
        continent: "Asia",
        age: 40,
        language: "Ruby",
    },
    {
        firstName: "Andrei",
        lastName: "E.",
        country: "Romania",
        continent: "Europe",
        age: 59,
        language: "C",
    },
    {
        firstName: "Maria",
        lastName: "S.",
        country: "Peru",
        continent: "Americas",
        age: 60,
        language: "C",
    },
    {
        firstName: "Lukas",
        lastName: "X.",
        country: "Croatia",
        continent: "Europe",
        age: 75,
        language: "Python",
    },
    {
        firstName: "Chloe",
        lastName: "K.",
        country: "Guernsey",
        continent: "Europe",
        age: 88,
        language: "Ruby",
    },
    {
        firstName: "Viktoria",
        lastName: "W.",
        country: "Bulgaria",
        continent: "Europe",
        age: 98,
        language: "PHP",
    },
    {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript",
    },
];
function isAgeDiverse(list) {
    let count = 0;
    if (list.length < 10) {
        return false;
    }
    let ages = [];
    for (let i = 0; i < list.length; i++) {
        ages.push(list[i].age);
    }
    let teens = 0,
        twenties = 0,
        thirties = 0,
        forties = 0,
        fifties = 0,
        sixties = 0,
        seventies = 0,
        eighties = 0,
        nineties = 0,
        centenarian = 0;
    let res = [
        teens,
        twenties,
        thirties,
        forties,
        fifties,
        sixties,
        seventies,
        eighties,
        nineties,
        centenarian,
    ];
    for (let age of ages) {
        if (age >= 13 && age <= 19) {
            teens++;
        } else if (age >= 20 && age <= 29) {
            twenties++;
        } else if (age >= 30 && age <= 39) {
            thirties++;
        } else if (age >= 40 && age <= 49) {
            forties++;
        } else if (age >= 50 && age <= 59) {
            fifties++;
        } else if (age >= 60 && age <= 69) {
            sixties++;
        } else if (age >= 70 && age <= 79) {
            seventies++;
        } else if (age >= 80 && age <= 89) {
            eighties++;
        } else if (age >= 90 && age <= 99) {
            nineties++;
        } else if (age >= 100) {
            centenarian++;
        }
    }
    return res.includes(0) ? false : true;
}
console.log(isAgeDiverse(list1));

sortme = function (names) {
    return names.sort((a, b) => a.localeCompare(b));
};
console.log(sortme(["do", "He", "Case", "Use", "Way", "Their", "call", "way"]));

function balance(left, right) {
    let rightSide = right
        .split("")
        .reduce((a, b) => a + (b === "!" ? 2 : 3), 0);
    let leftSide = left.split("").reduce((a, b) => a + (b === "!" ? 2 : 3), 0);

    return rightSide === leftSide
        ? "Balance"
        : rightSide > leftSide
        ? "Right"
        : "Left";
}
console.log(balance("!?!!", "?!?"));

function digPow(n, p) {
    let res = String(n)
        .split("")
        .map((val, index) => parseInt(val) ** (p + index))
        .reduce((a, b) => a + b, 0);
    return res % n === 0 ? res / n : -1;
}
console.log(digPow(695, 2));
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

Math.round = function (number) {
    if (!String(number).split("").includes(".")) {
        return number;
    }
    const remainder = String(number).match(/\.(\d+)$/)[1];
    const base = +String(number).match(/^(\d+)\./)[1];
    if (remainder && +remainder[0] >= 5) {
        return base + 1;
    }
    return base;
};

Math.ceil = function (number) {
    if (number == 0) {
        return 0;
    }
    const num = String(number).split("").includes(".");
    if (!num) {
        return number;
    } else {
        return +String(number).match(/^(\d+)\./)[1] + 1;
    }
};

Math.floor = function (number) {
    const num = String(number).split("").includes(".");

    if (!num && number !== 0) {
        return number;
    }
    if (number == 0) {
        return 0;
    }
    const base = +String(number).match(/^(\d+)\./)[1];
    if (num) {
        return base;
    } else if (num) {
        return 0;
    }
};
const num = 5;
console.log([
    "round " + Math.round(num),
    "ceil " + Math.ceil(num),
    "floor " + Math.floor(num),
]);
console.log(parseInt(1.99));

// Math.floor = number => parseInt(number)
// Math.round = number => Math.floor(number + 0.5)
// Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )

function createSpiral(N) {
    console.log(!Number.isInteger("N"));
    if (!Number.isInteger(N) || N < 1 || typeof N !== "number") {
        return [];
    }
    let result = new Array(N).fill().map(() => new Array(N).fill(""));
    let counter = 1;
    let fc = 0;
    let lc = N - 1;
    let fr = 0;
    let lr = N - 1;

    while (fc <= lc && fr <= lr) {
        for (let i = fc; i <= lc; i++) {
            result[fr][i] = counter;
            counter++;
        }
        fr++;
        for (let i = fr; i <= lr; i++) {
            result[i][lc] = counter;
            counter++;
        }
        lc--;
        for (let i = lc; i >= fc; i--) {
            result[lr][i] = counter;
            counter++;
        }
        lr--;
        for (let i = lr; i >= fr; i--) {
            result[i][fc] = counter;
            counter++;
        }
        fc++;
    }
    return result;
}
// console.log(createSpiral(1));
// console.log(createSpiral(3));
// console.log(createSpiral(0));
console.log(createSpiral(5.5));

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
