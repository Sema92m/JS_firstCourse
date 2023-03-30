"use strict";

// const arr = [1, 2, 3,6, 8];

// // arr.pop(); // removes the last element
// // arr.push(10, -2, 'a'); // adds elements to the and of an array

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// //переборка
// arr.forEach(function(item, i, arr) {//item это (любое) обозначение элемента в массиве
// 	// i это номер по порядку, arr это ссылка на нужный массив
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });
//выведет
//0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8

// for ( let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]); //перебор массива с выводом всех значений в консоль
// 	//т.е начинаем с 0го номера массива, продолжаем цикл пока не будет достигнут
// 	//последний номер  arr.length, шаг +1
// }
// for (let value of arr) {
// 	console.log(value);//тоже самое что и метод выше
// }

// const str = prompt('Add products', '');
// const products = str.split(','); //формирует массив из ответа пользователя(в данном случае товары через запятую)
// console.log(products);

// const str = prompt('Add products', '');
// const products = str.split(', '); //формирует массив из ответа пользователя(в данном случае товары через запятую)
// console.log(products.join('; '));//формирует строку из массива полученного строкой выше

//СОРТИРОВКА
// const str = prompt('Add products', '');
// const products = str.split(', ');
// products.sort(); //сортирует ответы пользователя по алфовиту()
// //метод сортирует данные как СТРОКИ!
// // массив [2, 8, 13, 10, 26] упорядочет как [10, 13, 2 ,26, 8]
// console.log(products.join('; '));

// const arr = [1, 22, 31, 6, 88];
// arr.sort(compareNum); //сравнение чисел
// console.log(arr); //(5) [1, 6, 22, 31, 88]

// function compareNum(a, b) {
//     return a - b;
// }

//Песевдомассив


    

const arr = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
    
}

console.log(showFamily(arr));





const arr1 = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr1) {
    arr1.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(arr1);


