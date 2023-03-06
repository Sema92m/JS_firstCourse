
function calculate(f) {
  return function (a) {
      return function (b) {
          return f(a, b);
      };
  };
}

function sum(a, b) {
  return [...arguments];
}

let curriedSum = calculate(sum);

console.log(curriedSum(1, 1)(1, -1));

function curry(f) {
  // curry(f) выполняет каррирование
  return function (a) {
      return function (b) {
          return f(a, b);
      };
  };
}
function sum(a, b) {
  return a + b;
}
let curriedSum1 = curry(sum);
console.log(curriedSum1(1, 2)(2));

// Noncurried version//
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // 10




//my CW solution
// You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.
// The function should contain at least 1 argument per set.

// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17


const addCurry = (...args1) => {
  return (...args2)=>{
    const arr = [args1,args2];
    const result = [];
    const flatternArray = function (arr) {
      for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] !== "number") {
              flatternArray(arr[i]);
          } else result.push(arr[i]);
      }
      return result
      };
      flatternArray(arr)
          return result.reduce((acc, num)=> acc+num)
  }
}
console.log(addCurry(2, 5)(7, 2));


// const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);

// function calculate(...a) {
//   return function (...b) {
//     return [...a, ...b].reduce((sum, n) => sum + n)
//   };
// }

// calculate =
//     (...n) => 
//       (...e) =>
//         [...n, ...e]
//           .reduce((a, b) => a + b);


// function calculate(...xa) {
//   return (...xb) => xa.concat(xb).reduce((a, b) => a + b, 0)
// }

// const calculate = (...outer) => (...inner) => outer.concat(inner).reduce((p, c) => p + c);