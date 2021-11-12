// 1) создать интерфейс на основе user и протипизировать функции:
//
//     const user = {
//         name:"Max",
//         age:18,
//         gender:'male'
//     }
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = { name: 'Max', age: 18, gender: 'male' };
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
console.log(user.age);
var Cat = /** @class */ (function () {
    function Cat(move, say) {
        this.say = say;
        this.move = move;
    }
    Cat.prototype.info = function () {
        console.log('Cat move ' + this.move + ' and say ' + this.say);
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(move, say) {
        this.say = say;
        this.move = move;
    }
    Bird.prototype.info = function () {
        console.log('Bird say ' + this.move + ' and say ' + this.say);
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(move, say) {
        this.say = say;
        this.move = move;
    }
    Fish.prototype.info = function () {
        console.log('Fish say ' + this.move + ' and say ' + this.say);
    };
    return Fish;
}());
var cat1 = new Cat('fast', 'miu');
cat1.info();
// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.perimetr = function () {
        console.log('Perimetr: ');
    };
    Shape.prototype.area = function () {
        console.log('Area: ');
    };
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimetr = function () {
        _super.prototype.perimetr.call(this);
        console.log(this.a + this.b + this.c);
    };
    Triangle.prototype.area = function () {
        _super.prototype.area.call(this);
        console.log((this.a * this.b) / 2);
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimetr = function () {
        _super.prototype.perimetr.call(this);
        console.log(this.a + this.b);
    };
    Rectangle.prototype.area = function () {
        _super.prototype.area.call(this);
        console.log(this.a * this.b);
    };
    return Rectangle;
}(Shape));
var triangle1 = new Triangle(2, 2, 4);
var rectangle1 = new Rectangle(2, 2);
var shapes = [triangle1, rectangle1];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    shape.perimetr();
    shape.area();
}
