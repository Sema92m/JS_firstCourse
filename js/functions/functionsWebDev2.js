"use strict";

function showSum3(x, y, elem = ".out-1") {
    console.log(arguments);
    document.querySelector(elem).textContent = x + y;
}

showSum3(10, 15, ".out-2");

function showSumAll() {
    console.log(arguments);
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
	let sum = Array.from(arguments).reduce( (accum, item) => accum += item);
	console.log(sum);
}
showSumAll(4, 5, 6);



function showSumAll2(...args) {
    console.log(args);
	let sum = args.reduce( (accum, item) => accum += item);
	console.log(sum);
}
showSumAll2(4, 5, 6, 22);


//функция как агрумент

function showAll(res) {
	document.querySelector('.out-1').innerHTML = `<b>${res}</b>`;
	//получает агрумент и выводит его в блок оут1 обернув в тег b
}

function showSumAll3(num, drawFunction) {
	drawFunction(num);
}

showSumAll3(45, showAll);