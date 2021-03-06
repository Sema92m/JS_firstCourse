/*
ДОМАШКА
Создай новый проект, подключи к нему файл script.js и
в строгом режиме выведи в консоль фразу «Я учу JS»

Так же напиши в комментарии какой вариант вызовет ошибку:
*/
/*
//Вариант №1
console.log('Учим JS')

//Вариант №2
console.log('JS')
console.log('Учим')

//Вариант №3
console.log('Учим') console.log('JS')

//Вариант №4
console.log('Учим);
console.log('JS');
*/
//Ну и конечно же, учи теорию.

//=================================================

/*
// ТОЧКА С ЗАПЯТОЙ
console.log('Учим JS');
['Учим', 'JS'].forEach(alert);
*/

/*
ЗНАЧЕНИЯ
В JavaScript есть несколько типов значений (values):
фиксированные значения (литералы), значения констант
и значения переменных.
*/
/*
//Примеры литералов
25							// литерал целого числа
23.8						// литерал дробного числа
'JavaScript'			// литерал строки
"JavaScript"			// литерал строки
[]							// литерал массива
[15,7,89]				// литерал массива
{}							// литерал объекта
{
	name: 'Фрилансер',
	surname: 'по жизни'
}							// литерал объекта
(ab|bc)					// литерал регулярного выражения

// В языках программирования константы и переменные
// используются для хранения значений данных.
const MAX_VALUE = 17;				// константа
var section = 'JS';					// переменная
let arr = ['HTML','CSS','JS'];	// переменная
*/

/*
ОПЕРАТОРЫ
В JavaScript имеется очень много различных операторов.
Они обозначают операцию, которую нужно произвести.
*/
/*
//Примеры операторов
//* / + - = и т.д.
console.log('Учим' + ' JS');
*/

/*
ВЫРАЖЕНИЯ
Выражение (expression) - это комбинация значений,
переменных и операторов, которые либо присваивают
переменной значение, либо возвращают какое-то
значение без его присваивания.
*/

/*
//Примеры выражения
let num = 4; //выражение присвоения
console.log(num);
'Учим' + 'JS'; //выражение без присвоения
*/

/*
КЛЮЧЕВЫЕ СЛОВА
Инструкции JavaScript часто начинаются с ключевого слова
(keyword). Оно (ключевое слово) предназначено для того, чтобы
определить какое действие JavaScript необходимо выполнить.
*/
/*
//Примеры ключевого слова
let num = 'Учим JS'; //указывает браузеру создать переменную
console.log(num);
*/

/*
БЛОК ИНСТРУКЦИЙ
JavaScript инструкции можно сгруппировать с помощью так
называемого блока, по сути фигурных скобок {...}.
Как правило, используется в функциях, циклах и так далее..
*/
/*
//Примеры блока инструкций
function name() {
	console.log('Учим');
	console.log('JS');
}
name();
*/

/*
КОММЕНТАРИИ
Не все инструкции JavaScript являются выполняемыми.
Код после двойных косых черт // или
между /* и * / рассматривается как комментарий.
*/

// Это комментарий
/*
	Это многострочный
	комментарий
*/

/*
ЧУВСТВИТЕЛЬНОСТЬ К РЕГИСТРУ
JavaScript является регистрозависимым языком.
Это значит, что ключевые слова, переменные,
имена функций и другие идентификаторы языка
должны содержать одинаковые наборы прописных и строчных букв.
*/
//Пример
//console.log('Учим JS'); //Без ошибок
//conSole.log('Учим JS'); //Ошибка

/*
ПРОБЕЛЫ
Рекомендуется добавлять пробелы в инструкции,
чтобы сделать код более читаемым.
JavaScript игнорирует несколько пробелов.
*/
/*
//Следующие строки эквивалентны:
let str = 'Текст';
let str='Текст';
*/
/*
	Как правило пробелы принято
	размещать вокруг операторов: =, +, -, * и /.
*/

/*
ДЛИННА СТРОКИ
Для лучшей читаемости кода рекомендуется избегать строк
с длиной более 80 символов. Если JavaScript инструкция имеет
большую длину, то её желательно разорвать.
В большинстве случае разрыв инструкции лучше осуществить
после какого-нибудь оператора.
*/
/*
//Пример
document.getElementById('text').innerHTML =
	'Текст для некого поля';
*/

/*
КАВЫЧКИ
В JavaScript могут использоваться одинарные,
двойные либо обратные кавычки, подробнее о них поговорим
в выпуске про строки. На данный момент нужно помнить,
что открытая кавычка без закрытой вызовет ошибку и наоборот.
*/

/*
//Пример
console.log('Учим JS'); // Одинарные
console.log("Учим JS"); // Двойные
console.log(`Учим JS`); // Обратные
*/

/*
Строгий режим "use strict";

console.log('Учим JS');

//"use strict" ниже игнорируется -
//он должен быть в первой строке

"use strict";

// строгий режим НЕ активирован
*/

// [] + false - null + true
// console.log([] + false - null + true);

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2);
// console.log(typeof([] + 1 + 2));

// alert( "123r5u"[3] );

// 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null && 0 && undefined);

// console.log(!!( 1 && 2 ) === (1 && 2));

// alert( null || 2 && 3 || 4 );

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(!!(a == b));

// alert( +"Infinity" );

// console.log("ёжик" > "Ёжик");

// console.log(0 || "" || 2 || undefined || true || false);


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true,
// };



// function isOpen(prop) {
//     let answer = '';
//     prop == false ? answer = 'Закрыто' : answer = 'Открыто';

//     return answer;
// }
// console.log(isOpen(restorantData.openNow));



// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if ((parseFloat(fDish.price) + parseFloat(sDish.price)) < parseFloat(average)) {
//         return 'Цена ниже средней';
//     }  if ((parseFloat(fDish.price) + parseFloat(sDish.price)) == parseFloat(average)) {
//         return 'Цена средняя';
//     } else {
//         return 'Цена выше средней';
//     }
// }
// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));






// function transferWaitors(data) {
//     const copy = JSON.parse(JSON.stringify(data));
// 	copy.waitors[0] = ({name: 'Mike', age: 32});
//     return copy;
// }

// transferWaitors(restorantData);


// console.log(transferWaitors(restorantData));
// console.log(restorantData.waitors);


// const fruits = ["Apple", "Banana", "Orange"];
// for (a1 of fruits) {
//   console.log(a1);
// }

// let arr = [1, 2, 3]; // массив — пример итерируемого объекта

// for (let value of arr) {
//   alert(value); // 1, затем 2, затем 3
// }

// let i = 0;
// while
//  (i < 10) {
//   console.log(i);
//   i++;
// }


// let i = 0;
// while (i < 10) {
//   console.log(i);
  
// i = i + 2;
// }


// let HitsStorage = 0;

// HitsStorage = function () {
//         var possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         var result = '';
//         for (var i = 0; i < 10; i += 1) {
//             result += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
//         }
//         return result;
//     };
    
//     console.log(HitsStorage());


// var a = 5;
// function f() {
// 	if (a) {
// 		console.log(a);
// 		var a =10;
// 	}
// }
// f();
 

// console.log(a);
// var a = 7;

// console.log(b);
// var b = 5;

