"use strict";

class Rectangle {
    constructor(hieght, width) {
        this.hieght = hieght;
        this.width = width;
    }
    calcArea() {
        return this.hieght * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(hieght, width, text, bgColor) {
        super(hieght, width); //вызывает тоже самле что было у родителя this.hieght и this.width
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor} `);
    }
}
const div = new ColoredRectangleWithText(25, 10, "Hello", "red");
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);

// console.log(long.calcArea());
// console.log(square.calcArea());
