"use strict";
//spread ... usage

const a = [3, 4, 5];
const b = ["c", "d", "e"];

//merge

const c = [...a, ...b];
console.log(c);

//clone
const d = [...b];
console.log(d);

//string->array transform

const e = [..."hello"];
console.log(e);

//set->array transform

const f = [...new Set([1, 1, 2, 3, 4, 2, 1, 8])];
console.log(f);

function test() {
    console.log(...arguments);
}
test(3, 4, 5, 6, 7);

//node list
//queySelectorAll()

let p = document.querySelectorAll("p");
console.dir(p);
console.log([...p]);
