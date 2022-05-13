'use strict';

//to string
//1)
console.log(typeof(String(null))); //string
console.log(typeof(String(4))); //string


//2) канкатинация(сложение строк или строки с чем то)
console.log(typeof(5 + ''));

const num = 5;

console.log('https;//vk.com/catalog/' + num);//устарело

const fontSize = 26 + 15 +'px' + 26 + 15;
console.log(typeof(fontSize));


//To number

//  1)
console.log(typeof(Number('4'))); //неудобный способ

// 2)
console.log(typeof(+'4'));


// 3)

console.log(typeof(parseInt('15px', 10)));
//Функция parseInt() принимает строку в качестве аргумента
// и возвращает целое число в соответствии с указанным основанием 
//системы счисления.


let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN --> FALSE


// 1)
let switcher = null;
if (switcher) {
	console.log('Working...');
} // не стработает тюк null == false 

switcher = 1;
if (switcher) {
	console.log('Working...');
} //сработает тюк 1 это true



// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!'44'));





