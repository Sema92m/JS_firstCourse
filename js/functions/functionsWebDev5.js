"use strict";

const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out31 = document.querySelector('.out-31');


function f1(arr, myFunc, block) {
	arr[3] = arr[3] * 2;
	// out1.innerHTML = arr1;
	myFunc(arr, block);
}

function showArr(arr, block) {
	let out = '';
	for (let i = 0; i < arr.length; i++) {
		out += arr[i] + '_';
	}
	block.innerHTML = out;
}

function showArr2(arr, block) {
	let out = '';
	for (let i = 0; i < arr.length; i++) {
		out += arr[i] + '*';
	}
	block.innerHTML = out;
}

f1(arr1, showArr, out1);
f1(arr1, showArr2, out2);


///пример коллбека
function squad(item) {
	return item**2;
}
const arr2 = arr1.map(squad);
console.log(arr2);
showArr(arr2, out31);




///пример с input
//вводим в поле любое имя "АлллЕКС   " а функция его переводи в ловер кейс
//и без пробелов

//коллбек функция fixUserName
//т е функц getUserName использует как аргумент fixUserName

document.querySelector('.b-3').addEventListener('click', ()=> {
	getUserName(fixUserName);
});
	

function getUserName(fixFunc) {
	const userName = document.querySelector('.i-3').value;
	console.log(fixFunc(userName));
}


function fixUserName(str) {
	return str.trim().toLowerCase();
}



// асинфхронная коллбэк функция

// async function pageLoader(callback) {
// 	const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// 	callback(data);
// }
// function pageLoader(callback) {
// fetch('https://jsonplaceholder.typicode.com/todos/1') //запускает процесс извлечения ресурса из сети
// .then(response => response.json()) //дожидаюсь ответа сервера
// .then(json => callback(json)); //после получения ответа запускаю коллбек

// }

// function getAjax(data) {
// 	console.log('Послал запрос');
// 	console.log('Ответ сервера');
// 	console.log(data);
// }

// pageLoader(getAjax);


//ад коллбеков - когда вложенность не позволяет читать функцию нормально

// function pageLoader() {
// 	fetch('https://jsonplaceholder.typicode.com/todos/1') //запускает процесс извлечения ресурса из сети
// 		.then(response => response.json()) //дожидаюсь ответа сервера
// 		.then(json => {
// 			console.log('Послал запрос');
// 			console.log('Ответ сервера');
// 			console.log(json);
// 			fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
// 				.then(response => response.json()) 
// 				.then(json => {
// 					console.log('Послал запрос');
// 					console.log('Ответ сервера');
// 					console.log(json);
// 			});
// 		});
// }

// pageLoader();


function pageLoader(url, callback) {
	fetch(url) 
		.then(response => response.json()) 
		.then(json => callback(json));
}

function getAjax(data) {
	console.log('Послал запрос');
	console.log('Ответ сервера');
	console.log(data);
	pageLoader('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser);
}

function showUser(user) {
	console.log(user);
}


pageLoader('https://jsonplaceholder.typicode.com/todos/1', getAjax);