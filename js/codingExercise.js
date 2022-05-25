/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов уже посмотрели?", "");
        while (
            personalMovieDB.count == "" ||
            personalMovieDB.count == null ||
            isNaN(personalMovieDB.count)
        ) {
            personalMovieDB.count = +prompt(
                "Сколько фильмов уже посмотрели?",
                ""
            );
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt(
                    "Один из последних просмотренных фильмов?",
                    ""
                ).trim(), //удаляет пробелы
                b = prompt("На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}?`);
            if (genres === "" || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели вовсе");

                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};


//coding exercise 13

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
    volume = data.height * square;

    if (data.budget - (volume * data.moneyPer1m3) >= 0) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

isBudgetEnough(shoppingMallData);
console.log(isBudgetEnough(shoppingMallData));



// coding exercise 15

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
// coding exercise 15


// const name1 = ["Jacob", "Alex"];

// function likes() {
//     for (let names2 of name1.values()) {
//         console.log(names2);
//       }
//     // console.log(Object.map([key, value]));
// }
// likes(name1);


// const names = ['Max', 'John', 'Mark'];

// function likes(names) {
//     if (names.length == 0) {
//       return 'no one likes this';
//   }
//   if (names.length == 1) {
//       return names.toString() + `${" likes this"}`;
//   }
//  if (names.length == 2) {
//       return names[0].toString() + `${" and "}` + names[1].toString() + `${" like this"}`;
//   }
//  if (names.length == 3) {
//       return names[0].toString() + `${", "}` + names[1].toString() + `${" and "}` + names[2].toString() + `${" like this"}`;
//   }
//   if (names.length >= 4) {
//       return names[0].toString() + `${", "}` + names[1].toString() + `${" and 2 others like this"}`;
//   }
//   if (names.length < 4) {
//       return names.toString();
//   }
// }
// likes(names);




//coding exercise 16

// function factorial(a) {
//     if (a === 1) {
//         return a;
//     }
//     if (a <= 0) {
//         return 1;
//     }
//     if (a % 1 !== 0 && !isNaN(a)) {
//         return 'Error';
//     } else {
//         return a * factorial(a - 1);
//     }
// }

// console.log(factorial(7));