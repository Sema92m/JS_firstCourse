"use strict";
//this -> это то что окружает функцтю и в какких условиях она вызывается

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }
// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	 b: 15,
// 	 sum: function() {
// 		console.log(this);
// 	 }
// }

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     }
// let ivan = new User('Ivan, 23');

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);

// }

// const user = {
// 	name: 'Ana'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this*num;
// }
// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));
// 1) обычная функ this = window,  но если есть strict то -undefined
// 2) контекст у методов объекта будет САМ ОбЪЕКТ
//3) this в конструкторах и классах это новый экземпляр объекта
//4) ручная привязка this: call apply i bind

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    console.log(this);
});
