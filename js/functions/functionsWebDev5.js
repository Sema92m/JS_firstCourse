"use strict";

const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');


function f1(arr, myFunc, block) {
	arr[3] = arr[3] * 2;
	// out1.innerHTML = arr1;
	myFunc(arr, block);
}

function showArr(arr, block) {
	let out = '';
	for (let i = 0; i < arr.length; i++) {
		out += arr[i] + '_';
	}
	block.innerHTML = out;
}

function showArr2(arr, block) {
	let out = '';
	for (let i = 0; i < arr.length; i++) {
		out += arr[i] + '*';
	}
	block.innerHTML = out;
}

f1(arr1, showArr, out1);
f1(arr1, showArr2, out2);


///пример коллбека
function squad(item) {
	return item**2;
}
const arr2 = arr1.map(squad);
console.log(arr2);
showArr(arr2, out3);