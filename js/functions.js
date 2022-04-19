/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';




// const numberOfFilms = prompt('Сколько фильмов вы посмотрели?','');
// console.log(numberOfFilms);

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// for (let i = 0; i < 2; i++){
// 	const a = prompt('Last film?',''),
// 	b = prompt('Rating?','');

// 	personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// let num = 20;
// function showFirstMessage(text) {
// 	console.log(text);
	
// 	console.log(num);
// }
// showFirstMessage("hello");
// console.log(num);


// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 5));
// console.log(calc(3, 4));
// console.log(calc(6, 7));


// function ret() {
// 	let num = 50;
// 	//

// 	return num;
// }

// const anotherNum = ret();
// console.log (anotherNum);


// const logger = function() {
// 	console.log('Hello');
// };

// logger();






// const usdCurr = 25;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
// 	return curr * amount;
// }

// function promotion(result) {
// 	console.log(result * discount);
// }
// promotion(convert(400, usdCurr));




// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// sayHello();