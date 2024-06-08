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
