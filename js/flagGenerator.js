"use strict";

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
// document.querySelector(".flag__item__1").style.background =`rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// document.querySelector(".flag__item__2").style.background =`rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// document.querySelector(".flag__item__3").style.background =`rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;

// document.querySelector('.b-3').addEventListener('click',
// function() {
//     const s = document.querySelector('.i-3').value;
//     document.querySelector('.out-3').innerHTML = 'Hello ' + clearText(s);
//     console.log('Hello ' + clearText(s));
// });

// function clearText(data) {
//     return data.trim().toLowerCase();//убирает пробелы и переводит верхний регистр в нижний
// }
// let c = 9;
// function count() {
// 	c++;
// 	console.log(c);
// }
// count();

// document.querySelector('.flag').addEventListener('mousemove', blockWidth); //при наведении
// document.querySelector('.flag').onclick = count; //при клике

// let widthFlag = 250;
// function blockWidth() {
// 	widthFlag++;
// 	document.querySelector('.flag').style.width = widthFlag + 'px';
// } //рост по ширине

let backgroundColor1 = 0;
function backgroundColorNew1() {
    document.querySelector(".flag__item__1").style.background = `rgb(${randInt(
        0,
        255
    )}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
}
let backgroundColor2 = 0;
function backgroundColorNew2() {
    document.querySelector(".flag__item__2").style.background = `rgb(${randInt(
        0,
        255
    )}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
}
let backgroundColor3 = 0;
function backgroundColorNew3() {
    document.querySelector(".flag__item__3").style.background = `rgb(${randInt(
        0,
        255
    )}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
}
document.querySelector(".flag__item__1").onclick = backgroundColorNew1;
document.querySelector(".flag__item__2").onclick = backgroundColorNew2;
document.querySelector(".flag__item__3").onclick = backgroundColorNew3;
