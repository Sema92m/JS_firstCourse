function hello() {
    console.log("Hello", this);
}

const person = {
    name: "Sasha",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    },
};

const lena = {
    name: "Elena",
    age: 23,
};

// const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "8-999-32329323");
// fnLenaInfoLog();

// person.logInfo.bind(lena, "Frontend", "8-999-32329323")()
// person.logInfo.call(lena, "Frontend", "8-999-32329323")//метод call тоже самое как bind но сразувызывает функцию
person.logInfo.apply(lena, ["Frontend", "8-999-32329323"])// тоже самое что и call носпособ передасчи параметров -> в массив


//========
const array = [1,2,3,0,4,5];


// function multBy(arr,n){
// 	return arr.map(function(i) {
// 		return i * n;
// 	})

// }
// console.log(multBy(array,5))

Array.prototype.multBy = function(n) {
	return this.map(function(i) {
				return i * n;
})
}
console.log(array.multBy(2))