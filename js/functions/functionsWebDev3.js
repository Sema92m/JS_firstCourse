"use strict";
//прерывание функции
//эмулируем indexOf

// function indexOfEmul(arr, num) {
// 	for (let i = 0; i < arr.lenght; i++) {
// 		if (arr[i] === num) return i;
// 	}
// 	return -1;
// }

// let result = indexOfEmul([1, 2, 3, 4], 4);
// console.log(indexOfEmul([1, 2, 3, 4], 4));



// //пользователь вводит возраст
// document.querySelector('.b-4').addEventListener('click',
// function() {
// 	let year = +document.querySelector('.i-4').value;
// 	if(isNaN(year)) return;
// 	if(year <=0 || year > 140) return;
// 	document.querySelector('.out-4').innerHTML = 2021 - year;
// });


// ex 5 сумма
console.group('example 5');
const arr5 = [[3,4,5], [6,7,8]];
function t5() {
	let s = 0;
	for (let i = 0; i < arr5.length; i++) {
		s += sum(arr5[i]);
	}
	return s;
}

function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}
console.log(t5());
console.groupEnd();


console.group('example 7');
const arr7 = [[3,4,5], [6,7,9], [7,7,1], [2,2]];
const evenArr7 = arr7.filter(function(item) {
	return (sum(item) % 2 === 0);
});

console.log(evenArr7);
console.groupEnd();


///return  функции
console.group('example 7');


function t8() {
	return sum;
}

let s = t8();
console.log(s ([10,20,30]));
console.groupEnd();