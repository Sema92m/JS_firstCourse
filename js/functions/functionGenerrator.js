'use strict';

function* count(n) {
	for (let i = 0; i < n; i++) {
		yield i;
	}
}

for (let k of count(7)) {

	console.log(k);
}
//запустит макс кол во раз

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);