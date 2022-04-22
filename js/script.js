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



//перерешал сам 2й раз, добавил поведение при вводе пустой строки вместо пароля

// let login = prompt('who are you?', ['Admin']);

// if (login === 'Admin') {

//     let password = prompt('Password?',''); 

//         if (password === '1111') {
//         alert('Hello');
//     } else if (password == null) {
//         alert('Cancel');
//     } else if (password == '') {
//         alert('Incorrect pasword');
//     } else {
//         alert('Incorrect pasword');
//     }
// } else if (login == null || login == '') {
//     alert('Cancel');
// } else {
//     alert('I dont know who are you');
// }

//                lesson 22  Циклы While

// let num = 50;

// пока условие выполняется будем делать какието действия, в данном случае прибавлять 1 до получения 55
// while (num <= 55) {
//     console.log(num);
//     num++;
// }



// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// let i = 1 задаём переменную, i < 8 условие при котором цикл престанет работать, i++ шаг цикла

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }  тут мы сразу показываем переменную num (это будет первый цикл) а потом делаем 
//еще 6 циклов сложения ++ тк ориентируемся на переменную 'i'

// заканчивает досрочно
// for (let i=1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }
//     console.log(i);
// }

//пропускает не нужный шаг но не прерывает цикл
// for (let i=1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }


//                    lesson 22




//--------------------------




//                    lesson 23


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }
//answer
// 0--первый цикл i
// 0 -первый цикл j
// 1--2 цикл j
// 2--3 цикл j
// 1-- 2й цикл i
// 0 первый цикл j второго цикла i
// 1
// 2
// 2 --3 цикл i
// 0 второй цикл j третьего цикла i
// 1
// 2


// let result = '';
// const lengt = 7;

// for (let i = 1; i < lengt; i++) {

//     for (let j = 0; j < i; j++) {
//         result = "*";
//         }

//     result += '\n'; // += добавлям каждый раз кусочек строки , '\n' это перенос на новую строку
// }
// console.log(result);




// задача 1
// let number = 5;

// while (number <=10 ) {
//     console.log(number);
//     number++;
// }

//задача 2
// for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }


// //задача 3 (вывод четных)
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 1) {// если в скобках поставить 0 вместо 1, то будут нечетные
//          continue;
//      } else {
//         console.log(i);
//      } 
// }

//задача 4 

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
    


// let i = 2;

// while (i <= 16) {   //проверяем проходит ли 2 в условие
//     if (i % 2 === 0) { //если остаток от деления 0 то, false
//         i++; 
//         continue; //пропускаем и переходим  на следующую итерацию ( 402: i++;)
//         } else {
//          console.log(i); // в консоль не выводим ничего т.к 2 делиться без остатка
//     }
//     i++; //прибовляем к let i = 2 единицу, получаем 3 и начинаем цикл сначала с ТРОЙКОЙ
// }

//задача 5
// заполнить массив цифрами от 5 до 10 включительно
// function fifthTask() {


//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
    

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }

    // console.log(result);
    // return result;


    

//----

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for  (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = data[i] + " - done";
//     }
// }
// console.log(data);
// return data;


///разворачивает массив наоборт
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result);
// return result;


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = prompt('Сколько фильмов вы посмотрели?','');
// console.log(numberOfFilms);

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Last film?',''),
// 	      b = prompt('Rating?','');

    // if (a != null && b!= null && a != '' && b!= '' && a.length < 50) {
    //     personalMovieDB.movies[a] = b;
    //     console.log('done');
    // } else {
    //     console.log('error');
    //     i--;
    // } 

//     if (a == null && b == null && a == '' && b == '' && a.length > 50) {   ///variant 2
//         personalMovieDB.movies[a] = b;
//         console.log('Error121');
        
//     } else {
//         console.log('1Done');
        
//     } 

// }

// if (personalMovieDB.count < 10) {
//     console.log('too little');
// }   else if (personalMovieDB.count >= 10 || personalMovieDB.count <=30) {
//     console.log('You are classical viewer');
// }   else if (personalMovieDB.count > 30) {
//     console.log('You are classical CINEPHILE');
// }   else {
//     console.log('ERROR');
// }


// console.log(numberOfFilms);



//   let value = prompt('Какое "официальное" название JavaScript?', '')
//   if (value == 'ECMAScript') {
//       alert('Yes!')
//   } else {
//       alert('no!')
//   }
// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else if (value == null || value == '') {
//     alert( 'error' );
// } else {
//   alert( 0 );
// }
// let a = 0;
// let b = 3;
// let result = (a + b < 4) ? 'Мало' : 'Много'; 

// alert(result);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// let login = prompt('ty kto');
// let message = (login == 'Сотрудник') ? 'Привет' :
//         (login == 'Директор') ? 'Здравствуйте' :
//         (login == '') ? 'Нет логина':
//         '';

//         alert(message);



// function sayHello(name) {
//     return `Привет ${name}!`;
//    }
//    alert((name))

 

//    function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// sayHello('Semi');

// function createMassage(text, name) {
//     return `${text}, ${name}!`;
// }

// function showMassage(message) {
//     console.log(message);
// }d

// function initMessage(text, name) {
//     showMassage(createMassage(text, name));
// }

// initMessage('Den', 'Fer');



// function createMassage(text, name) {
//     return `${text}, ${name}!`;
// }

// function showMassege(massage) {
//     console.log(massage);
// }
// function initMassage(text, name) {
//     showMassege(createMassage(text, name));
// }

// initMassage('Dew', 'Asa');
// function getName(name) {
//     return `Hello, ${name}`;

// }
// console.log(getName('Ewa'));
    


// function createMassage1(text, name) {
//     return `${text}, ${name}!`;
// }

// function showMassege1(massege1) {
//     console.log(massege1);
// }

// function initMassage1(text, name) {
//     showMassege1(createMassage1(text, name));
// }

// initMassage1('Hello', 'Men');
// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// for (let num = 1; num <= 5; num++) {
//     console.log(num);
// }


// for (let num = 20; num >= 10; num--) {
//     if (num == 12) break;
//     console.log(num);
// }


// for (let num = 2; num <= 10; num++) {
//     console.log(num);
// }

// let num = 2;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }



// function sayHello(name) {
    
//     return 'Hello,' `${name}`;

// }
// sayHello('Ass');


// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// console.log(sayHello('A'));


// function returnNeighboringNumbers(num) {
//     return [num -1, num, num +1];
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num *  }---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// } 


// console.log(getMathResult(5,4));



// const str = "teSt";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf('fruit'));


// const logg = "Hello world";
// // console.log(logg.slice(6, 11));
// // console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));
// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test));//переводит число в дургую систему  измерения(из строки в число)
// console.log(parseFloat(test));//возращает в десятичном варианте, возващает с точкой


// Volume of cube V = s**3 -- объём куба;

// s - сторона;

// Surface area of cube  A = 6 * s**2;


// не получилось
// let number = 3;
// function calcCubeVolume() {
//     return number ** 3;
// }
// console.log(parseInt(calcCubeVolume()));


// function calcCubeArea() {
//     return 6 * number ** 2;
// }
// console.log(parseInt(calcCubeArea()));



// function showVolumeAndArea() {
//     if (calcCubeArea() <= 0 || calcCubeVolume() <= 0) {
//         console.log ('Error');
//     }
//     console.log((calcCubeArea()), calcCubeVolume());
// }




// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return 'Error';
//     }

//     let volume = 0;
//         area = 0;
        
//     volume = length ** 3;
//     area = (length ** 2) * 6;
//     return `Volume of cube: ${volume}, areaa of cub: ${area}`;
// }
// calculateVolumeAndArea(5);
// console.log(calculateVolumeAndArea(15));



// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return 'Error';
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return 'incorrect number';
//     }

//     for (let i = 4; i <= 36 ; i= i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }

// }
// console.log(getCoupeNumber(25));


//coding exercise nr 8
// function getTimeFromMinutes(numberMin) {
//     if (typeof(numberMin) !== 'number' || numberMin < 0 || !Number.isInteger(numberMin)) {
//         return 'Error';
//     }
//     let minute = 0;
//         hour = 0;

//         minute = numberMin % 60;
//         hour = (numberMin - (numberMin % 60)) / 60;
    
//     //окончания слова ЧАС
//     if (hour === 1) {
//         return `Это ${hour} час и ${minute} минут`;
//     }
//     if (hour !== 1 && hour <= 4) {
//         return `Это ${hour} часа и ${minute} минут`;
//     }
//     if (hour >= 5) {
//         return `Это ${hour} часов и ${minute} минут`;
//     }
// }
// console.log(getTimeFromMinutes(189));




//решение от Ивана
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(Math.max(9, 3, ''));


// function findMaxNumber(a, b, c, d) {
    
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' || 
//         typeof(c) !== 'number' || 
//         typeof(d) !== 'number') {
//         return 'Error';
//     } else {
//         return Math.max(a, b, c, d);
//     } 
// }

// console.log(findMaxNumber(1, 77, -4, 8));

//пишем в фукцию номер, выводит число фибоначчи по этим номером в последовательности
function fib(n) {
    let a = 1;
    let b = 1;
        
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(10));
//Цикл начинается с i=3, потому что первое и второе значения последовательности заданы a=1, b=1.


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(10));