// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastname = lName;
// }
//
// var p1 = new Person("Alex", "Pupkin");
// // console.log(p1);
//
// Person.prototype.getFullName = function () {
//     return this.firstName + " " + this.lastname;
// }
// console.log(p1.hasOwnProperty("getFullName"));
// console.log(p1.hasOwnProperty("firstName"));
// console.log(p1.hasOwnProperty("lastname"));
// console.log(p1.getFullName());
//
// function Employee(fName, lName, eId) {
//     Person.call(this, fName, lName);
//     this.empId = eId;
// }
//
// Employee.prototype = Object.create(Person.prototype);
//
// Employee.prototype.constructor = Employee;
//
// Employee.prototype.getEmpInfo = function () {
//     return [this.empId, this.firstName, this.lastname]
// }
//
// var e1 = new Employee("Jean", "Harris", 19);
// console.log(e1.getEmpInfo());
// console.log(e1.getFullName());


function Block(color) {

    this.color = color;
}

Block.prototype.getColor = function () {
    return this.color
}

function ColoredBlock(color, length, width) {
    Block.call(this, color);
    this.length = length;
    this.width = width
}

ColoredBlock.prototype = Object.create(Block.prototype);
ColoredBlock.prototype.constructor = ColoredBlock;

ColoredBlock.prototype.getSquare = function () {
    return this.length * this.width
}

const red = new ColoredBlock("red", 500, 300);
const blue = new ColoredBlock("blue", 400, 200);
const green = new ColoredBlock("green", 300, 200);
const black = new Block("black")

const redBlock = document.getElementsByClassName("red-block")[0];
const blueBlock = document.getElementsByClassName("blue-block")[0];
const greenBlock = document.getElementsByClassName("green-block")[0];
const blackBlock = document.getElementsByClassName("block")[0];

const eventListenerAdder = (htmlBlock, block) => {
    if (block === black) {
        htmlBlock.addEventListener("click", () => {
            alert("The color is " + block.getColor())
        })
    } else {
        htmlBlock.addEventListener("click", () => {
            alert("The square is " + block.getSquare() + ", and the color is " + block.getColor())
        })
    }

}


eventListenerAdder(redBlock, red);
eventListenerAdder(blueBlock, blue);
eventListenerAdder(greenBlock, green);
eventListenerAdder(blackBlock, black);











