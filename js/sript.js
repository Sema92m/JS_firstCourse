'use strict';
            //intro
// alert('Hello');
// const result = confirm("Are you here?");
// console.log(result);
// const answer = +prompt("Вам есть 18?", '');
// console.log(answer + 5);
// const user = 18;
// alert(`Hello ${user}`);
// let incr = 10,
//     decr = 10;
// // incr++;
// // decr--;
// console.log(++incr);
// console.log(decr--);
// console.log(5%2);
            //intro
//--------------------------------------------------





             // //lesson1
// const numberOfFilms = prompt('Сколько фильмов вы посмотрели?','');
// console.log(numberOfFilms);

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Last film?',''),
// 		b = prompt('Rating?',''),
// 		c = prompt('Last film?',''),
// 		d = prompt('Rating?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
               // //lesson1


//---------------------------------------



              //lesson2 (nr20)
// if (1) {
// 	console.log('ok');
// } else {
// 	console.log('error');
// }

// const num = 101;

// if (num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Much');
// } else {
// 	console.log('Ok');
// }

// const num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');


// const num = 111;
// switch (num) {
// 	case 49:
// 		console.log('Nok');
// 		break;
// 	case 100:
// 		console.log('Nok');
// 		break;
// 	case 50:
// 		console.log('OK');
// 		break;
// 	default:
// 		console.log('not today');
		
// }



              //lesson 2 (nr 20)




//---------------------------------------


              //lesson 21 

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('ok');
// } else {
// 	console.log('Nok');
// }


// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

//т.к нету колы то левая часть *или* будет false.  В правой части fries === 3 и 
// это true и nuggets(должно быть 1 или больше) 2шт,
// поэтому nuggets тоже true).
// Оператор && вернет первое ложное значение но если его нету то значение ПОСЛЕДНЕГО АРГУМЕНТА!. 
// оператор || сравнивает false c ДВУМЯ nuggest и вернёт правду. Ответ: 2


           //lesson 21 


		   //---------------------------------------


              //lesson 22 
//    let hamburger;
//    const fries = NaN;
//    const cola = 0;
//    const nuggets = 2;
	
	
//    if (hamburger || cola || fries === 3 || nuggets) {
// 	  console.log('Done!');
//    } else {
// 	console.log('Nok');
//    }

// let hamburger = 1;
// const fries = NaN;
// const cola = 1;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
// 	console.log('Nok');
// }


					//lesson 22 



//---------------------------------------

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// const age = 91;

// if ( age >= 14 && age <= 90) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }



// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// const age = 91;

// if (age >= 14 && age <= 90) {
//     console.log('В диапазоне 14-90');
// } else {
//     console.log('Вне диапазона 14-90');
// // }

// const age = 55;

// if (age < 14 || age > 90) {
//     console.log('Вне диапазона 14-90');
// } else {
//     console.log('В диапазоне 14-90');
// }


// if (-1 || 0) alert( 'first' );   //-1 это true, alert will work
// if (-1 && 0) alert( 'second' );  //0=false, won't work
// if (null || -1 && 1) alert( 'third' );//null|| -1   ->  -1=true , alert will work





// Проверка логина
// важность: 3
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc –
// показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».
// Блок-схема:


// let login = prompt('who are you?', ['Admin']);

// if (login === 'Admin') { 

//     let pass = prompt('Password','');

//     if (pass === '1111') {
//         alert('Hello');
//     } else if (pass == '') {
//         alert('Cancel');
//     } else {
//         alert('Incorrect password');
//     }

// } else if (login == null || login == '') {
//     alert('Cancel');
// } else {
//     alert('I dont know who you are');
// }



//перешал сам 2й раз, добавил поведение при вводе пустой строки вместо пароля

let login = prompt('who are you?', ['Admin']);

if (login === 'Admin') {

    let password = prompt('Password?',''); 

        if (password === '1111') {
        alert('Hello');
    } else if (password == null) {
        alert('Cancel');
    } else if (password == '') {
        alert('Incorrect pasword');
    } else {
        alert('Incorrect pasword');
    }
} else if (login == null || login == '') {
    alert('Cancel');
} else {
    alert('I dont know who are you');
}
