// task 2
// const names = ["Max", "John", "Mark", "Max", "John", "Mark"];

// function likes(names) {
// 	if (names.length == 0) {
// 		return "no one likes this";
// 	}
// 	if (names.length == 1) {
// 		return names.toString() + `${" likes this"}`;
// 	}
// 	if (names.length == 2) {
// 		return (
// 			names[0].toString() +
// 			`${" and "}` +
// 			names[1].toString() +
// 			`${" like this"}`
// 		);
// 	}
// 	if (names.length == 3) {
// 		return (
// 			names[0].toString() +
// 			`${", "}` +
// 			names[1].toString() +
// 			`${" and "}` +
// 			names[2].toString() +
// 			`${" like this"}`
// 		);
// 	} else {
// 		return (
// 			names[0].toString() + `${", "}` + names[1].toString() +	`${" and "}` + (names.length - 2) +	`${" others like this"}`);
// 	}
// }
// likes(names);

//names[1].toString() можно заменить на `${names[0]}`
//бектики только в начале скобок и в конце, все что НЕ в фигурных скобках читается как сторка
// return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;} - замена последней строки

//Best Practices
// function likes(names) {
// 	names = names || [];
// 	switch(names.length){
// 	  case 0: return 'no one likes this'; break;
// 	  case 1: return names[0] + ' likes this'; break;
// 	  case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
// 	  case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
// 	  default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
// 	}
// }
//

// end of task 2

//task 3

// var isSquare = function(n) {
// 	let remain = Math.sqrt(n);

// 	if (remain < 0) {
// 		return console.log(false);
// 	}
// 	if (remain == 0) {
// 		return console.log(true);
// 	}
// 	if (remain % 1 == 0) {
// 		return console.log(true);
// 	}	else {
// 		return console.log(false);
// 	}
// };
// isSquare(-1);

//второе решениеб чуть короче
// var isSquare = function(n){
// 	if (Math.sqrt(n) < 0 || Math.sqrt(n) % 1 !== 0) {
// 	  return console.log(false);
// 	}
// 	  else {
// 	  return console.log(true);
// 	}
//   }
// isSquare(5);

//best Practices
//1
// function isSquare(n) {
// 	return Math.sqrt(n) % 1 === 0;
//   }
//2
//const isSquare = n => Number.isInteger(Math.sqrt(n));
//3
// var isSquare = function(n){
// 	return Number.isInteger(Math.sqrt(n));
//   }

// task 3 done

// task 4

// let arr = [1, 3, 4, 1, 1, 3, 4, 5];
// let count = [];
// function findOdd(A) {
// for (let elem of arr) {
//     if (count[elem] === undefined) {
//     count[elem] = 1;
//     } else {
//     count[elem]++;
//     }
// }
// }
// console.log(findOdd(arr)); // выведет {1: 3, 3: 2, 4: 2, 5: 1}

//task

// let num = 5;
// function makeNegative(num) {
// 	if (num === 0) {
// 		return 0;
// 	} if (num > 0) {
// 		return -num;
// 	}
// }
// console.log(makeNegative(num));

// best solutions
// function makeNegative(num) {
// 	return -Math.abs(num);
//   }

//   function makeNegative(num) {
// 	return num < 0 ? num : -num;
//   }
//task

//task Even or Odd

// let num = 4;
// function even_or_odd(number) {
//   if (number % 2 == 0) {
// 	  return "Even";
//   } else {
// 	return "Odd";
//   }

// }
// console.log(even_or_odd(num));

// best solutions
// function even_or_odd(number) {
// 	return number % 2 ? "Odd" : "Even";
//   }

//   function even_or_odd(number) {
// 	return number % 2 === 0 ? 'Even' : 'Odd';
//  }

//task Opposite number
// let num = -4;
// function opposite(number) {
// 	if (number > 0) {
// 		return -Math.abs(number);
// 	} if (number < 0) {
// 		return Math.abs(number);
// 	} else {
//     return 0;
//   }
// }
//   console.log(opposite(num));

// best solutions
//   function opposite(number) {
// 	return(-number);
//   }

//   const opposite = number => -number;

// function opposite(number) {
//     return number * (-1);
//

//task Reversed String
// let str = 'hello hello hello';
// function solution(str) {
//   return str.split('').reverse().join('');
// }
// console.log(solution(str));

// best solutions
//   const solution = str => str.split('').reverse().join('');
//   const solution = s => [...s].reverse().join('')

//task Remove First and Last Character
// let str = 'hello';

// function removeChar(str){
// 	return str.slice(1, -1);
//    };
//    console.log(removeChar(str));

// best solutions
//  const removeChar = str => str.slice(1,-1);

//  function removeChar(str){
// 	return str.substring(1, str.length-1);
//    };

//task Convert boolean values to strings 'Yes' or 'No'.
// function boolToWord(bool){
// 	if (bool === true) {
// 		return 'Yes';
// 	} if (bool == false) {
// 		return 'No';
// 	}
//   }

// best solutions
//    function boolToWord( bool ){
// 	return bool ? 'Yes':'No';
//   }

//   function boolToWord( bool ){
// 	if (bool) {
// 	  return 'Yes';
// 	} else {
// 	  return 'No';
// 	}
//   }

//task Convert a Number to a String!
// function numberToString(num) {
// 	return String(num);
//   }
// function numberToString(num) {
// 	return num.toString();
//   }
//   function numberToString(num) {
// 	return ''+num;
//   }

//task Grasshopper - Summation

// let num = 4;
// var summation = function (num) {
// 	let sum = 0;
// 	for (let i = 0; i <= num; i++) {
// 		sum += i;
// 	}
// 	return sum;
//   };
//   console.log(summation(num));
// best solutions
//    const summation = n => n * (n + 1) / 2;

//    function summation(num) {
// 	return num * (num + 1) / 2
//   }

//task Remove String Spaces

// let str = '        8 j 8   mBliB8g  imjB8B8  jl  B';
// function noSpace(x){
// 	// return x.replace(/\s+/g, '');
// 	return x.split(' ').join('');
// }
// console.log(noSpace(str));

// best solutions
// function noSpace(x){
// 	return x.replace(/\s/g, '');
//   }

//   const noSpace = x => x.replace(/ /g, "");

//Find the smallest integer in the array
// let arr = [34, -345, -1, 100];

// 	function findSmallestInt(args) {
// 	return Math.min(...args);
// 	}
//   console.log(findSmallestInt(arr));

///теория
//let numbers = [2, 3, 15];
// Оператор ... в вызове передаст массив как список аргументов
// Этот вызов аналогичен Math.max(2, 3, 15)
// let max = Math.max(...numbers);

// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 	  return Math.min.apply(null, args);
// 	}
//   }

//Square(n) Sum

// let nums = [0, 3, 4, 5];
// function squareSum (numbers) {
//   return numbers.reduce((sum, current) => sum  + current * current, 0);
// }

// console.log(squareSum(nums));

// function squareSum(numbers){
// 	return numbers.reduce(function(sum, n){
// 	  return (n*n) + sum;
// 	}, 0);
//   }

//Counting sheep...

// var array1 = [true,  true,  true,  false,
// 	true,  true,  true,  true ,
// 	true,  false, true,  false,
// 	true,  false, false, true ,
// 	true,  true,  true,  true ,
// 	false, false, true,  true ];

// function countSheeps(arrayOfSheep) {

// 	return arrayOfSheep.filter(item => item === true).length;

//   }

// console.log(countSheeps(array1));

//Is n divisible by x and y?

// function isDivisible(n, x, y) {
// 	if (n % x == 0 && n % y == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isDivisible(12,3,4));

// function isDivisible(n, x, y) {
// 	return n % x === 0 && n % y === 0
//   }
// function isDivisible(n, x, y) {
// return (n % x === 0 && n % y === 0) ? true : false;
// }

//Century From Year

// function century(year) {
// 	if (year % 100 == 0) {
// 		return year / 100 ;
// 	}
// 	if (year % 100 >= 1) {
// 		return Math.floor(year / 100 + 1);
// 	}
// }
// console.log(century(1900));

// const century = year => Math.ceil(year/100);

// function century(year) {
// 	return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
//   }

//Sum of positive

// var arr = [3,-2,5,6];
// function positiveSum1(array) {
// 	let result = array.reduce(function(sum, elem) {
// 		if (elem >= 0) {
// 			return sum + elem;
// 		} else {
// 			return sum;
// 		}
// 	}, 0);
// 	return result;
// }
// console.log(positiveSum1(arr));

// function positiveSum(arr) {
// 	var total = 0;
// 	for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
// 	  if (arr[i] > 0) {                   // if arr[i] is greater than zero
// 		total += arr[i];                  // add arr[i] to total
// 	  }
// 	}
// 	return total;                         // return total
//   }

//   function positiveSum(arr) {
// 	return arr.reduce((a,b) => a + (b > 0 ? b : 0),0);
//  }

//String repeat

// function repeatStr (n, str) {
// 	return str.repeat(n);
//   }

//   console.log(repeatStr(3, '*'));

//   repeatStr = (n, s) => s.repeat(n);

//Keep Hydrated!

// let a = 12.3;
// function litres(time) {
// 	let result = Math.floor(time * 0.5);
// 	return result;
//   }

//   console.log(litres(a));

//   function litres(time) {
// 	return Math.floor(time * 0.5);
//   }

//Basic Mathematical Operations

// function basicOp(operation, value1, value2) {
// 	let result = value1 + operation + value2;
//   return eval(result);
// }

// console.log(basicOp('/',2,3));

// function basicOp(o, a, b) {
// 	return eval(a+o+b);
//   }

//Abbreviate a Two Word Name

// let names = 'sam harris';
// function abbrevName(name){
// 	// return name.match(/[A-Z]/g).join('.');
// 	// return name[0] + `${'.'}`;

// 	// return name[0].toUpperCase() + `${'.'}` + name[name.indexOf(' ') + 1].toUpperCase();
//       return (name[0][0] + `${'.'}` + name[1][0]).toUpperCase();
// }

// console.log(abbrevName(names));

// function abbrevName(name){

// 	var nameArray = name.split(" ");
// 	return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//   }

// function abbrevName(name){

//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')

// }

//Convert number to reversed array of digits

// let num = 348597;
// function digitize(n) {

// 	return n.toString().split('').reverse().map(string => +string);
// 	// return n.toString().split('');
//   }
//   console.log(digitize(num));

//   function digitize(n) {
// 	return String(n).split('').map(Number).reverse();
//   }

//   function digitize(n){
// 	return (n + '').split('').map(Number).reverse();
//   }

//A Needle in the Haystack

// let arr = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

// function findNeedle(haystack) {
//  let needleIndex =  haystack.indexOf('needle', 0);
//  return `found the needle at position ` + needleIndex;
// }

// console.log(findNeedle(arr));

// function findNeedle(haystack) {
// 	return "found the needle at position " + haystack.indexOf("needle");
//   }
//   const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

//Convert a String to a Number!
// let num = '1520';
// const stringToNumber = function(str){
// 	return +str;
//   }

//   console.log(stringToNumber(num));

//   return parseInt(str);
//   return Number(str)

//Beginner - Lost Without a Map
// let arr = [1, 2, 3];
// function maps(x) {
// 	return x.map(a => a * 2);
// 	}

// 	console.log(maps(arr));

// 	maps = x => x.map(e => e * 2);
// 	const maps = arr => arr.map( x => x * 2 )

//Returning Strings
// let names = 'Semi';
// function greet(name){
// 	return `Hello, ${name} how are you doing today?`;
//   }

//   console.log(greet(names));

//Beginner Series #2 Clock

// function past(h, m, s){
// 	return  (s * 1 + m * 60 + h * 3600) * 1000;
//   }

//   console.log(past(1,1,1));

//   const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

//Count of positives / sum of negatives

// let arr = null;

// function countPositivesSumNegatives(input) {
// 	if (input === null || input.length === 0) {
// 		return [];
// 	} else {
// 	let positiveArr = input.filter(function(number) {
// 		return number > 0;
// 	});
// 	let SumOfNegative = input => input.reduce((a, c) => a += c < 0 ? c : 0, 0);

// 	return [positiveArr.length, SumOfNegative(input)];
// 	}
// }
// console.log(countPositivesSumNegatives(arr));

// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

//You only need one - Beginner
// let arr = [101, 45, 75, 105, 99, 107];
// function check(a, x) {
// 	return a.includes(x);
// }

//   console.log(check(arr, 45));

//   const check = (a,x) => a.includes(x);

// Invert values

// let arr = [101, -45, 75, 105, 99, 107];
// function invert(array) {
// 	let invert = array.map(function(item) {
// 		return -item;
// 	});
// 	return invert;
//  }
//  console.log(invert(arr));

//  function invert(array) {
// 	return array.map( x => x === 0 ? x : -x);
//  }
//  const invert = array => array.map(num => -num);

//Array plus array
// let arr1 = [101, -45, 75, 105, 99, 107];
// let arr2 = [1, 2, 3];

// function arrayPlusArray(arr1, arr2) {

// 	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);

//   }
// console.log(arrayPlusArray(arr1, arr2));

// function arrayPlusArray(arr1, arr2) {
// 	let arr = [...arr1, ...arr2];
// 	return arr.reduce((a, b) => a + b);
//   }

//Beginner - Reduce but Grow
// let arr = [1, 2, 3];
// function grow(x){
// 	return arr.reduce((a,b) => a * b);
// }
// console.log(grow(arr));

//DNA to RNA Conversion
// let a = 'TTT';
// function DNAtoRNA(dna) {
// 	return dna.replace(/T/g, 'U');
//   }
//   console.log(DNAtoRNA(a));

//Simple multiplication
// let num = 2;
// function simpleMultiplication(number) {
//     let result = number % 2 == 0 ? number * 8 : number * 9;
// 	return result;
// }

// console.log(simpleMultiplication(num));

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }
// function simpleMultiplication(n){
// 	return n % 2 == 0 ? n * 8 : n * 9
//   }

// 7 kyu
// Vowel Count

// let str = "should return 5 for 'abracadabra'";
// function getCount(str) {
// 	let A = [...str].filter(letter => letter === 'a').length;
// 	let E = [...str].filter(letter => letter === 'e').length;
// 	let I = [...str].filter(letter => letter === 'i').length;
// 	let O = [...str].filter(letter => letter === 'o').length;
// 	let U = [...str].filter(letter => letter === 'u').length;

// 	return A + E + I + O + U;
//   }

//   console.log(getCount(str));

//   function getCount(str) {
// 	return (str.match(/[aeiou]/ig)||[]).length;
//   }

// 7 kyu
// Square Every Digit
// function squareDigits1(num){
// 	let a = [...'' + num].map(Number).map(num => num * num).join('');

// 	return +a;
//   }
//   console.log(squareDigits1(9119));

//   function squareDigits(num){
// 	return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

//   }

// 7 kyu
// Disemvowel Trolls
// let str = "This website is for losers LOL!";
// function disemvowel(str) {
// 	return str.replace(/[aioue]/gi,'');

//   }
//   console.log(disemvowel(str));

// 7 kyu
// Highest and Lowest
// let num = "-1 2 3 4 5";
// function highAndLow(numbers){
// 	let newArr = numbers.split(' ');
// 	 return `${Math.max(...newArr)} ${Math.min(...newArr)}`;
// 	 }
// console.log(highAndLow(num));

//List Filtering
// let arr = [1,2,'a','b'];
// let a = 5;
// function filterList(arr) {
// 	return arr.filter(item => typeof item === 'number');
// 	}
//   console.log(typeof a);

//   function filter_list(l) {
// 	return l.filter(Number.isInteger);
//   }

//Isograms
// let str = 'moOse';
// function isIsogram(str) {
// 	let strToLowerCase = str.toLowerCase();
// 	let strToArr = Array.from(strToLowerCase).sort();
// 	let result = [];

// 	for (let a of strToArr) {
// 		if (!result.includes(a)) {
// 			result.push(a);
// 		}
// 	}
// 	if (result.length == strToArr.length) {
// 		return true;
// 	} else {
// 		return false;
// 	}

// }
// console.log(isIsogram(str));

//найти одинаковые симваолы или буквы в строке
//если есть совпадения то false!
// function isIsogram (str) {
// 	return !str || (str.length === new Set(str.toLowerCase()).size);
//   }
// function isIsogram(str){
// 	return !str.match(/([a-z]).*\1/i);
//   }
// function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
//   }
//   function isIsogram(str){
// 	return !/(\w).*\1/i.test(str);
//   }

// let str1 = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog";
// function isPangram(str) {
// return (str.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }
// console.log(isPangram(str1));

//7 kyu Descending

// let num = 1021;
// function descendingOrder(n){
// 	let a = String(n).split('').sort().reverse().join('');
// 	return Number(a);
//   }

//   console.log(descendingOrder(num));

// 7 kyu
// Exes and Ohs

// let str = "xoOxx";
// function XO(str) {
// 	let a = str.toLowerCase().split('');
// 	// let c =
// 	let x = a.filter(i => i ==='x').length;
// 	let o = a.filter(i => i ==='o').length;
// 	if (x == o) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(XO(str));

// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	console.log(x);
// 	return (x && x.length) === (o && o.length);
//   }
//   console.log(XO(str));

// 7 kyu
// Jaden Casing Strings

// let str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
// let a = str.split(' ');
// let b = a.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(' ');
// return console.log(b);
//   };
// str.toJadenCase();

// String.prototype.toJadenCase = function () {

//   let b = str.split(' ').map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(' ');
//   return console.log(b);
//     };
//   str.toJadenCase();

//Set method
// // const arr = ['Alex', 'Ivan', 'Ann', 'Alex'];
// const set = new Set(arr);
// set.add('Oleg');
// console.log(set);
// set.delete(value);
// set.has(value);//проверка наличия значения
// set.clear();//очистить
// set.size;//получить кол элтов
// for (let value of set) console.log(value);
// set.forEach((value, valueAgaing, set) => {
//   console.log(value, valueAgaing);
// });
// console.log(set.values());
// set.keys();//коючей у сета как бы нетубвернёт values
// set.entries();
// const arr = ['Alex', 'Ivan', 'Ann', 'Alex'];
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(arr));

//Big int Bigint
// const bigint = 9111111111113333333333333333334444444444455777n;
// const sameBigint = BigInt(9111111111113333333333333333334444444444455777) ;

//Map

// const obj = { a: '1',
//               b: '2',
//               c: '3'};

//     const objMap = new Map(Object.entries(obj));
//     // console.log(objMap);

//     const objMapFromObj = Object.fromEntries(objMap);
//     console.log(objMapFromObj);

// 7 kyu
// Shortest Word
// let str = "MadeSafeCoin Mine Classic BTC Lisk MadeSafeCoin Mine Mine Lisk";
// function findShort(str) {
//     let c = str
//         .split(" ")
//         .map((i) => i.length)
//         .sort((a, b) => {
//             if (a > b) return 1;
//             {
//             }
//             if (a == b) return 0;
//             {
//             }
//             if (a < b) return -1;
//         });
//     return c[0];
// }
// console.log(findShort(str));

// function findShort(s) {
//     return Math.min.apply(
//         null,
//         s.split(" ").map((w) => w.length)
//     );
// }
// function findShort(s) {
//     return Math.min(...s.split(" ").map((s) => s.length));

// 7 kyu
// Sum of two lowest positive integers
// let arr = [5, 8, 12, 19, 22];
// function sumTwoSmallestNumbers(arr) {
//     let c = arr.sort((a, b) => {
//             if (a > b) return 1;
//             {
//             }
//             if (a == b) return 0;
//             {
//             }
//             if (a < b) return -1;
//         });
//         return c[0] + c[1];
//   }
// console.log(sumTwoSmallestNumbers(arr));

// function sumTwoSmallestNumbers(numbers){
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
//   };

// 7 kyu
// Beginner Series #3 Sum of Numbers

// function getSum(a, b) {

//  if( a <= b) {
// 	return (a+b)*(b-a+1)/2;
// } else {return (b+a)*(a-b+1)/2;}

// }
// console.log(getSum(519, -370));

// let a = 10;
// let b = 13;
// function getSum(a, b) {
//     var sum = 0;

// for (let i = a; i <= b; i++) {
//     console.log(sum);
// }

// }
// // console.log(getSum(a, b));
// getSum(a, b);

// 7 kyu
// Odd or Even?
// let arr =[];
// function oddOrEven(array) {
//     if (array.length == 0) {
//         return 'even';
//     }
//     let a = array.reduce((a, b) => a + b );
//     if ( a.length === 0  ) {
//         return 'even';
//     }
//     if (a % 2 === 0 || a == [] || a === 0){
//         return 'even';
//     } else {
//         return 'odd';
//     }
//  }
//  console.log(oddOrEven(arr));
//  function oddOrEven(arr) {
//     return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
//   }

// 7 kyu
// Simple Fun #176: Reverse Letter

// let str = "mr,n=ckvuh3!x q zm|ox_rni(u!su}jmed";
// function reverseLetter(str) {
// 	return str.split('').reverse().join('').replace(/[\W\d\_]/gi,'');
//   }
//   console.log(reverseLetter(str));

//   reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
//   const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

// 7 kyu
// Small enough? - Beginner

// let arr = [9,0,0,9,0,9];
// let num = 8;

// function smallEnough(arr, num){
// let c =  arr.sort((a, b) => {return a - b});
// return  c[c.length - 1] > num ? false : true;
// }
// console.log(smallEnough(arr, num));

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit;
//   }

// 7 kyu
// Reverse words
//перевернуть каждое слово строки отдельно
// let str = "double  spaces" ;
// function reverseWords(str) {

//     return str.split(' ').map(s => s.split('').reverse().join('')).join(' ');
// }

//   console.log(reverseWords(str));

// 6 kyu
// Multiples of 3 or 5

// let num = 10;
// function solution(number){
// //   if (number < 0) {
// //       return 0;
// //   }
//   for (let i = 0; i <= number; i++) {
//     console.log(i);

//   }

// }

// // console.log(solution(num));
// solution(num);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// function setOptions(height, width, ...additional) {
//     console.log(height, width, ...additional)
// }
// setOptions(400, 500, 'red', 'top');

// 7 kyu
// Sort array by string length

// let arr = [ 'Of', 'A', 'Food', 'Dog' ];
// function sortByLength (array) {
//     return  array.sort((a, b) => a.length - b.length);

//   }

//   console.log(sortByLength(arr));

//   7 kyu
// Regex validate PIN code

// let pin = "1.234";

// function validatePIN(pin) {
//     let t = pin.replace(/[\D\s.,_%]/g, '');
//     let a = +pin;

//     if ((pin.length == t.length)  && (t.length === 4 || t.length === 6) && (a >= 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(validatePIN(pin));

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin);
//   }

//   7 kyu
// Binary Addition
// let a = 1;
// let b = 1;
// function addBinary(a,b) {
//     return (a + b).toString(2);
// }
// console.log(addBinary(a, b));

// Is this a triangle?
// let a = 2;
// let b = 2;
// let c = -2;

// function isTriangle(a,b,c) {
//     let arr = [a,b,c];
//     let sortArr = arr.sort( (a, b) => b - a );

// if (a <= 0 || b <= 0 || c <= 0) {
//     return false;
// }  if (((a > 0 && a !== 0) && (b > 0 && b !== 0) && (c > 0 && c !== 0)) && (sortArr[0] < sortArr[1] + sortArr[2]) || (sortArr[0] == sortArr[1])) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isTriangle(a ,b ,c));

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

// 7 kyu
// Ones and Zeros

// let arr = [0, 0, 1, 0];

// function binaryArrayToNumber(arr) {
//     let a = arr.join('');
//     return parseInt(a, 2);
// };

// console.log(binaryArrayToNumber(arr));

// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(""), 2)
//   };

// 6 kyu
// Create Phone Number

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function createPhoneNumber(numbers){

// console.log(createPhoneNumber(numbers));

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
//   }

//   function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// 6 kyu
// Find The Parity Outlier

// let arr = [12749518,-165438383,-30101495];
// function findOutlier(integers) {
// 	let a = integers.map((i => ((i % 2)+1)-1));
// 	let indexOfOne = a.lastIndexOf(1);
// 	let lastIndexOfOne = a.indexOf(1);
// 	let indexOfMinusOne = a.lastIndexOf(-1);
// 	let lastIndexOfMinusOne = a.indexOf(-1);
// 	let indexOfZero = a.lastIndexOf(0);
// 	let lastIndexOfZero = a.indexOf(0);

// 	console.log(a);
// 	console.log(lastIndexOfMinusOne);
// 	console.log(indexOfMinusOne);

// 	if ((indexOfMinusOne == lastIndexOfMinusOne) && (indexOfMinusOne >= 0)) {
// 		return integers[indexOfMinusOne];
// 	}
// 	if ((indexOfOne == lastIndexOfOne)) {
// 		return integers[indexOfOne];
// 	}
// 	if (indexOfZero == lastIndexOfZero) {
// 		return integers[indexOfZero];
// 	}
// 	if (indexOfOne >= 0 && indexOfMinusOne >= 0) {
// 		return integers[indexOfZero];
// 	}
// }
// console.log(findOutlier(arr));

// function findOutlier(int){
// 	var even = int.filter(a=>a%2==0);
// 	var odd = int.filter(a=>a%2!==0);
// 	return even.length==1? even[0] : odd[0];
//   }

//   function findOutlier(integers){
// 	return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
//   }
//   function even(num){
// 	return (num % 2 == 0);
//   }
//   function odd(num){
// 	return !even(num)
//   }

// var string = "The quick brown fox jumps over the lazy dog.";

// function isPangram(string){
// 	return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//   }

//   console.log(isPangram(string));

//   6 kyu
// Does my number look big in this?

// let value = 371;

// function narcissistic(value) {
// 	let arr = String(value).split('');

// 	let result = arr.map(i => i ** arr.length).reduce((a, b) => a + b);
// 	if( result == value) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

//   console.log(narcissistic(value));

//   function narcissistic(value) {
// 	return value.toString()
// 				.split('')
// 				.map( (x,i,arr) => x ** arr.length)
// 				.reduce( (a,b)=> +a + +b)
// 				 === value
//   }

// // 7 kyu
// // Remove the minimum
// let numbers = [1,2,3,4,5];
// function removeSmallest(numbers) {
// 	numbers.sort(fn)
//   }

// function arithmetic(a, b, operator) {
// 	if (operator == 'add') {
// 		return a + b;
// 	}
// 	if (operator == 'subtract') {
// 		return a - b;
// 	}
// 	if (operator == 'multiply') {
// 		return a * b;
// 	}
// 	if (operator == 'divide') {
// 		return a / b;
// 	}
//   }

//   console.log(arithmetic(5,2,'add'));
//   console.log(arithmetic(5,2,'subtract'));
//   console.log(arithmetic(5,2,'multiply'));
//   console.log(arithmetic(5,2,'divide'));

//   switch(operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }

// 7 kyu
// Sum of a sequence

// const sequenceSum = (begin, end, step) => {
// 	for (let i = begin; i < end; step) {
// 		return i;
// 	}

//   };

//   console.log(sequenceSum(2,6,2));
//   console.log(sequenceSum(1,5,3));

// let ages = [1, 5, 87, 45, 8, 8];

// function twoOldestAges(ages) {
// 	return ages.sort( (a, b) => a - b ).slice(-2);

// }
// console.log(twoOldestAges(ages));

// 7 kyu
// Remove the minimum
// let numbers = [5, 3, 2, 1, 4];
// function removeSmallest(numbers) {
// 	let smallestNumberKEY = 0;
// 	for (let i = 0; i <= numbers.length; i++) {
// 	  if (numbers[i + 1] < numbers[i]) {
// 		smallestNumberKEY = i + 1;
// 	  }
// 	}
// 	numbers.splice(smallestNumberKEY, 1);
// 	return numbers;
//   }

//   console.log(removeSmallest(numbers));

//   7 kyu
// Summing a number's digits

// let number = -32;
// function sumDigits(number) {
// return number.toString().replace(/[\D]/g, '').split('').reduce(function(a,b){ return +a+ +b; });

// }
// console.log(sumDigits(number));
// function sumDigits(number) {
// 	return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//   }

// 7 kyu
// Sum of all the multiples of 3 or 5

// let n = 10;
// function findSum(n) {
// 	let a5 = Math.floor(n / 5 );
// 	let b3 = Math.floor(n / 3 );

// 	for (let i = a5; i >= n; a5 + a5) {
// 		return a5;
// 	}
// 	return ((a5 * 5) + (b3 * 3));
//   }
//   console.log(findSum(n));

//   7 kyu
// Form The Minimum

// let values = [4, 7, 5, 7];
// function minValue(values) {
// 	let a = Array.from(new Set (values));
// 	let b = a.sort( (a, b) => a - b ).join('');

// 	return +b;
//   }

//   console.log(minValue(values));

//   7 kyu
// Coding Meetup #1 - Higher-Order Functions Series -
// Count the number of JavaScript developers coming from Europe
// var list = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// 	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// 	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
// function countDevelopers(list) {

//   }
//   console.log(countDevelopers(list));

// 7 kyu
// Count the divisors of a number

// let n = 10;
// function getDivisorsCnt(n){
//     for (let i = 0; i >= n; i++) {
// 		return
// 	}
// }

// console.log(getDivisorsCnt(n));

// 7 kyu
// Narcissistic Numbers
// let n = 153;
// function isNarcissistic(n) {
//  let b = n.toString().split('');
//  let d = Array.from((b), x => x ** b.length).reduce((sum, current) => sum + current, 0);

//   if ( d === n) {
//   return true;
// } else {
// 	return false;
// }

// }

// console.log(isNarcissistic(n));

// function isNarcissistic(n) {
// 	return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
//   }

//   const isNarcissistic = (n, $ = n.toString()) => [...$].reduce((a, b)=> a + b**$.length, 0) === n

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

// 	}
// console.log(bonusTime(salary, bonus));
// return bonus ? `£${10 * salary}` : `£${salary}`;

// 8 kyu
// Sum Mixed Array
// let arr = [9, 3, '7', '3'];
// function sumMix(x){
// 	 return (x.map(item => item * 1)).reduce((sum, cur) => sum + cur, 0);
// }
// console.log(sumMix(arr));
// return x.map(a => +a).reduce((a, b) => a + b);

// 8 kyu
// Jenny's secret message
// function greet(name){
// 	if(name === "Johnny")
// 	  return "Hello, my love!";
// 	return "Hello, " + name + "!";

//   }

//   8 kyu
// Quarter of the year
// let month = 9;
// const quarterOf = (month) => {
// if (month >= 1 && month <= 3) {
// 	return 1;
// } if (month >= 4 && month <= 6) {
// 	return 2;
// } if (month >= 7 && month <= 9) {
// 	return 3;
// } if (month >= 10 && month <= 12) {
// 	return 4;
// } else {
// 	return "Error";
// }
// 	if (month % 3 == 0) {
// 		return month / 3;
// 	} else {
// 		return Math.floor((month / 3) + 1);
// 	}
// };
// console.log(quarterOf(month));
// const quarterOf = m => Math.ceil(m/3);

// 8 kyu
// How good are you really?
// let classPoints = [100, 40, 34, 57, 29, 72, 57, 88];
// let yourPoints = 75;
// function betterThanAverage(classPoints, yourPoints) {
// 	let result = (yourPoints > (classPoints.reduce((a,b) => a + b) + yourPoints) / (classPoints.length + 1)) ? true : false;
// 	return result;
//   }
// console.log(betterThanAverage(classPoints, yourPoints));

// 8 kyu
// Beginner Series #1 School Paperwork
// function paperwork(n, m) {
//  return (n >= 0 && m >= 0) ? n * m : 0;
// }
// console.log(paperwork(n,m));

// 8 kyu
// N-th Power

// let arr = [1, 2, 3, 4];
// let num = 5;
// function index(array, n){
// 	// let a = array.indexOf(n + 1);
// 	// let b = arr[num];
// 	return (arr[num] >= 0) ? arr[num] ** num : -1;

//   }
//   console.log(index(arr, num));
//   return array[n] ** n || -1;

//   8 kyu
// Convert a Boolean to a String
// let b = true;
// function booleanToString(b){
// 	return b + '';
//   }
//   console.log(booleanToString(b));
//   return `${b}`

// 8 kyu
// Sum without highest and lowest number

// let arr = [];
// function sumArray(array) {
// 	if (array == null ||array.length <= 2) {
// 		return 0;
// 	} else {
// 	let a = array.sort((a,b) => {
// 		return a - b;
// 	});
// 	let b = a.slice(1, -1).reduce((a, b) => a + b);
// 	return b;
//    }
// }
// console.log(sumArray(arr));

// 8 kyu
// Is he gonna survive?
// let bullets = 10;
// let dragons = 5;
// function hero(bullets, dragons) {
// 	return ((bullets >= dragons * 2)) ? true : false;

// }
// 	console.log(hero(bullets, dragons));
// 	return bullets >= dragons * 2

// 8 kyu
// Capitalization and Mutability
// let w = 'world';
// function capitalizeWord(word) {
// 	return word[0].toUpperCase() + word.substring(1);

//   }

//   console.log(capitalizeWord(w));
//   return word[0].toUpperCase() + word.slice(1);

// 8 kyu
// Sum Arrays
// function sum (numbers) {
//     return numbers.reduce((a,b) => a + b);

// };
// return numbers.reduce((a, b) => a + b, 0);

// 8 kyu
// Will there be enough space?

// function enough(cap, on, wait) {
// return ((on + wait) < cap) ? 0 : (on + wait - cap);
// }

// console.log(10,5,5);
// return Math.max(wait + on - cap, 0);

// 8 kyu
// Rock Paper Scissors!

// const rps = (p1, p2) => {
// 	if( p1 == p2) {
// 		return 'Draw';
// 	} if (p1 == 'rock' && p2 == 'scissors') {
// 		return "Player 1 won!";
// 	}
// 	if (p1 == 'rock' && p2 == 'paper') {
// 		return "Player 2 won!";
// 	}
// 	if (p1 == 'scissors' && p2 == 'paper') {
// 		return "Player 1 won!";
// 	}
// 	if (p1 == 'scissors' && p2 == 'rock') {
// 		return "Player 2 won!";
// 	}
// 	if (p1 == 'paper' && p2 == 'rock') {
// 		return "Player 1 won!";
// 	}
// 	if (p1 == 'paper' && p2 == 'scissors') {
// 		return "Player 2 won!";
// 	}
// };

// 8 kyu
// Is the string uppercase?

// String.prototype.isUpperCase = function() {
//  }

//    return String(this) === this.toUpperCase();

// 8 kyu
// Expressions Matter

// function expressionMatter(a, b, c) {
// 	let a1 = a + b + c;
// 	let a2 = a + b * c;
// 	let a3 = a * b + c;
// 	let a4 = (a + b) * c;
// 	let a5 = a * (b + c);
// 	let a6 = a * b * c;
// 	let arr = [a1,a2,a3,a4,a5,a6].sort((a,b) => {return a - b;});
// 	console.log(arr);

// 	return arr[arr.length - 1];

// }
// console.log(expressionMatter(6,9,10));
// return Math.max(
//     a + b + c,
//     a * b * c,
//     a * (b + c),
//     (a + b) * c,
//     a + b * c,
//     a * b + c,
//   );

// 8 kyu
// Fake Binary
// let str = '45385593107843568';
// function fakeBin(x){
//   	return str.replace(/[1234]/gi,'0').replace(/[56789]/gi,'1');
//   }
// console.log(fakeBin(str));
// return x.split('').map(n => n < 5 ? 0 : 1).join('');
// return x.replace(/\d/g, d => d < 5 ? 0 : 1);

// 8 kyu
// Calculate average
// let arr =[1,2,3];
// function findAverage(array) {
// 		return array.reduce(((a,b) => a + b)) / array.length;
// 	  }
//   console.log(findAverage(arr));
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length;

//   8 kyu
// Opposites Attract

// function lovefunc(flower1, flower2){
// 	return ((flower1 + flower2) % 2 ) === 0 ? false : true;
//   }
//   console.log(lovefunc(2,3));
//   return flower1 % 2 !== flower2 % 2;
//   return (flower1 + flower2) % 2 === 1

//   7 kyu
// Mumbling
// let s = "ZpglnRxqenU";
// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
// console.log(accum(s));

// 7 kyu
// Get the Middle Character
// let a = 'middle';
// function getMiddle(s){
// if (a.length == 1) {
// 	return a;
// 	} if (a.length % 2 == 0) {
// 		let b = (a.length / 2);
// 		return a[b-1] + a[b];
// 	} if (a.length % 2 == 1) {
// 		let b = (a.length / 2);
// 		return a[b-0.5];
// 	}
// }
// console.log(getMiddle(a));
// return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);

// 7 kyu
// Credit Card Mask
// let cc = '1A34D6789';
// function maskify(cc) {
// 	if (cc.length <= 3) {
// 		return cc;
// 	} if (cc.length > 3) {
// 		let a = cc.split('').splice(-4).join('');
// 		let b = cc.slice(0, -4).replace(/[0-9,a-z]/gi, '#').concat(a);
// 		return b;
// 	}
// }
// console.log(maskify(cc));

// return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// return cc.replace(/.(?=....)/g, '#');
// return cc.replace(/.(?=.{4})/g, "#");

// 7 kyu
// Two to One
// let s1 = "loopingisfunbutdangerous";
// let s2 = "lessdangerousthancoding";

// function longest(s1, s2) {
//     let s3 = s1.split("");
//     let s4 = s2.split("");
//     let s12 = Array.from(new Set(s3));
//     let s13 = Array.from(new Set(s4));
//     let s11 = s12 + s13;
//     let s14 = Array.from(new Set(s11));
//     let s20 = s14.sort().join("").replace(/[\,]/gi, "");
//     return s20;
// }

// let s1 = "loopingisfunbutdangerous";
// let s2 = "lessdangerousthancoding";
// function longest(s1, s2) {
//     return (Array.from(new Set((s1 + s2).split("")))).sort().join("").replace(/[\,]/gi, "");
// }

// console.log(longest(s1, s2));
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// 7 kyu
// Friend or Foe?
// let arr = ["Rysn", "Jimmy", "123", "4", "Cool Man", "Rysn"];
// function friend(friends){
// 	return friends.filter(el => typeof el === 'string' && el.length === 4);
// }
// console.log(friend(arr));
// return friends.filter(n => n.length === 4)

// 7 kyu
// Growth of a Population

// function nbYear(p0, percent, aug, p) {
//     let year = 0;
//     while (p0 < p) {
//         year++;
//         p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
//     }
//     return year;
// }
// console.log(nbYear(1500, 5, 100, 5000));

// 7 kyu
// Find the next perfect square!

// function findNextSquare(sq) {
// 	// if ((Math.sqrt(sq) % 2 == 0) || (Math.sqrt(sq) % 2 == 0.5 || (Math.sqrt(sq) % 2 == 1))) {
// 	// 	return ((Math.sqrt(sq)) + 1) ** 2;
// 	// } else { return -1;
// 	// }
// 	if (Math.sqrt(sq) == Math.floor(Math.sqrt(sq))) {
// 		return ((Math.sqrt(sq)) + 1) ** 2;
// 	} else { return -1;
// 	}
//   }
//   console.log(findNextSquare(121));

//   7 kyu
// Printer Errors,

// function printerError(s) {

// 	let b = s.length - (s.replace(/[n-z]/gi, '').length);
//  return `${b}` + `${'/'}` + `${s.length}`;
// }
// console.log(printerError("aaabbbbhaijjjmx"));
// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// 7 kyu
// Sum of odd numbers

// function rowSumOddNumbers(n) {
// 	return Math.pow(n, 3);
// }
// return n**3
// return n*n*n

// 7 kyu
// Find the stray number
// function stray(numbers) {
// 	let a = numbers.sort((a,b) => a - b);
// 	return a[0] == a[1] ? a[a.length -1] : a[0];

//   }
//   console.log(stray([1, 1,1, 2]));
//   const stray = nums => nums.reduce((a, b) => a ^ b);

// 6 kyu
// Message Validator

// function isAValidMessage(message){
//   function numFromStr(str){
//даёт цифры из строки в виде массива
//     let num = [...str]
//     .map(i => {if(isFinite(i) == true || i == "."){return i;}else{return " ";}})
//     .join("")
//     .split(" ")
//     .filter(i => i != "")
//     .map(i => Number(i));
//     return num;
//   }
//   console.log(numFromStr("3hey5hello2hi"));
//   let b = message.replace(/[0-9]/gi, ' ');
//   console.log(b);

//   return b;
// }
// console.log(isAValidMessage("3hey5hello2hi"));

// 7 kyu
// Multiple remainder of the division

// function isMultiple(a, b, n) {
//   let fractPart = ((a / b) - parseInt(a / b)).toFixed(1);

//    if ((fractPart === 1 && fractPart % n !== 0) || (fractPart < 1 && ((fractPart * 10) % n)  == 0 && fractPart > 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isMultiple(3691401, 1892272, 5));

// var r=Math.round(a*10/b)%10|0;
// return r>0&&r%n===0;

// 7 kyu
// String ends with?

// function solution(str, ending){
//   if (str.split('').splice(-(ending.length)).join('') === ending.split('').join('') || ending === '') {
//     return true;
//   } else {
//     return false;
//   }

// }
// console.log(solution('abc', ''));
// return str.endsWith(ending);

// 7 kyu
// Is It Negative Zero (-0)?.

// function isNegativeZero(n) {
//   if (n === -0) {
//     return true;
//   } if (n === 0 || n > 0 || n < 0){
//     false;a
//   }else {
//      return false;
//   }
//   }
//   console.log(isNegativeZero(-5));

// 7 kyu
// Area of an arrow

// function arrowArea(a,b) {
//   return (a * 0.5 * b) / 2;
// }
// console.log(arrowArea(7,6));
// a*b/4;

// 7 kyu
// Divide and Conquer
// function divCon(x) {
//     let a = x.filter((item) => typeof item === "number");
//     let b = x.filter((item) => typeof item === "string");
//     if (a.length > 0 && b.length > 0) {
//         return a.reduce((a, b) => a + b) - b.reduce((a, b) => +a + +b);
//     } if (a.length < 0 && b.length < 0) {
//         return 0;
//     }
//     if (a.length > 0) {
//         return a.reduce((a, b) => a + b) ;
//     }
//     if (b.length > 0) {
//         return -b.reduce((a, b) => +a + +b);
//     }
// }
// console.log(divCon([2,5,3]));
// return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)

// 7 kyu
// Number of People in the Bus

// var number = function(busStops){
// 	return
//   }

//   number([[10,0],[3,5],[5,8]]);

// 7 kyu
// Find the divisors!

// function divisors(integer) {
//   for (let i = 1; i < integer; i++) {
// 	if (integer / i == -1) continue;
// 	console.log(i);
//   }
// }
// divisors(12);

// 7 kyu
// The highest profit wins!

// function minMax(arr){
// 	if (arr.length >= 2) {
// 		return [Math.min.apply(null, arr),Math.max.apply(null, arr)];
// 	} if (arr.length == 1) {
// 		return [...arr,...arr];
// 	}
// 	  }
//   console.log(minMax([1, 2, 3, 4, 5]));
//   return [Math.min(...arr), Math.max(...arr)];

// 7 kyu
// Sum of the first nth term of Series

// function SeriesSum(n)
// {
//   return n.toFixed(2);
// }
// console.log(SeriesSum(1));

// 7 kyu
// Remove the minimum

// function removeSmallest(numbers) {
// // let a = Math.min(...numbers);
// return numbers.filter(e => e != Math.min(...numbers));

// }
// console.log(removeSmallest([1,2,3,4,1,5]));

// 7 kyu
// Money, Money, Money

// function nbYear(principal, interest, tax, desired) {
//     let year = 0;
//     while (principal < desired) {
//         year++;
//         principal = principal + (principal * interest) - (principal * interest * tax);
//     }
//     return year;
// }
// console.log(nbYear(1000, 0.05, 0.18, 1100));

// 7 kyu
// Sort Numbers

// function solution(nums){

// return (nums !== null && nums.length > 0) ? nums.sort((a,b) => a - b) : [];
// }
// console.log(solution(null));
// return (nums || []).sort(function(a, b){
//     return a - b
//   });

// 7 kyu
// Find the capitals

// var capitals = function (word) {
// 	let a = word.split('');
// 	let b = word.toLowerCase().split('');

// };
// console.log(capitals('CodEWaRs'));

// 7 kyu
// Remove duplicate words
// let s =  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
// console.log((Array.from(new Set(s.split(' ')))).join(' ') );

// 7 kyu
// Coding Meetup #1 - Higher-Order Functions Series
// - Count the number of JavaScript developers coming from Europe
// var list1 = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Maia', lastName: 'S.', country: 'Europe', continent: 'Oceania', age: 28, language: 'JavaScript' },
// 	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Europe', age: 35, language: 'HTML' },
// 	{ firstName: 'Sumayah', lastName: 'M.', country: 'Europe', continent: 'Asia', age: 30, language: 'CSS' }
//   ];

// function countDevelopers(list) {
// 	return list.filter(item => item.language == 'JavaScript').filter(item => item.continent == 'Europe').length;
//   }
//   console.log(countDevelopers(list1));
//   return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length

//   7 kyu
// Thinkful - String Drills: Repeater

// function repeater(string, n){
//   return  string.repeat(n);
// }
// console.log(repeater('a', 5));

// 7 kyu
// Love vs friendship

// function wordsToMarks(string){

// 	// if( "a" == 1, "b" == 2, "c" == 3, 'd' = 4, 'e' == 5,
// 	// 'f' == 6, 'g' == 7, 'h' == 8, 'i' == 9, 'j' == 10 , 'k' == 11,
// 	// 'l' == 12, 'm' == 13, 'n' == 14, 'o' == 15, 'p' == 16, 'q' == 17, 'r' == 18, 's' == 19,
// 	// 't' == 20, 'u' == 21, 'v' == 22, 'w' == 23, 'x' == 24, 'y' == 25, 'z' == 26);
// 	return string.split('');
//   }
//   console.log(wordsToMarks("attitude"));

// 7 kyu
// Find the middle element

// function gimme (triplet) {
// return triplet.indexOf([...triplet].sort((a,b) => a - b)[1]);
// }
// console.log(gimme([1, 3, 2]));
// return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])

// 7 kyu
// Round up to the next multiple of 5

// function roundToNext5(n) {
//     let a = Math.abs(n % 5);
//     console.log(a);
//     if ((n == 0)) {
//         return 0;
//     } if (n % 5 == 0) {
// 		return n;
// 	}
//     if (n > 0) {
//         return n + (5 - a);
//     } if (n < 0) {
// 		return n + a;
// 	}
// }
// console.log(roundToNext5(-6));
// return Math.ceil(n/5)*5;

// while(n % 5 !== 0) n++;
// return n;

// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));

// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);

// async function one() {
//     const promises = [a(), b(), c()];
//     const [outpu1, outpu2, outpu3] = await Promise.all(promises);
//     return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
// }

// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }

// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`
// }

// one().then(console.log);
// two().then(console.log);
// three().then(console.log);

// function getSum(a, b) {
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// getSum(4, 5);

// function foo(a,b) {
//     const [first, second] = a;
//     const {eng, ru} = b;

//     return `${second}, ${ru}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
// console.log(result)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 1000);
//     setTimeout(() => {
//         reject('bar');
//     }, 900);
// });

// promise.then((value) => {
//     console.log(value);
// }).catch((e) => console.log(e))

// function setOptions(height, width, ...additional) {
//     console.log(height, width, ...additional);
// }
// setOptions(400, 500, 'red', 'top');

// async function makeRequest() {
//     return await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(json => console.log(json))
// }

// makeRequest()

// const arr = [
//     {
//         name: 'Alex',
//         salary: 500
//     },
//     {
//         name: 'Ann',
//         salary: 1500
//     },
//     {
//         name: 'John',
//         salary: 2500
//     },
// ];

// const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
// console.log(result)

// let y = 1;
// let x = y = 2;
// console.log(x);

// const msg = 'My number +12345678, name: Oleg';

// function transformMsg(str) {
//  let a = str.replace(/\+\d{8}/, '*****');
//  let b = a.replace(/\w{4}:\s\w{1,}/, 'hidden');

//     return b;
// }

// console.log(transformMsg(msg));

// combineUrls('https', 'mysite.com');

// const combineUrls = (protocol, domain) => {
//     return `${protocol}://${domain}`;
// }

// let c = 4;
// function addX(x) {
//   return function(n) {
//      return n + x;
//   }
// }
// console.log(addX(c));
// const addThree = addX(3);

// let d = addThree(c);
// let res = addThree(c);

// console.log(res)

// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }

//     console.log(sum());
// }

// getSum(4, 5);

// let str = "1s";
// function a() {
//     return str.replace(/[s]/gi, "");
// }
// console.log(typeof +a(str));

// 7 kyu
// Largest pair sum in array
// let arr = [10, 14, 2, 23, 19];
// function largestPairSum (numbers) {
//      let newArr =  numbers.sort((a,b) => a - b).reverse();
//       return newArr[0] + newArr[1]
//   }

//   console.log(largestPairSum(arr))

// 7 kyu
// JavaScript Array Filter
// let arr =[1,2,3,6,8,10];
// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(i => i % 2 == 0)
//   }
//   console.log(getEvenNumbers(arr))

// 7 kyu
// Predict your age!

// function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     return Math.floor((Math.sqrt(age1*age1+age2*age2+age3*age3+age4*age4+age5*age5+age6*age6+age7*age7+age8*age8))/2)
//   }

//   console.log(predictAge(65,60,75,55,60,63,64,45))

//   function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
//     let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
//     return Math.floor(Math.sqrt(arr.map(a => a * a).reduce((b,c) => b + c)) / 2)
//   }

// 7 kyu
// Alternate capitalization

// function capitalize(s){
// 	return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
// 	s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')]

//   };

//   console.log(capitalize("abcdef"))

// 7 kyu
// No oddities here

// function noOdds( values ){
// 	return values.filter(a => a%2 == 0)
//   }
//   console.log(noOdds([0,1,2,3]))

//   7 kyu
// Sum of angles

// function angle(n) {
// 	return 180*(n-2)
//   }
// console.log(angle(61))

// 7 kyu
// Flatten and sort an array

// "use strict";

// function flattenAndSort(array) {
// 	return array.flat().sort((a,b) => a - b);

// }

// console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))

// 7 kyu
// Number of Decimal Digits

// function digits(n) {
// 	return String(n).length
//   }

//   console.log(digits(12345))

//   function digits(n) {
// 	return n.toString().length;
//   }

// 7 kyu
// Sort the Gift Code

// function sortGiftCode(code){
// 	return [...code].sort().join('')
//   }

//   console.log(sortGiftCode('pqksuvy'))

// 7 kyu
// Sort arrays - 1
// let names = ['one', 'two', 'three' ];
// sortme = function( names ){
// 	return names.sort()
// }
// console.log(sortme(names))

// 7 kyu
// Most digits

// function findLongest(array){

// 	return array.sort((a, b)=> b-a)[0]
//   }
//   console.log(findLongest([8, 900, 500]))

// 7 kyu
// Sum of Cubes

// function sumCubes(n){

// 	for (i=1; n)
//   }
//   console.log(sumCubes(3))

// 7 kyu
// Reverse a Number
// function reverseNumber(n) {
// 	return String(n).split('').reverse().join('')
//   }
//   console.log(reverseNumber(123))

// 8 kyu
// Reversed Words

// function reverseWords(str){
//   return str.split(' ').reverse().join(" ")
// }
//   console.log(reverseWords("hello world!"))

// 8 kyu
// Are You Playing Banjo?

// function areYouPlayingBanjo(name) {
//  if (name[0] == 'R' || name[0] == 'r') {
//   return `${name} plays banjo`
//  } else {
//   return `${name} does not play banjo`
//  }
// }
// console.log(areYouPlayingBanjo("Adam"))

// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }

//   8 kyu
// Calculate BMI

// function bmi(weight, height) {
//   let a = weight / (height**2);
//   if (a<=18.5) {

//       return "Underweight";
//   }
//   if (a<=25) {

//       return "Normal";
//   }
//   if (a<=30) {

//       return "Overweight";
//   }
//   if (a>30) {

//       return "Obese";
//   }

// }

//   console.log(bmi(80, 1.8))

// 8 kyu
// Get the mean of an array

// function getAverage(marks){

//  let b =   marks.reduce((sum,cur) => {
//   return (sum + cur);
//  })
// return Math.floor(b / marks.length)
// }

//   console.log(getAverage([1,2,3,4,5,]))

//   function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//   }

// 8 kyu
// Count by X
// function countBy(x, n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(x * i);
//   }
//   return result;
// }

// console.log(countBy(1,10))

// function countBy2(x, n) {
//   var arr = [];
// 	for (var i = x; i <= x * n; i += x) {
// 		arr.push(i);
// 	}
//   return arr;
// }

// function abc(a,b) {
//   let res = [];
//   for (i=1; i<=b; i++){
//      res.push(a*i)
//   }
//   return res;
// }

// console.log(abc(1,10))

// 8 kyu
// Sentence Smash

// function smash (words) {
//   return words.join(' ')
// };

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

// 8 kyu
// Count the Monkeys!

// function monkeyCount(n) {
//  let a = [];
//   for(i=1; i<=n; i++){
//     a.push(i)
//   }
//   return a
//   }

//   console.log(monkeyCount(20));

// 8 kyu
// Convert a string to an array

// function stringToArray(string){

// 	return string.split(' ')

// }

// console.log(stringToArray("Robin Singh"));

// 7 kyu
// Sum of numbers from 0 to N

// var SequenceSum = (function() {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function(count) {
//     let arr=[];
//     for(let i=0;i<=count;i++) {arr.push(i)};
//     let b=arr.reduce((total,next)=>total+next,0)
//     let a=arr.join('+');
//     if(count<0) return `${count}<0`;
//     if(count==0) return `${count}=0`;
//     return `${a} = ${b}`
//   };

//   return SequenceSum;

// })();

// function countA(n) {
//   let res = [];
//   for (i=1; i<=n; i++) {
//     res.push(i)
//   }
//   return res.reduce((a,b) => a +b)
// }
// console.log(countA(6));

// 7 kyu
// Minimize Sum Of Array (Array Series #1)

// function minSum(arr) {

//   let a = arr.sort((a,b) => a -b);
//   return a[0]
// }

// console.log(minSum([5,4,2,3]));

// Sum of all arguments
// function sum(a,b) {
// 	return a + b
//   }

//   console.log(sum(12, 1, 1, 1, 1, 1, 1));

// 7 kyu
// Build a square

// function generateShape(integer){

// 	console.log('*' + integer.repeat(integer));
// }
// console.log(generateShape(5));

// 7 kyu
// Simple beads count

// function countRedBeads(n) {
// 	if (n < 2) {
// 		return 0
// 	} if (n > 2 ) {
// 		return  (n-1) * 2
// 	}
//   }

//   console.log(countRedBeads(3));

// function countRedBeads(n) {
// 	return n < 2 ? 0 : (n-1)*2
//   }

//   console.log(countRedBeads(3));

// 7 kyu
// Sum of Odd Cubed Numbers

// function cubeOdd(arr) {
// 	if ()
// let a = arr.filter((i)=> {

// 	return i % 2 >0
// });
// let b = a.map((item) => {
// 	return 	item **3;
// })
// return b.reduce((a,b)=> {
// 	return a+b
// });
// 	}

// console.log(cubeOdd([1, 2, 3, 4]));

// function cubeOdd(arr) {

// let a = arr.filter((i)=> {
// 	return i % 2 !== 0
// }).map((item) => {
// 	return 	item **3;
// }).reduce((a,b)=> {
// 	return a+b
// });

// if ( typeof(a) == 'number') {
// 		return a;
// 	} else {
// 		return undefined;
// 	}

// }
// console.log(cubeOdd(["a",12,9,"z",42]));

//best Practices
//1
// function isSquare(n) {
// 	return Math.sqrt(n) % 1 === 0;
//   }
//2
//const isSquare = n => Number.isInteger(Math.sqrt(n));
//3
// var isSquare = function(n){
// 	return Number.isInteger(Math.sqrt(n));
//   }

// task 3 done

// task 4

// let arr = [1, 3, 4, 1, 1, 3, 4, 5];
// let count = [];
// function findOdd(A) {
// for (let elem of arr) {
//     if (count[elem] === undefined) {
//     count[elem] = 1;
//     } else {
//     count[elem]++;
//     }
// }
// }
// console.log(findOdd(arr)); // выведет {1: 3, 3: 2, 4: 2, 5: 1}

//task

// let num = 5;
// function makeNegative(num) {
// 	if (num === 0) {
// 		return 0;
// 	} if (num > 0) {
// 		return -num;
// 	}
// }
// console.log(makeNegative(num));

// best solutions
// function makeNegative(num) {
// 	return -Math.abs(num);
//   }

//   function makeNegative(num) {
// 	return num < 0 ? num : -num;
//   }
//task

//task Even or Odd

// let num = 4;
// function even_or_odd(number) {
//   if (number % 2 == 0) {
// 	  return "Even";
//   } else {
// 	return "Odd";
//   }

// }
// console.log(even_or_odd(num));

// best solutions
// function even_or_odd(number) {
// 	return number % 2 ? "Odd" : "Even";
//   }

//   function even_or_odd(number) {
// 	return number % 2 === 0 ? 'Even' : 'Odd';
//  }

//task Opposite number
// let num = -4;
// function opposite(number) {
// 	if (number > 0) {
// 		return -Math.abs(number);
// 	} if (number < 0) {
// 		return Math.abs(number);
// 	} else {
//     return 0;
//   }
// }
//   console.log(opposite(num));

// best solutions
//   function opposite(number) {
// 	return(-number);
//   }

//   const opposite = number => -number;

// function opposite(number) {
//     return number * (-1);
//

//task

// let num = 5;
// function makeNegative(num) {
// 	if (num === 0) {
// 		return 0;
// 	} if (num > 0) {
// 		return -num;
// 	}
// }
// console.log(makeNegative(num));

// best solutions
// function makeNegative(num) {
// 	return -Math.abs(num);
//   }

//   function makeNegative(num) {
// 	return num < 0 ? num : -num;
//   }
//task

//task Even or Odd

// let num = 4;
// function even_or_odd(number) {
//   if (number % 2 == 0) {
// 	  return "Even";
//   } else {
// 	return "Odd";
//   }

// }
// console.log(even_or_odd(num));

// best solutions
// function even_or_odd(number) {
// 	return number % 2 ? "Odd" : "Even";
//   }

//   function even_or_odd(number) {
// 	return number % 2 === 0 ? 'Even' : 'Odd';
//  }

//task Opposite number
// let num = -4;
// function opposite(number) {
// 	if (number > 0) {
// 		return -Math.abs(number);
// 	} if (number < 0) {
// 		return Math.abs(number);
// 	} else {
//     return 0;
//   }
// }
//   console.log(opposite(num));

// best solutions
//   function opposite(number) {
// 	return(-number);
//   }

//   const opposite = number => -number;

// function opposite(number) {
//     return number * (-1);
//

// function smallEnough(a, limit){
//     return Math.max(...a) <= limit;
//   }

// 7 kyu
// Reverse words
//перевернуть каждое слово строки отдельно
// let str = "double  spaces" ;
// function reverseWords(str) {

//     return str.split(' ').map(s => s.split('').reverse().join('')).join(' ');
// }

//   console.log(reverseWords(str));

// 6 kyu
// Multiples of 3 or 5

// let num = 10;
// function solution(number){
// //   if (number < 0) {
// //       return 0;
// //   }
//   for (let i = 0; i <= number; i++) {
//     console.log(i);

//   }

// }

// // console.log(solution(num));
// solution(num);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// function setOptions(height, width, ...additional) {
//     console.log(height, width, ...additional)
// }
// setOptions(400, 500, 'red', 'top');

// 7 kyu
// Sort array by string length

// let arr = [ 'Of', 'A', 'Food', 'Dog' ];
// function sortByLength (array) {
//     return  array.sort((a, b) => a.length - b.length);

//   }

//   console.log(sortByLength(arr));

//   7 kyu
// Regex validate PIN code

// let pin = "1.234";

// function validatePIN(pin) {
//     let t = pin.replace(/[\D\s.,_%]/g, '');
//     let a = +pin;

//     if ((pin.length == t.length)  && (t.length === 4 || t.length === 6) && (a >= 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(validatePIN(pin));

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin);
//   }

//   7 kyu
// Binary Addition
// let a = 1;
// let b = 1;
// function addBinary(a,b) {
//     return (a + b).toString(2);
// }
// console.log(addBinary(a, b));

// Is this a triangle?
// let a = 2;
// let b = 2;
// let c = -2;

// function isTriangle(a,b,c) {
//     let arr = [a,b,c];
//     let sortArr = arr.sort( (a, b) => b - a );

// if (a <= 0 || b <= 0 || c <= 0) {
//     return false;
// }  if (((a > 0 && a !== 0) && (b > 0 && b !== 0) && (c > 0 && c !== 0)) && (sortArr[0] < sortArr[1] + sortArr[2]) || (sortArr[0] == sortArr[1])) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isTriangle(a ,b ,c));

// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }

// 7 kyu
// Ones and Zeros

// let arr = [0, 0, 1, 0];

// function binaryArrayToNumber(arr) {
//     let a = arr.join('');
//     return parseInt(a, 2);
// };

// console.log(binaryArrayToNumber(arr));

// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(""), 2)
//   };

// 6 kyu
// Create Phone Number

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// function createPhoneNumber(numbers){

// console.log(createPhoneNumber(numbers));

// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";

//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }

//     return format;
//   }

//   function createPhoneNumber(numbers){
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }

// 6 kyu
// Find The Parity Outlier

// let arr = [12749518,-165438383,-30101495];
// function findOutlier(integers) {
// 	let a = integers.map((i => ((i % 2)+1)-1));
// 	let indexOfOne = a.lastIndexOf(1);
// 	let lastIndexOfOne = a.indexOf(1);
// 	let indexOfMinusOne = a.lastIndexOf(-1);
// 	let lastIndexOfMinusOne = a.indexOf(-1);
// 	let indexOfZero = a.lastIndexOf(0);
// 	let lastIndexOfZero = a.indexOf(0);

// 	console.log(a);
// 	console.log(lastIndexOfMinusOne);
// 	console.log(indexOfMinusOne);

// 	if ((indexOfMinusOne == lastIndexOfMinusOne) && (indexOfMinusOne >= 0)) {
// 		return integers[indexOfMinusOne];
// 	}
// 	if ((indexOfOne == lastIndexOfOne)) {
// 		return integers[indexOfOne];
// 	}
// 	if (indexOfZero == lastIndexOfZero) {
// 		return integers[indexOfZero];
// 	}
// 	if (indexOfOne >= 0 && indexOfMinusOne >= 0) {
// 		return integers[indexOfZero];
// 	}
// }
// console.log(findOutlier(arr));

// function findOutlier(int){
// 	var even = int.filter(a=>a%2==0);
// 	var odd = int.filter(a=>a%2!==0);
// 	return even.length==1? even[0] : odd[0];
//   }

//   function findOutlier(integers){
// 	return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
//   }
//   function even(num){
// 	return (num % 2 == 0);
//   }
//   function odd(num){
// 	return !even(num)
//   }

// var string = "The quick brown fox jumps over the lazy dog.";

// function isPangram(string){
// 	return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//   }

//   console.log(isPangram(string));

//   6 kyu
// Does my number look big in this?

// let value = 371;

// function narcissistic(value) {
// 	let arr = String(value).split('');

// 	let result = arr.map(i => i ** arr.length).reduce((a, b) => a + b);
// 	if( result == value) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

//   console.log(narcissistic(value));

//   function narcissistic(value) {
// 	return value.toString()
// 				.split('')
// 				.map( (x,i,arr) => x ** arr.length)
// 				.reduce( (a,b)=> +a + +b)
// 				 === value
//   }

// // 7 kyu
// // Remove the minimum
// let numbers = [1,2,3,4,5];
// function removeSmallest(numbers) {
// 	numbers.sort(fn)
//   }

// function arithmetic(a, b, operator) {
// 	if (operator == 'add') {
// 		return a + b;
// 	}
// 	if (operator == 'subtract') {
// 		return a - b;
// 	}
// 	if (operator == 'multiply') {
// 		return a * b;
// 	}
// 	if (operator == 'divide') {
// 		return a / b;
// 	}
//   }

//   console.log(arithmetic(5,2,'add'));
//   console.log(arithmetic(5,2,'subtract'));
//   console.log(arithmetic(5,2,'multiply'));
//   console.log(arithmetic(5,2,'divide'));

//   switch(operator) {
//     case 'add':
//       return a + b;
//     case 'subtract':
//       return a - b;
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       return a / b;
//   }

// 7 kyu
// Sum of a sequence

// const sequenceSum = (begin, end, step) => {
// 	for (let i = begin; i < end; step) {
// 		return i;
// 	}

//   };

//   console.log(sequenceSum(2,6,2));
//   console.log(sequenceSum(1,5,3));

// let ages = [1, 5, 87, 45, 8, 8];

// function twoOldestAges(ages) {
// 	return ages.sort( (a, b) => a - b ).slice(-2);

// }
// console.log(twoOldestAges(ages));

// 7 kyu
// Remove the minimum
// let numbers = [5, 3, 2, 1, 4];
// function removeSmallest(numbers) {
// 	let smallestNumberKEY = 0;
// 	for (let i = 0; i <= numbers.length; i++) {
// 	  if (numbers[i + 1] < numbers[i]) {
// 		smallestNumberKEY = i + 1;
// 	  }
// 	}
// 	numbers.splice(smallestNumberKEY, 1);
// 	return numbers;
//   }

//   console.log(removeSmallest(numbers));

//   7 kyu
// Summing a number's digits

// let number = -32;
// function sumDigits(number) {
// return number.toString().replace(/[\D]/g, '').split('').reduce(function(a,b){ return +a+ +b; });

// }
// console.log(sumDigits(number));
// function sumDigits(number) {
// 	return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
//   }

// 7 kyu
// Sum of all the multiples of 3 or 5

// let n = 10;
// function findSum(n) {
// 	let a5 = Math.floor(n / 5 );
// 	let b3 = Math.floor(n / 3 );

// 	for (let i = a5; i >= n; a5 + a5) {
// 		return a5;
// 	}
// 	return ((a5 * 5) + (b3 * 3));
//   }
//   console.log(findSum(n));

//   7 kyu
// Form The Minimum

// let values = [4, 7, 5, 7];
// function minValue(values) {
// 	let a = Array.from(new Set (values));
// 	let b = a.sort( (a, b) => a - b ).join('');

// 	return +b;
//   }

//   console.log(minValue(values));

//   7 kyu
// Coding Meetup #1 - Higher-Order Functions Series -
// Count the number of JavaScript developers coming from Europe
// var list = [
// 	{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
// 	{ firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
// 	{ firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
// 	{ firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
// function countDevelopers(list) {

//   }
//   console.log(countDevelopers(list));

// 7 kyu
// Count the divisors of a number

// let n = 10;
// function getDivisorsCnt(n){
//     for (let i = 0; i >= n; i++) {
// 		return
// 	}
// }

// console.log(getDivisorsCnt(n));

// 7 kyu
// Narcissistic Numbers
// let n = 153;
// function isNarcissistic(n) {
//  let b = n.toString().split('');
//  let d = Array.from((b), x => x ** b.length).reduce((sum, current) => sum + current, 0);

//   if ( d === n) {
//   return true;
// } else {
// 	return false;
// }

// }

// console.log(isNarcissistic(n));

// function isNarcissistic(n) {
// 	return n === n.toString().split('').reduce((res, num, index, arr) => res += Math.pow(num, arr.length), 0)
//   }

//   const isNarcissistic = (n, $ = n.toString()) => [...$].reduce((a, b)=> a + b**$.length, 0) === n

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
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}
firstTask()(
    // При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

    function a() {
        for (let i = 20; i >= 10; i--) {
            if (i < 13) {
                break;
            }
            console.log(i);
        }
    }
)();

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function a() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}
a();

// Место для четвертой задачи

// Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 1;
while (num <= 15) {
    num += 2;
    console.log(num);
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

let arr = [];
function a() {
    for (let i = 5; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
}
a();

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
    let s = ''
    for(let i = 0; i < a.length; i++){ 
      s += a[i][0].toUpperCase() + a[i].substr(1) + ' '
    }
    return s.trimEnd()
}
console.log(toJadenCase("how can mirrors be real if our eyes aren't real"));
String.prototype.toJadenCase = function () {
  let a = this.split(" ");
  let s = '';
  for (let i = 0; i < a.length; i++) { 
    s += a[i][0].toUpperCase() + a[i].substr(1) + ' ';
  }
  return s.trim().trimEnd();
};



function disemvowel(str) {
  const vowels = (/[aeuio]/gi);
  return str.replace(vowels,'');
}
console.log(disemvowel("This website is for losers LOL!"));