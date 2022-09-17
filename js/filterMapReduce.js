'use strict';



//filter

// const names = ['Ivan', 'Ana', 'Ewa', 'Valdesmar'];
// const shortNames = names.filter(function(name) {
// 	 return name.length < 5;
// });

// console.log(shortNames);


//map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers);


//every/some

// const some = [4, 'aba', 'brb'];
// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


//reduce --схлопывает в массив в едтное целое

// const arr = [4,5,1,3,2,6];
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => sum + ', ' + current);
// const res = arr.reduce((sum, current) =>`${sum}, ${current}`);
// console.log(res);



const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal'
}; 
const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(newArr);



console.log();



