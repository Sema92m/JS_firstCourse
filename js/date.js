"use strict";
const now = new Date();

//  console.log(now.getFullYear());
//  console.log(now.getMonth());//январь месяц номер 0, февраль 1
//  console.log(now.getDate());
//  console.log(now.getDay());//номерация с воскресения, те воскр = 0б пн = 1б суб = 6
//  console.log(now.getHours());
//  console.log(now.getUTCHours());//нулевой часовой пояс

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now.setHours(18));


let start = new Date();

for ( let i = 0; i < 10000000; i++) {
	let some = i ** 3;
}
let end = new Date();


console.log(`цикл отработал за ${end - start} миллисекунд`);