"use strict";

// const box = document.getElementById("box");
// console.log(box);

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);
// const btns = document.getElementsByTagName("button");
// console.log(btns[1]);

// const circles = document.getElementsByClassName("circle");
// console.log(circles);

// const hearts = document.querySelectorAll(".heart");
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


const box = document.getElementById("box");
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName("circle");
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: green; width: 300px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }


hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); 

div.classList.add('black');
// document.body.append(div);//берем тег body как родителя и во внутрь его в конец добавляем div
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);


wrapper.insertBefore(div, hearts[1]);
// circles[0].remove();

// hearts[0].replaceWith(circles[0]);,


div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'hello';


div.insertAdjacentHTML('afterend','<h2>Hello</h2>');
















// let HitsStorage = 0;

// HitsStorage = function () {
//         var keyLength = 10;
//         var possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         var result = '';
//         for (var i = 0; i < keyLength; i += 1) {
//             result += possibleValues.charAt(Math.floor(Math.random() * possibleValues.length));
//         }
//         return result;
//     };
    
//     console.log(HitsStorage());

