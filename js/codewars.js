"use strict";

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

let str = "How can mirrors be real if our eyes aren't real";
String.prototype.toJadenCase = function () {
let a = str.split(' ');
// let b = a.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(' ');
return console.log(a);
  };
str.toJadenCase();