// const timerId = setTimeout(logger, 2000);
//остановка интервала

const btn = document.querySelector(".b-1");
let timerId;
let i = 0;

function myAnimation() {
    const elem = document.querySelector(".box__mini");
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);
// btn.addEventListener("click", () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);
// });

// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     alert("Hello");
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log("1");
//     id = setTimeout(log, 500);
// }, 500);
