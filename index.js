"use strict";
// function f1(x, y) {
//     x + y;
//     return x + y;
// }

// console.log(11 + 3 + 5 + f1(4, 5));
// console.log(f1(6, 7) + f1(4, 5));

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
// console.log(randInt(1, 500));


// document.querySelector('.h1').style.background = 'rgb(25, 156, 201)';
// console.log(100 * f1(3, 4));


document.querySelector(".h1").style.background =`rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;


document.querySelector('.b-3').addEventListener('click',
function() {
    const s = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = 'Hello ' + clearText(s);
    console.log('Hello ' + clearText(s));
});

function clearText(data) {
    return data.trim().toLowerCase();//убирает пробелы и переводит верхний регистр в нижний
}
