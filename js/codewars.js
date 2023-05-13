// 7 kyu
// Find the Missing Number

// let a = [9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91,
// 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13, 64,
// 56, 39, 48, 92, 84, 94, 87, 90, 77, 63, 32, 68, 37, 96, 23, 0, 95, 1, 52,
// 78, 6, 57, 50, 2, 46, 19, 76, 47, 14, 4, 3, 29, 17, 11, 21, 24, 74, 65, 12,
//  83, 28, 41, 66, 7, 58, 55, 51, 43, 97, 42, 86, 49, 31, 20, 75, 70, 34, 33,
//   38, 8, 15, 62, 35, 61, 99, 16]; // 26

// function missingNo(nums) {
// return  5050 - (nums.reduce(function(a,b) {return a+ b}));

// }
// console.log(missingNo(a));

// function missingNo(nums) {
// 	return 5050 - nums.reduce((a, b) => a + b, 0)
//   }

//   missingNo =(n)=> {
//     for(i=0;i<=100;i++){
//         if(!n.includes(i)){
//             return i
//         }}}

// 7 kyu
// Return the Missing Element
// let ar = [0,5,1,3,2,9,7,6,4];
// function getMissingElement(superImportantArray){
// 	return 55 - superImportantArray.reduce(function(a,b) {return a+b});
// 	}

// 	console.log(getMissingElement(ar));

// 7 kyu
// Even numbers in an array
// let array = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26];
// let number = 3;

// function evenNumbers(array, number) {
//     let a = array.filter(function (item) {
//         if (item % 2 === 0 || item % 2 === -0) {
//             return item;
//         }
//     });

//     return a.slice(-number);
// }
// console.log(evenNumbers(array, number));

// const evenNumbers = (array, number) => array
// .filter(item => item % 2 === 0).slice(-number);

// 7 kyu
// Find the vowels
// let word = "apPle";
// function vowelIndices(word){
// 	let a = word.split('');

// 	let b = word.match((/[aeiouy]/gi));
// 	return b;
//   }
//   console.log(vowelIndices(word));

// 8 kyu
// Find Nearest square number
// let c = 26;
// function nearestSq(n){
// 	let b = Math.round(Math.sqrt(n));
// 	return b * b;
// }

// console.log(nearestSq(c));

// function nearestSq(n){
//     return Math.round(n**0.5)**2
// }

// 8 kyu
// Beginner Series #4 Cockroach
// let speed = 1.08;
// function cockroachSpeed(s) {
// 	return Math.floor((s * 100000) / 3600);
// }

// console.log(cockroachSpeed(speed));
// const cockroachSpeed = s => Math.floor(s / 0.036);

// 8 kyu
// Do I get a bonus?
// let salary = 1000;
// let bonus = true;
// function bonusTime(salary, bonus) {
// 	if (bonus === true) {
// 		return `${"£"}` + salary * 10;
// 	} if (bonus === false) {
// 		return `${"£"}` + salary;
// 	}

// 7 kyu
// Fix My Phone Numbers!

// function isItANum(str) {
// 	let a = str.replace(/[\s\D]/gi,'');

// 	if( a[0] == '0' && a.length == 11) {
// 		return a
// 	} else {
// 		return "Not a phone number"
// 	}
// 	}

// console.log(isItANum("S:)0207ER GQREG88349F82!efRF)"))

// 7 kyu
// esreveR

// reverse = function(array) {
// 	return array.reverse()
//   }

//   console.log(reverse([645, 801, 942, 886, 950, 103, 8, 32, 251]))

// 7 kyu
// Sum even numbers

// function sumEvenNumbers(input) {
// 	let a = input.filter(function(number) {
// 		return number % 2 == 0
// 	})

// 	if (input.length == 0 || a.length == 0) {
// 		return 0
// 	} else {
// 			let b = a.reduce(function(sum, current) {
// 				return sum + current
// 			})
// 			return b
// 	}
//  }

//   console.log(sumEvenNumbers([1]))

// /* 15:36 26-10-2022 */
// /*  */
// document.querySelector("");
// console.log("")

// example sum(1)(2)(3)(5)
// function sum(n){
// 	console.log(n)
// 	return function(a){
// 		return sum(a + n)
// 	}
// }

// sum(5)(1)(3)

// function d(){
// 	b = 5
// 	for(let i = 1; i <= b; i++) {
// 		console.log("*".repeat(i))
// 	}
// }
// d()
// console.log(typeof(null))

// Дан массив объектов. Отсортировать товары:
// 1) по количеству отзывов.
// 2) по цене (если цены две, то брать newUan)

// const result = document.querySelector(".result");
// const btnFeed = document.querySelector(".feed");
// const btnPrice = document.querySelector(".price");

// btnFeed.addEventListener("click", () => {
//     // sortByRevievs(items)
// });
// btnPrice.addEventListener("click", () => {
//     // sortByPrice(items)
// });

// const items = [
//     {
//         ratingRevievs: "264 отзыва",
//         price: { oldUan: "4 333 грн", newUan: "3 799 грн" },
//         name: "Motorola MOTO G4 (XT1622) Black",
//     },
//     {
//         ratingRevievs: "1355 отзывов",
//         price: "4 999 грн",
//         name: "Samsung Galaxy J7 J700H/DS",
//     },
//     {
//         ratingRevievs: "426 отзывов",
//         price: "5 199 грн",
//         name: "Samsung Galaxy J5 (2016)",
//     },
//     {
//         ratingRevievs: "403 отзыва",
//         price: "4 349 грн",
//         name: "Xiaomi Redmi Note 4X 3/32GB Black",
//     },
//     {
//         ratingRevievs: "488 отзывов",
//         price: "6 199 грн",
//         name: "Samsung Galaxy J7 (2016) J710F/DS Gold ",
//     },
//     {
//         ratingRevievs: "198 отзывов",
//         price: { oldUan: "3 495 грн", newUan: "2 995 грн" },
//         name: "Lenovo K5 (A6020a40) Silver",
//     },
//     {
//         ratingRevievs: "352 отзыва",
//         price: { oldUan: "9 799 грн", newUan: "7 999 грн" },
//         name: "Apple iPhone 5s 16GB Space Gray",
//     },
// ];

// function sortRevievs(arr) {
//     const newArr = JSON.parse(JSON.stringify(arr));
//     newArr.forEach((item) => {
//         item.ratingRevievs = item.ratingRevievs.replace(/\D/g, "") * 1;
//     });
//     newArr.sort((a, b) => (a.ratingRevievs > b.ratingRevievs ? 1 : -1));

//     result.innerHTML = "";

//     newArr.forEach((item) => {
//         if(typeof(item.price) === 'string') {
//             item.price = item.price.replace(/\D/g, "") * 1;
//         } else {
//             item.price = item.price.newUan.replace(/\D/g, "") * 1;
//         }
//         result.innerHTML += `
//             <div>${item.name}</div>
//             <div style="background-color: lightgreen">${item.ratingRevievs} revievs</div>
//             <div>${item.price} usd.</div>
//             `;
//     });
// }

// function sortPrice(arr) {
//     const newArr = JSON.parse(JSON.stringify(arr));
//     newArr.forEach((item) => {
//         if (typeof item.price === "string") {
//             item.price = item.price.replace(/\D/g, "") * 1;
//         } else {
//             item.price = item.price.newUan.replace(/\D/g, "") * 1;
//         }
//     });
//     newArr.sort((a, b) => (a.price > b.price ? 1 : -1));

//     result.innerHTML = "";
//     newArr.forEach((item) => {
//         result.innerHTML += `
//     <div>${item.name}</div>
//     <div style='background-color: orange'>${item.price} usd.</div>
//     <div>${item.ratingRevievs}</div>
//     `;
//     });
//     // console.log(newArr);
// }

// btnPrice.addEventListener("click", () => {
//     sortPrice(items);
// });
// btnFeed.addEventListener("click", () => {
//     sortRevievs(items);
// });

// function sortByPrice(array) {
//     const temp = JSON.parse(JSON.stringify(array));
//     temp.forEach(item => {
//         if (typeof(item.price) === 'string') {
//             item.price = +item.price.replace(/\D/g,'')
//         } else {
//             item.price = item.price.newUan.replace(/\D/g,'')
//         }
//     });
//     temp.sort((a,b) => a.price > b.price ? 1 : -1)
//     result.innerHTML = '';
//     temp.forEach(item => {
//         result.innerHTML += `
//         <div>${item.name}</div>
//         <div>${item.ratingRevievs}</div>
//         <div>${item.price}</div>
//         `
//     })
// }

// function sortByRevievs(array) {
//     const temp = JSON.parse(JSON.stringify(array));
//     temp.forEach(item => {
//         item.ratingRevievs = +item.ratingRevievs.replace(/\D/g,'')
//     })
//     temp.sort((a,b) => a.ratingRevievs > b.ratingRevievs ? -1 : 1);
//     result.innerHTML = '';
//     temp.forEach(item => {
//         if (typeof(item.price) === 'string') {
//             item.price = +item.price.replace(/\D/g,'')
//         } else {
//             item.price = item.price.newUan.replace(/\D/g,'')
//         }
//         result.innerHTML += `
//         <div>${item.name}</div>
//         <div>${item.price}</div>
//         <div>${item.ratingRevievs}</div>
//         `
//         })
//     }

// 7 kyu
// Check the exam

// function checkExam(array1, array2) {

//    }

//    console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//    return mpg*fuelLeft >= distanceToPump;
//  };

//  console.log(zeroFuel(50,25,2));

// var countSheep = function (num){
//    let result = '';
//    for( let i = 1; i <= num; i++) {
//       result += `${i} sheep...`;
//    }
//    return result;
// };

// console.log((countSheep(5)));

// var min = function(list){

// return Math.min(...list);
// };

// // var max = function(list){

// //    return list[0];
// // }
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// function points(games) {
//   let sum=0;
//   for (let i=0; i<games.length; ++i)
//   {

//       if(games[i][0] > games[i][2]) {
//          sum += 3;
//       }
//       if(games[i][0] == games[i][2]) {
//          sum += 1;
//       }

//    }
//    return sum;

// }'
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

// function getGrade (s1, s2, s3) {
//    let score =  (s1 + s2 + s3)/3;
//    if (score < 60 ) {
//       return 'F';
//    } else if(score <70) {
//       return 'D';

//    } else if(score <80) {
//       return 'C';
//    }
//     else if(score <90) {
//       return 'B';
//    } else return 'A';

//  }
//  console.log(getGrade(82,5,87));

// function setAlarm(employed, vacation){
//   return employed  &&  !vacation
// }
// console.log(setAlarm(true, false));

// function removeExclamationMarks(s) {
//    return s.replace(/[!]/g,'')
//  }

//  console.log(removeExclamationMarks('ad!asd1!!'))

//  function remove (string) {
//   let a = string.split(' ');
//   a.forEach(element => element.replace(/[!]/g,''))

// //   let a =  string.replace(/[!]/g,'') + '!'
//   return a

//  }
//  console.log(remove("Hi! Hi!"))

//  function doubleChar(str) {
// let a = '';
// for(let i = 0; i < str.length; i++) {
// 	 a += str[i] + str[i];
// }
// return a
//   }
//   console.log(doubleChar("String"));

//  function doubleChar(str) {
// 	return  a = str.split('').map(item =>item + item + item).join('');
//    }
//      console.log(doubleChar("String"));

// function updateLight(current) {
// 	if (current === 'green') {
// 		return 'yellow';
// 	}
// 	if (current === 'yellow') {
// 		return 'red';
// 	}
// 	if (current === 'red') {
// 		return 'green';
// 	}

// }
// console.log(updateLight("green"));

// function getPlanetName(id) {
//     var name;
//     switch (id) {
//         case 1:
//             name = "Mercury";
// 			break;
//         case 2:
//             name = "Venus";
// 			break;
//         case 3:
//             name = "Earth";
// 			break;
//         case 4:
//             name = "Mars";
// 			break;
//         case 5:
//             name = "Jupiter";
// 			break;
//         case 6:
//             name = "Saturn";
// 			break;
//         case 7:
//             name = "Uranus";
// 			break;
//         case 8:
//             name = "Neptune";
// 			break;
//     }

//     return name;
// }
// console.log(getPlanetName(3))

// function getPlanetName(id) {
//     return {
//         1: "Mercury",
//         2: "Venus",
//         3: "Earth",
//         4: "Mars",
//         5: "Jupiter",
//         6: "Saturn",
//         7: "Uranus",
//         8: "Neptune",
//     }[id];
// }
// console.log(getPlanetName(3))

// function otherAngle(a, b) {
// 	return Math.abs(a + b - 180) ;
//   }

// const areaOrPerimeter = function(l , w) {
// 	if(l == w )
//   {return l*w
//   } if (l!==w) {
// 	return (l+w)*2
//   }
//   };
//   console.log(areaOrPerimeter(2,3))

//   function firstNonConsecutive (arr) {
// 	for(let i = 0; i < arr.length; i++) {
// 		if(arr[i-1] + 1 !== arr[i]) return arr[i]
// 	}
// }
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

// function oddCount(n){
// 	return Math.floor(n / 2)

//   }
//   console.log(oddCount(5))

// function removeEveryOther(arr){
// let res= [];
// for(let i =0; i< arr.length; i +=2){
//   res.push(arr[i])
// }
// return res
// }

// function removeEveryOther(arr){
//   return arr.filter(function(elem, index) {
//     return index % 2 === 0;
//   });
// }

// function removeEveryOther(arr){
//   //your code here
//   for (var i = 1; i < arr.length;i++){
//     console.log(i)
//       arr.splice(i,2);
//   }
//   return arr;
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Место для первой задачи

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// function firstTask() {
//   for(let i = 5; i<11; i++) {
//      console.log(i)
//   }

// }
// firstTask()

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// (function a(){
//   for(let i = 20; i >=10; i--){
//     if(i< 13) {
//       break
//     }
//     console.log(i)
//   }
// })()

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function a(){
//   for(let i=2;i<=10; i+=2 ){
//     console.log(i)
//   }
// }
// a()

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num= 1;
// while (num<=15){
// num +=2
// console.log(num)
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// let arr = []
// function a(){
//   for(let i= 5; i<=10; i++) {
//     arr.push(i)
//   }
//   console.log(arr)
// }
// a()

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
// Место для первой задачи

// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения

// copy array dublicate clone копирование клонирование массива
// const arr = [3, 5, 8, 16, 20, 23, 50];
// let result = [];
// result = [...arr];
// result = arr.slice()
// result = arr.concat(arr)
// for(let i = 0; i < arr.length; i++){
//   result[i] = arr[i]
// }
// numbers = [1, 2, 3];
// numbersCopy = numbers.map((x) => x);
// numbersCopy1 = numbers.slice();
// console.log(result)

// const arr = [3, 5, "Shopping", 16, "Homework "];
// const arr = [3, 5, 16,'a'];
// const result = [...arr];

// for (let i = 0; i < result.length; i++) {

//     if(typeof(result[i]) === 'string') {
//         result[i] = `${result[i]} + done`
//     }
//     if(typeof(result[i]) === 'number') {
//         result[i] = result[i] * 2
//     }

// }
// console.log(result);

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     // result = data.reverse()
//    for(let i = 0; i<=data.length; i++) {
//     result[i-1] = data[data.length - i]
//    }
//     console.log(result) ;
//     return result

// }
// thirdTask()

// const line = 5

// for(let i = 1; i <= line; i++){

//      console.log('*'.repeat(i))

// }

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ["ru", "eng"],
        programmingLangs: {
            js: "20%",
            php: "10%",
        },
        exp: "1 month",
    },
};
function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}
showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = "";
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
showProgrammingLangs(personalPlanPeter);

function dontGiveMeFive(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        i = String(i);
        if (!i.includes("5")) {
            arr.push(i);
        }
    }

    return arr.length;
}
dontGiveMeFive(2, 6);

function removeUrlAnchor(url) {
    let index = url.indexOf("#");
    if (index == -1) {
        return url;
    }
    return url.slice(0, index);
}

removeUrlAnchor("www.codewars.com#");

function factorial(n) {
    if (n < 0 || n > 12) {
        return "Should throw RangeError";
    }
    if (n == 0 || n == 1) {
        return 1;
    }

    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    console.log(arr.reduce((a, b) => a * b));
}
factorial(13);

function solve(s) {
    let lowcase = s.replace(/[A-Z]/g, "").length;
    let upercase = s.replace(/[a-z]/g, "").length;
    if (lowcase >= upercase) {
        return s.toLowerCase();
    } else {
        return s.toUpperCase();
    }
    console.log(lowcase, upercase);
}

solve("coDe");
solve("cODe");
solve("CODe");

var number = function (array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(`${i + 1}: ${array[i]}`);
    }
    return arr;
};
number(["a", "b", "c"]);

function sumOfMinimums(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        a.push(arr[i].sort((a, b) => a - b)[0]);
    }
    return a.reduce((a, b) => a + b);
}
sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
]);

function inAscOrder(arr) {
    if (arr.length == 0 || arr.length == 1) {
        return true;
    }
    let res = [];
    let arr1 = JSON.parse(JSON.stringify(arr));
    let a = arr1.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (a[i] !== arr[i]) {
            res.push(1);
        }
    }
    if (res.length > 0) {
        return false;
    } else {
        return true;
    }
}
inAscOrder([1, 2, 4, 7, 19]);

function inAscOrder1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
inAscOrder1([1, 2, 4, 7, 19]);

function isSortedAndHow(arr) {}
isSortedAndHow([3, 0, 1]);

function mxdiflg(a1, a2) {
    // your code
}

function findLongest(array) {
    const b = [];
    let a = array.map((elem) => elem + "");
    for (let i = 0; i < a.length; i++) {
        b.push(a[i].length);
    }
    console.log(b);
}

findLongest([9000, 8, 800]);

function vowelIndices(word) {
    const newWord = word.toLowerCase();
    let a = [];
    for (let i = 0; i < newWord.length; i++) {
        if (
            newWord[i] === "a" ||
            newWord[i] === "e" ||
            newWord[i] === "i" ||
            newWord[i] === "o" ||
            newWord[i] === "u" ||
            newWord[i] === "y"
        ) {
            a.push(i + 1);
        }
    }
    return a;
}

console.log(vowelIndices("super"));

function vowelIndices(word) {
    var arr = [];
    for (var i = 0; i < word.length; i++) {
        if (/[aeioyu]/i.test(word[i])) {
            arr.push(i + 1);
        }
    }
    return arr;
}

function testinput(re, str) {
    var midstring;
    if (re.test(str)) {
        midstring = " содержит ";
    } else {
        midstring = " не содержит ";
    }
    console.log(str + midstring + re.source);
}

testinput("s", "super");

function reverseNumber(n) {
    if (String(n).replace(/0/g, "").length === 1) {
        return String(n).replace(/0/g, "") * 1;
    }
    if (String(n)[0] == "-") {
        return -String(n).split("").slice(1).reverse().join("") * 1;
    }
    return +String(n).split("").reverse().join("");
}

console.log(reverseNumber(-123));
console.log(typeof reverseNumber(123));

function sumCubes(n) {
    if (n === 1) {
        return 1;
    } else {
        return n ** 3 + sumCubes(n - 1);
    }
}
console.log(sumCubes(3));

function distanceBetweenPoints(a, b) {
    return 0; // your code here
}

function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}
console.log(maxMultiple(37, 200));

function multiple(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return "BangBoom";
    } else if (x % 3 === 0) {
        return "Bang";
    } else if (x % 5 === 0) {
        return "Boom";
    } else return "Miss";
}
console.log(multiple(31));

function digitalRoot(n) {
    return String(n).split("").length === 1
        ? n
        : digitalRoot(
              String(n)
                  .split("")
                  .reduce((sum, cur) => +sum + +cur)
          );
}
console.log(digitalRoot(456));

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
            }
        }
    }
    return a;
}
console.log(arrayDiff([-1, 2, -9, 4, -9, -11], [-1, 2, -9, 4]));

function difference(a, b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
    return result;
}
console.log(difference([-1, 2, -9, 4, -9, -11], [-1, 2, -9, 4]));

function array_diff(a, b) {
    return a.filter((e) => !b.includes(e));
}

function switcheroo(x) {
    return x.replace(/[b]/gi, "B").replace(/[a]/gi, "b").replace(/[B]/g, "a");
}
console.log(switcheroo("aaabcccbaaa"));

const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == "a" ? "b" : "a"));

function hasUniqueChars(str) {
    return Array.from(new Set(str.split(""))).join("") === str ? true : false;
}
console.log(hasUniqueChars("abcdef"));
let hasUniqueChars = (str) => new Set(str).size === str.length;

function isPowerOfTwo(n) {
    return Math.log2(512);
}
console.log(isPowerOfTwo(16));

function isPowerOfTwo(n) {
    if (n == 1) return true;
    if (n < 1) return false;

    return isPowerOfTwo(n / 2);
}

const orderedCount = function (text) {
    let newArr = [];
    let set = Array.from(new Set(text.split("")));
    for (let i = 0; i < set.length; i++) {
        let l = text.split("").filter((el) => el === set[i]).length;
        newArr.push([set[i], l]);
    }
    return newArr;
};
console.log(orderedCount(""));

function findDeletedNumber(arr, mixArr) {
    let arr2 = mixArr.sort((a, b) => a - b);
    if (arr2.length === arr.length) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) {
            return arr[i];
        }
    }
}
console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
function findDeletedNumber(arr, mixArr) {
    return arr.filter((v) => mixArr.indexOf(v) == -1)[0] || 0;
}

function getPlanetName(id) {
    return {
        1: "Mercury",
        2: "Venus",
        3: "Earth",
        4: "Mars",
        5: "Jupiter",
        6: "Saturn",
        7: "Uranus",
        8: "Neptune",
    }[id];
}
console.log(getPlanetName(3));

function otherAngle(a, b) {
    return Math.abs(a + b - 180);
}

const areaOrPerimeter = function (l, w) {
    if (l == w) {
        return l * w;
    }
    if (l !== w) {
        return (l + w) * 2;
    }
};
console.log(areaOrPerimeter(2, 3));

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

function oddCount(n) {
    return Math.floor(n / 2);
}
console.log(oddCount(5));

function removeEveryOther(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 2) {
        res.push(arr[i]);
    }
    return res;
}

function removeEveryOther(arr) {
    return arr.filter(function (elem, index) {
        return index % 2 === 0;
    });
}

function removeEveryOther(arr) {
    //your code here
    for (var i = 1; i < arr.length; i++) {
        console.log(i);
        arr.splice(i, 2);
    }
    return arr;
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Место для первой задачи

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// firstTask()(
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

//     function a() {
//         for (let i = 20; i >= 10; i--) {
//             if (i < 13) {
//                 break;
//             }
//             console.log(i);
//         }
//     }
// )();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function a111() {
//     for (let i = 2; i <= 10; i += 2) {
//         console.log(i);
//     }
// }
// a111();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 1;
// while (num <= 15) {
//     num += 2;
//     console.log(num);
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

let arr = [];
function a111() {
    for (let i = 5; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
}
a111();

// 7 kyu
// String ends with?

function solution(str, ending) {
    if (
        str.split("").splice(-ending.length).join("") ===
            ending.split("").join("") ||
        ending === ""
    ) {
        return true;
    } else {
        return false;
    }
}
console.log(solution("abc", ""));
return str.endsWith(ending);

// 7 kyu
// Is It Negative Zero (-0)?.

function isNegativeZero(n) {
    if (n === -0) {
        return true;
    }
    if (n === 0 || n > 0 || n < 0) {
        false;
        a;
    } else {
        return false;
    }
}
console.log(isNegativeZero(-5));

// 7 kyu
// Area of an arrow

function arrowArea(a, b) {
    return (a * 0.5 * b) / 2;
}
console.log(arrowArea(7, 6));
(a * b) / 4;

// 7 kyu
// Divide and Conquer
function divCon(x) {
    let a = x.filter((item) => typeof item === "number");
    let b = x.filter((item) => typeof item === "string");
    if (a.length > 0 && b.length > 0) {
        return a.reduce((a, b) => a + b) - b.reduce((a, b) => +a + +b);
    }
    if (a.length < 0 && b.length < 0) {
        return 0;
    }
    if (a.length > 0) {
        return a.reduce((a, b) => a + b);
    }
    if (b.length > 0) {
        return -b.reduce((a, b) => +a + +b);
    }
}
console.log(divCon([2, 5, 3]));
return x.reduce(
    (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
    0
);

// 7 kyu
// Number of People in the Bus

var number = function (busStops) {
    return;
};

number([
    [10, 0],
    [3, 5],
    [5, 8],
]);

// 7 kyu
// Find the divisors!

function divisors(integer) {
    for (let i = 1; i < integer; i++) {
        if (integer / i == -1) continue;
        console.log(i);
    }
}
divisors(12);

// 7 kyu
// The highest profit wins!

function minMax(arr) {
    if (arr.length >= 2) {
        return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
    }
    if (arr.length == 1) {
        return [...arr, ...arr];
    }
}
console.log(minMax([1, 2, 3, 4, 5]));
return [Math.min(...arr), Math.max(...arr)];

// 7 kyu
// Sum of the first nth term of Series

function SeriesSum(n) {
    return n.toFixed(2);
}
console.log(SeriesSum(1));

// 7 kyu
// Remove the minimum

function removeSmallest(numbers) {
    // let a = Math.min(...numbers);
    return numbers.filter((e) => e != Math.min(...numbers));
}
console.log(removeSmallest([1, 2, 3, 4, 1, 5]));

// 7 kyu
// Money, Money, Money

function nbYear(principal, interest, tax, desired) {
    let year = 0;
    while (principal < desired) {
        year++;
        principal =
            principal + principal * interest - principal * interest * tax;
    }
    return year;
}
console.log(nbYear(1000, 0.05, 0.18, 1100));

// 7 kyu
// Sort Numbers

function solution(nums) {
    return nums !== null && nums.length > 0 ? nums.sort((a, b) => a - b) : [];
}
console.log(solution(null));
return (nums || []).sort(function (a, b) {
    return a - b;
});

function head(arr) {
    return arr.slice(0, 1).join("") * 1;
}
function tail(arr) {
    return arr.slice(1);
}

function init(arr) {
    return arr.slice(0, arr.length - 1);
}

function last(arr) {
    return arr.slice(-1).join("") * 1;
}
console.log(head([1, 2, 3, 4, 5]));
console.log(tail([1, 2, 3, 4, 5]));
console.log(init([1, 2, 3, 4, 5]));
console.log(last([1, 2, 3, 4, 5]));
function head(a) {
    return a[0];
}

function last(a) {
    return a[a.length - 1];
}

function init(a) {
    return a.slice(0, -1);
}

function tail(a) {
    return a.slice(1);
}

function basicOp(operation, value1, value2) {
    return value1 + "" + operation + (value2 + "");
}

console.log(basicOp("+", 4, 7));

function printArray(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            result += array[i];
            break;
        }
        result += array[i] + ",";
    }
    return result;
}

console.log(printArray(["h", "o", "l", "a"]));

function rentalCarCost(d) {
    let amount = d * 40;
    if (d < 3) {
        return amount;
    } else if (d >= 3 && d < 7) {
        return amount - 20;
    } else if (d >= 7) {
        return amount - 50;
    }
}

console.log(rentalCarCost(d));

function getMiddle(s) {
    if (s.length === 0) {
        return "";
    }
    if (s.length === 1) {
        return s[0];
    }
    if (s.length % 2 === 0) {
        return s[s.length / 2 - 1] + s[s.length / 2];
    }
    if (s.length % 2 === 1) {
        return s[(s.length - 1) / 2];
    }
}
console.log(getMiddle("testing"));
return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

function array(arr) {
    if (arr.length <= 2) {
        return null;
    }
    return arr.split(",").slice(1, -1).join(" ") || null;
}
console.log(array(""));

// function array(arr) {
//   return arr.split(",").slice(1, -1).join(" ").length < 1 ? null || arr.split(",").slice(1, -1).join(" ").length
// }
// console.log(array(''));
// return arr.split(",").slice(1,-1).join(" ") || null;

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(/* Insert your parameters here */) {
        super(/* Make a call to the parent class's constructor with the correct arguments */);
    }
}

class Cat extends Animal {}

class Dog extends Animal {}

function prefill(n, v) {
    let res = [];
    if (typeof n !== "number" || typeof n !== "string") {
        return `${n} is invalid`;
    }
    if (n === 0 || n === "0") {
        return [];
    }
    if (!v) {
        return [undefined];
    }
    // if (parseFloat(n) !== +n || parseFloat(n) < 0) {
    //     return `${n} is invalid`;
    // }
    for (let i = 1; i <= +n; i++) {
        res.push(v);
    }
    return res;
}
console.log(prefill("3", 5));

console.log(typeof 1);

var maxRedigit = function (num) {
    return num <= 99 || num > 999
        ? null
        : +String(num)
              .split("")
              .sort((a, b) => b - a)
              .join("");
};
console.log(maxRedigit(1480));

function maskify(c) {
    const newStr = c.slice(0, -4).replace(/./g, "#") + c.slice(-4) || c;
    return newStr;
}
console.log(maskify("4556364607935616"));

function DNAStrand(dna) {
    const result = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result.push("T");
        } else if (dna[i] === "T") {
            result.push("A");
        } else if (dna[i] === "C") {
            result.push("G");
        } else if (dna[i] === "G") {
            result.push("C");
        }
    }
    return result.join("");
}

console.log(DNAStrand("ATTGC"));

function arithmetic(a, b, operator) {
    if (operator === "add") {
        return a + b;
    }
    if (operator === "subtract") {
        return a - b;
    }
    if (operator === "multiply") {
        return a * b;
    }
    if (operator === "divide") {
        return a / b;
    }
}

console.log(arithmetic(a, b, operator));

var Calculator = {
    average: function () {
        return [...arguments];
    },
};

console.log(Calculator.average());

function whoseBicycle(diary1, diary2, diary3) {
    const ageTable = {
        firstSonAge: 14,
        secondSonAge: 9,
        thirdSonAge: 8,
    };

    function averageMark(diary) {
        return (
            Object.values(diary).reduce((acc, num) => acc + num) /
            Object.values(diary).length
        );
    }

    const averageMark1 = averageMark(diary1);
    const averageMark2 = averageMark(diary2);
    const averageMark3 = averageMark(diary3);

    if (averageMark3 >= averageMark2 && averageMark3 >= averageMark1) {
        return "I need to buy a bicycle for my third son.";
    } else if (averageMark2 >= averageMark3 && averageMark2 > averageMark1) {
        return "I need to buy a bicycle for my second son.";
    } else {
        return "I need to buy a bicycle for my first son.";
    }
}

console.log(
    whoseBicycle(
        {
            algebra: 6,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 8,
            history: 7,
            physics: 8,
            geography: 9,
            chemistry: 10,
        },
        {
            algebra: 6,
            history: 5,
            physics: 5,
            geography: 9,
            chemistry: 10,
        }
    )
);

const array1 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, [12]]]];
const result = [];

const flatternArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            flatternArray(arr[i]);
        } else result.push(arr[i]);
    }
    return result;
};
console.log(flatternArray(array1));

function sumTriangularNumbers(n) {
    if (n <= 0) {
        return 0;
    }
    let res = 0;
    for (let i = 1; i < n + 1; i++) {
        res += (i * (i + 1)) / 2;
    }
    return res;
}

console.log(sumTriangularNumbers(4));

var myArray = [1, 2, 3];
function factory(x) {
    return function a(arr) {
        return arr.map((el) => el * x);
    };
}
var fives = factory(5);
console.log(fives(myArray));

function absentVowel(x) {
    if (!x.includes("a")) {
        return 0;
    } else if (!x.includes("e")) {
        return 1;
    } else if (!x.includes("i")) {
        return 2;
    } else if (!x.includes("o")) {
        return 3;
    } else if (!x.includes("u")) {
        return 4;
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"));

// function absentVowel(x) {
//   switch (true) {
//     case !x.includes('a'):
//       return 0;
//     case !x.includes('e'):
//       return 1;
//     case !x.includes('i'):
//       return 2;
//     case !x.includes('o'):
//       return 3;
//     case !x.includes('u'):
//       return 4;
//       }
// }

function isIsogram(str) {
    let a = str.toLowerCase().split("").sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isIsogram(""));

function nicknameGenerator(name) {
    if (name.length <= 3) {
        return "Error: Name too short";
    }
    if (name.length === 4 && consonants.includes(name[2])) {
        return name;
    }
    const consonants = "aeiuo";
    if (consonants.includes(name[2])) {
        return name.slice(0, 4);
    } else {
        return name.slice(0, 3);
    }
}
console.log(nicknameGenerator("Kqqt"));

function explode(s) {
    let result = "";
    // const arr = s.replace(/0/g,'')
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "0") {
            s[i] = "";
        }
        result += s[i].repeat(+s[i]);
    }
    return result;
}

console.log(explode("31020"));

function highAndLow(numbers) {
    const str = numbers.split(" ").sort((a, b) => b - a);
    return `${str[0]} ${str[str.length - 1]}`;
}
console.log(highAndLow("1 2 3 4 5"));

function toJadenCase(str) {
    let a = str.split(" ");
    let s = "";
    for (let i = 0; i < a.length; i++) {
        s += a[i][0].toUpperCase() + a[i].substr(1) + " ";
    }
    return s.trimEnd();
}
console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));
String.prototype.toJadenCase = function () {
    let a = this.split(" ");
    let s = "";
    for (let i = 0; i < a.length; i++) {
        s += a[i][0].toUpperCase() + a[i].substr(1) + " ";
    }
    return s.trim().trimEnd();
};

function disemvowel(str) {
    const vowels = /[aeuio]/gi;
    return str.replace(vowels, "");
}
console.log(disemvowel("This website is for losers LOL!"));

function brightest(colors) {
    let col = colors.forEach();
}
console.log(brightest(["#001000", "#000000"]));

function convertHEXtoRGB(color) {
    color = color.toUpperCase();
    const R = color.slice(1, 3);
    const G = color.slice(3, 5);
    const B = color.slice(5, 7);

    function rgb(color) {
        for (let i = 1; i < color.length; i++) {
            if (color[i] === "A") {
                color[i] = 10;
            } else if (color[i] === "B") {
                color[i] = 11;
            } else if (color[i] === "C") {
                color[i] = 12;
            } else if (color[i] === "D") {
                color[i] = 13;
            } else if (color[i] === "E") {
                color[i] = 14;
            } else if (color[i] === "F") {
                color[i] = 15;
            }
            return +color[0] + +color[1];
        }
    }

    return rgb(R);
}

console.log(convertHEXtoRGB("#ABCDEF"));

function myLanguages(results) {
    const result = [];
    const sortObj = Object.entries(results).sort((a, b) => b[1] - a[1]);
    // [ [ 'Ruby', 80 ], [ 'Python', 65 ], [ 'Java', 10 ] ]
    for (let i = 0; i < sortObj.length; i++) {
        if (sortObj[i][1] >= 60) {
            result.push(sortObj[i][0]);
        }
    }
    return result;
}
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));

function duplicateEncode(word) {
    const newArr = word.toLowerCase().split("");
    const result = [];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr.filter((el) => el === newArr[i]).length > 1) {
            result.push(")");
        } else {
            result.push("(");
        }
    }
    return result.join("");
}

console.log(duplicateEncode("OOOyO)kOPO"));

function nthFibo(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2 || n === 3) {
        return 1;
    } else if (n === 4) {
        return 2;
    } else if (n > 4) {
        return (n = nthFibo(n - 1) + nthFibo(n - 2));
    }
}
console.log(nthFibo(10));

function deepCount(a) {
    let count = 0;
    function flatternArray(a) {
        for (let i = 0; i < a.length; i++) {
            count++;
            if (typeof a[i] !== "number" && typeof a[i] !== "string") {
                flatternArray(a[i]);
            }
        }
        return count;
    }
    return flatternArray(a);
}
console.log(deepCount(["x", "y", ["z"]]));

// --------------------------

function countYears(s) {
    const years = s / 31536000;
    if (years < 1) {
        return "";
    } else if (years >= 1 && years < 2) {
        return "1 year";
    } else if (years >= 2) {
        return `${Math.floor(years)} years`;
    }
}
console.log(countYears());

function countDays(s) {
    const years = s % 31536000;
    const days = Math.floor(years / 86400);
    if (days < 1) {
        return "";
    } else if (days >= 1 && days < 2) {
        return "1 day";
    } else if (days >= 2) {
        return `${days} days`;
    }
}
console.log(countDays(32536000));

function countHours(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = Math.floor(days / 3600);

    if (hours < 1) {
        return "";
    } else if (hours >= 1 && hours < 2) {
        return "1 hour";
    } else if (hours >= 2) {
        return `${hours} hours`;
    }
}
console.log(countHours(35536000));

function countMinutes(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = days % 3600;
    const minutes = Math.floor(hours / 60);
    if (minutes < 1) {
        return "";
    } else if (minutes >= 1 && minutes < 2) {
        return "1 minute";
    } else if (minutes >= 2) {
        return `${minutes} minutes`;
    }
}
console.log(countMinutes(35539867));

function countSeconds(s) {
    const years = s % 31536000;
    const days = years % 86400;
    const hours = days % 3600;
    const minutes = hours % 60;
    const sec = minutes;
    return [years, days, hours, minutes, sec];
    if (sec < 1) {
        return "";
    } else if (sec >= 1 && sec < 2) {
        return "1 second";
    } else if (sec >= 2) {
        return `${sec} seconds`;
    }
}
console.log(countSeconds(71));

function formatDuration(seconds) {
    function countYears(seconds) {
        const years = seconds / 31536000;
        if (years < 1) {
            return "";
        } else if (years >= 1 && years < 2) {
            return "1 year";
        } else if (years >= 2) {
            return `${Math.floor(years)} years`;
        }
    }
    function countDays(seconds) {
        const days = Math.floor((seconds % 31536000) / 86400);
        if (days < 1) {
            return "";
        } else if (days >= 1 && days < 2) {
            return "1 day";
        } else if (days >= 2) {
            return `${days} days`;
        }
    }
    function countHours(seconds) {
        const hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        if (hours < 1) {
            return "";
        } else if (hours >= 1 && hours < 2) {
            return "1 hour";
        } else if (hours >= 2) {
            return `${hours} hours`;
        }
    }
    function countMinutes(seconds) {
        const minutes = Math.floor(
            (((seconds % 31536000) % 86400) % 3600) / 60
        );
        if (minutes < 1) {
            return "";
        } else if (minutes >= 1 && minutes < 2) {
            return "1 minute";
        } else if (minutes >= 2) {
            return `${minutes} minutes`;
        }
    }

    function countSeconds(seconds) {
        const sec = (((seconds % 31536000) % 86400) % 3600) % 60;
        if (sec < 1) {
            return "";
        } else if (sec >= 1 && sec < 2) {
            return "1 second";
        } else if (sec >= 2) {
            return `${sec} seconds`;
        }
    }
    const result = [
        countYears(seconds),
        countDays(seconds),
        countHours(seconds),
        countMinutes(seconds),
        countSeconds(seconds),
    ];
    const filterArr = result.filter((el) => el !== "");
    if (seconds === 0) {
        return "now";
    } else if (filterArr.length === 2) {
        return `${filterArr[0]} and ${filterArr[1]}`;
    } else if (filterArr.length === 3) {
        return `${filterArr[0]}, ${filterArr[1]} and ${filterArr[2]}`;
    } else if (filterArr.length === 4) {
        return `${filterArr[0]}, ${filterArr[1]}, ${filterArr[2]} and ${filterArr[3]}`;
    } else if (filterArr.length === 5) {
        return `${filterArr[0]}, ${filterArr[1]}, ${filterArr[2]}, ${filterArr[3]} and ${filterArr[4]}`;
    } else if (filterArr.length === 1) {
        return `${filterArr[0]}`;
    }
}
console.log(formatDuration(38557662));

function numberOfPairs(gloves) {
    const set = Array.from(new Set(gloves));
    const countPairs = [];
    for (let i = 0; i < set.length; i++) {
        let a = gloves.filter((el) => el === set[i]);
        if (a.length === 1) {
            continue;
        } else if (a.length > 1) {
            countPairs.push(a.length);
        }
    }
    const result = countPairs.map((el) => (el % 2 === 0 ? el : el - 1));
    return result.length === 0
        ? 0
        : countPairs
              .map((el) => (el % 2 === 0 ? el : el - 1))
              .reduce((a, b) => a + b) / 2;
}
console.log(numberOfPairs(["red", "green", "blue"]));

function getLengthOfMissingArray(arrayOfArrays) {
    const arrOfLength = (arrayOfArrays || [])
        .map((el) => (el ? el.length : 0))
        .sort((a, b) => a - b);
    if (arrOfLength.includes(0)) {
        return 0;
    }
    for (let i = 0; i < arrOfLength.length - 1; i++) {
        if (arrOfLength.includes(0) || arrOfLength.length === 0) {
            return 0;
        }
        if (arrOfLength[i] + 1 !== arrOfLength[i + 1]) {
            return arrOfLength[i] + 1;
        }
    }
    return 0;
}
console.log(
    getLengthOfMissingArray([[1], [2, 4], [5, 6, 7], null, [6, 7, 8, 9]])
);

const addCurry = (...args1) => {
    return (...args2) => {
        const arr = [args1, args2];

        const result = [];
        const flatternArray = function (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] !== "number") {
                    flatternArray(arr[i]);
                } else result.push(arr[i]);
            }
            return result;
        };
        flatternArray(arr);

        return result.reduce((acc, num) => acc + num);
    };
};

console.log(addCurry(2, 5)(7, 2));

function recycle(array) {
    const paperArr = [];
    const glassArr = [];
    const organicArr = [];
    const plasticArr = [];
    let result = [];
    function materialLoop(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].material && !array[i].secondMaterial) {
                if (array[i].material === "paper") {
                    paperArr.push(array[i].type);
                } else if (array[i].material === "glass") {
                    glassArr.push(array[i].type);
                } else if (array[i].material === "organic") {
                    organicArr.push(array[i].type);
                } else if (array[i].material === "plastic") {
                    plasticArr.push(array[i].type);
                }
            }
            if (array[i].material && array[i].secondMaterial) {
                if (array[i].material === "paper") {
                    paperArr.push(array[i].type), secondMaterialLoop(array[i]);
                } else if (array[i].material === "glass") {
                    glassArr.push(array[i].type), secondMaterialLoop(array[i]);
                } else if (array[i].material === "organic") {
                    organicArr.push(array[i].type),
                        secondMaterialLoop(array[i]);
                } else if (array[i].material === "plastic") {
                    plasticArr.push(array[i].type),
                        secondMaterialLoop(array[i]);
                }
            }
        }
        return result;
    }
    function secondMaterialLoop(array) {
        if (array.secondMaterial === "paper") {
            paperArr.push(array.type);
        } else if (array.secondMaterial === "glass") {
            glassArr.push(array.type);
        } else if (array.secondMaterial === "organic") {
            organicArr.push(array.type);
        } else if (array.secondMaterial === "plastic") {
            plasticArr.push(array.type);
        }
        return result;
    }

    materialLoop(array);
    return console.log((result = [paperArr, glassArr, organicArr, plasticArr]));
}

recycle([
    { type: "rotten apples", material: "organic" },
    {
        type: "out of date yogurt",
        material: "organic",
        secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
]);

//             const recyclerMaterials = ['paper', 'glass', 'organic', 'plastic'];

// function recycle(objects) {
//   return recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
// }

// function recycle(arr) {
//   let paper = [], glass = [], organic = [], plastic = [];

//   arr.forEach(obj => {
//     if(obj.material === 'paper' || obj.secondMaterial === 'paper' ) paper.push(obj.type)
//     if(obj.material === 'glass' || obj.secondMaterial === 'glass') glass.push(obj.type)
//     if(obj.material === 'organic' || obj.secondMaterial === 'organic') organic.push(obj.type)
//     if(obj.material === 'plastic' || obj.secondMaterial === 'plastic') plastic.push(obj.type)
//   });

//   return [paper, glass, organic, plastic]
// }

var runLengthEncoding = function (str) {
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result.push([count, str[i]]);
            count = 1;
        } else if (str[i] === str[i + 1]) {
            count++;
        }
    }
    return result;
};

console.log(runLengthEncoding("abc"));

function unluckyDays(year) {
    let countUnlDays = 0;
    for (i = 0; i < 12; i++) {
        new Date(year, i, 13).getDay() === 5 ? countUnlDays++ : 0;
    }
    return countUnlDays;
}
console.log(unluckyDays(2065));

function getParticipants(handshakes) {
    return (handshakes * (handshakes - 1)) / 2;
}
console.log(getParticipants(4));

function createFunctions(n) {
    let callbacks = [];

    for (let i = 1; i <= n; i++) {
        function call(n) {
            return n;
        }
        callbacks.push(call());
    }
    return callbacks;
}
console.log(createFunctions(3));

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }
    const dateArr = [];
    function getDateArr(strDate) {
        const date = new Date(strDate);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        dateArr.push(year, month, day);
        return dateArr;
    }
    getDateArr(currentDate);
    getDateArr(expirationDate);

    if (
        dateArr[0] > dateArr[3] ||
        (dateArr[0] === dateArr[3] && dateArr[1] > dateArr[4]) ||
        (dateArr[0] >= dateArr[3] &&
            dateArr[1] === dateArr[4] &&
            dateArr[2] > dateArr[5])
    ) {
        return false;
    } else {
        return true;
    }
}
console.log(checkCoupon("123", "123", "November 8, 2013", "November 5, 2014"));
// [ 2013, 11, 8, 2014, 11, 5 ]

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }

    return Date.parse(currentDate) <= Date.parse(expirationDate) ? true : false;
}
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));

function brightest(colors) {
    let ind = 0;
    let maxVal = 0;
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i];
        let r = parseInt(color.slice(1, 3), 16);
        let g = parseInt(color.slice(3, 5), 16);
        let b = parseInt(color.slice(5), 16);
        let val = [r, g, b].sort((a, b) => b - a)[0];
        if (val > maxVal) {
            maxVal = val;
            ind = i;
        }
    }
    return colors[ind];
}

console.log(brightest(["#00FF00", "#FFFF00"]));

function handAngle(date) {
    let hours = date.getHours();
    let min = date.getMinutes();
    let minAng = min * 6;
    let hourAng1 = hours * 30;
    if (minAng >= 180) {
        hourAng1 = Math.abs(hours * 30 - (minAng * 15) / 180);
    }
    if (minAng < 180) {
        hourAng1 = hours * 30 + (minAng * 15) / 180;
    }

    let angel = Math.abs(minAng - hourAng1);
    let res = Math.PI - Math.abs(Math.PI - (angel * Math.PI) / 180);

    return res;
    // return [res, [angel, "Hours " + hourAng1, 'Minutes ' + minAng]];
}
let d = new Date("Tue Mar 14 2023 12:30");
console.log(handAngle(d));

function sortByBit(arr) {
    function bitLength(num) {
        return num.toString(2).replace(/0/g, "").length;
    }
    return arr.sort((a, b) => {
        if (bitLength(a) > bitLength(b)) {
            return 1;
        } else if (bitLength(a) < bitLength(b)) {
            return -1;
        } else if (bitLength(a) === bitLength(b) && a < b) {
            return -1;
        }
    });
}
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));

const sortByBit = (arr) =>
    arr.sort(
        (a, b) =>
            a.toString(2).replace(/0/g, "") - b.toString(2).replace(/0/g, "") ||
            a - b
    );

console.log(new Array(2));

var runLengthEncoding = function (str) {
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result.push([count, str[i]]);
            count = 1;
        } else if (str[i] === str[i + 1]) {
            count++;
        }
    }
    return result;
};

function accum(s) {
    return s
        .toLowerCase()
        .split("")
        .map(
            (symbol, index) => `${symbol.toUpperCase()}${symbol.repeat(index)}`
        )
        .join("-");
}

function filterHomogenous(arrays) {
    // Alea iacta est, code legionary!
    return arrays.filter(
        (arr) =>
            arr.length && arr.every((item) => typeof item === typeof arr[0])
    );
}
console.log(filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]));

function inter(s1, s2) {
    return new Set([...s1].filter((item) => s2.has(item)));
}

let ar1r = ["Rysn", "Jimmy", "123", "4", "Cool Man", "Rysn"];
function friend(friends) {
    return friends.filter((el) => typeof el === "string" && el.length === 4);
}
console.log(friend(arr));
return friends.filter((n) => n.length === 4);

function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
        year++;
        p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    }
    return year;
}
console.log(nbYear(1500, 5, 100, 5000));

function findNextSquare(sq) {
    // if ((Math.sqrt(sq) % 2 == 0) || (Math.sqrt(sq) % 2 == 0.5 || (Math.sqrt(sq) % 2 == 1))) {
    // 	return ((Math.sqrt(sq)) + 1) ** 2;
    // } else { return -1;
    // }
    if (Math.sqrt(sq) == Math.floor(Math.sqrt(sq))) {
        return (Math.sqrt(sq) + 1) ** 2;
    } else {
        return -1;
    }
}
console.log(findNextSquare(121));

function printerError(s) {
    let b = s.length - s.replace(/[n-z]/gi, "").length;
    return `${b}` + `${"/"}` + `${s.length}`;
}
console.log(printerError("aaabbbbhaijjjmx"));
const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
return n ** 3;
return n * n * n;

function stray(numbers) {
    let a = numbers.sort((a, b) => a - b);
    return a[0] == a[1] ? a[a.length - 1] : a[0];
}
console.log(stray([1, 1, 1, 2]));
const stray = (nums) => nums.reduce((a, b) => a ^ b);

function isAValidMessage(message) {
    function numFromStr(str) {
        let num = [...str]
            .map((i) => {
                if (isFinite(i) == true || i == ".") {
                    return i;
                } else {
                    return " ";
                }
            })
            .join("")
            .split(" ")
            .filter((i) => i != "")
            .map((i) => Number(i));
        return num;
    }
    console.log(numFromStr("3hey5hello2hi"));
    let b = message.replace(/[0-9]/gi, " ");
    console.log(b);

    return b;
}
console.log(isAValidMessage("3hey5hello2hi"));

function noOdds(values) {
    return values.filter((a) => a % 2 == 0);
}
console.log(noOdds([0, 1, 2, 3]));

function angle(n) {
    return 180 * (n - 2);
}
console.log(angle(61));

function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b);
}

console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ])
);

function digits(n) {
    return String(n).length;
}

console.log(digits(12345));

function digits(n) {
    return n.toString().length;
}

function sortGiftCode(code) {
    return [...code].sort().join("");
}

console.log(sortGiftCode("pqksuvy"));

var SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        let arr = [];
        for (let i = 0; i <= count; i++) {
            arr.push(i);
        }
        let b = arr.reduce((total, next) => total + next, 0);
        let a = arr.join("+");
        if (count < 0) return `${count}<0`;
        if (count == 0) return `${count}=0`;
        return `${a} = ${b}`;
    };

    return SequenceSum;
})();

function countA(n) {
    let res = [];
    for (i = 1; i <= n; i++) {
        res.push(i);
    }
    return res.reduce((a, b) => a + b);
}
console.log(countA(6));

function generateShape(integer) {
    console.log("*" + integer.repeat(integer));
}
console.log(generateShape(5));

function countRedBeads(n) {
    if (n < 2) {
        return 0;
    }
    if (n > 2) {
        return (n - 1) * 2;
    }
}

console.log(countRedBeads(3));

function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1) * 2;
}

function getParticipants(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipant2s(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants3(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}

function getParticipants3(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants112(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}
function getParticipants1312(h) {
    if (h === 0) return 0;
    if (h === 1) return 2;
    let res = 0;
    let sum = 0;
    while (h > sum) {
        sum = (res * (res + 1)) / 2;
        ++res;
    }
    return res;
}

//virtual keyboard task done
//virtual keyboard cross check review task
//HTML Builder task start
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task continue
//HTML Builder task crosscheck
//HTML Builder task crosscheck
//HTML Builder task crosscheck
//webpack test completed
//webpack test completed
