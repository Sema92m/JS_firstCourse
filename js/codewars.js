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

var array1 = [true,  true,  true,  false,
	true,  true,  true,  true ,
	true,  false, true,  false,
	true,  false, false, true ,
	true,  true,  true,  true ,
	false, false, true,  true ];

function countSheeps(arrayOfSheep) {
	
	return arrayOfSheep.filter(item => item === true).length;

  }

console.log(countSheeps(array1));




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