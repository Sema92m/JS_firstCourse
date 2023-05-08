// const lineCount = 4;
// for(let i=1;i <=lineCount; i++){
//   console.log('*'.repeat(i));
// }//обычная ёлка

// const lineCount1 = 5;
// for(let i=5;i <=lineCount1; i--){
// 	if(i<1){
//         break
//     }
//   console.log('*'.repeat(i));
//обратная половина елки(от 5 к 1)

// let lines = (line = 5),
//     a = ".",
//     b = "*";
// while (line-- > 0)
//     console.log(
//         Array(line + 1).join(a) +
//             Array(2 * (lines - line)).join(b) +
//             Array(line + 1).join(a)
//     );

function* generateFirTree(height) {
    let blanks = " ".repeat(height - 1), // (1)
        asterisks = "*"; // (2)

    for (let i = 0; i < height; i++) {
        yield blanks + asterisks + blanks; // (3)
        blanks = blanks.slice(0, -1); // (4)
        asterisks += "**"; // (5)
    } // (6)
}

for (let line of generateFirTree(34)) {
    console.log(line);
}
//     Как это работает generateFirTree:

//1 Инициализируем начальное количество пробелов равное высота дерева - 1
//2 Инициализируем начальное количество звезд
//3 В цикле генератор возвращает строку равную blanks + asterisks + blanks
//4 Через .slice() убираем из blanks один пробел справа
//5 Добавляем в asterisks две звездочки
//6 Повторяем проход
