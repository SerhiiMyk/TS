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

interface IUser {
    name: string;
    age: number;
    gender: string;
}

const user: IUser = {name: 'Max', age: 18, gender: 'male'}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): object {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
incAge(user, 2)
console.log(user.age);

//
// 2)написать интерфейс Animal который описывает:
//     -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию

interface IAnimal {
    move: string;
    say: string;

    info(): void;
}

class Cat implements IAnimal {
    move: string;
    say: string;

    constructor(move, say) {
        this.say = say;
        this.move = move;
    }

    info(): void {
        console.log('Cat move ' + this.move + ' and say ' + this.say)
    }

}

class Bird implements IAnimal {
    move: string;
    say: string;

    constructor(move, say) {
        this.say = say;
        this.move = move;
    }

    info(): void {
        console.log('Bird say ' + this.move + ' and say ' + this.say)
    }

}

class Fish implements IAnimal {
    move: string;
    say: string;

    constructor(move, say) {
        this.say = say;
        this.move = move;
    }

    info(): void {
        console.log('Fish say ' + this.move + ' and say ' + this.say)
    }

}

let cat1 = new Cat('fast', 'miu')

cat1.info()

// *** 3) создать абстрактный класс Shape:
//     добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

class Shape {
    perimetr(): void {
        console.log('Perimetr: ')
    }

    area(): void {
        console.log('Area: ')

    }
}

class Triangle extends Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }


    perimetr() {
        super.perimetr();
        console.log(this.a + this.b + this.c);
    }


    area() {
        super.area();
        console.log((this.a * this.b) / 2);
    }
}



class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }


    perimetr() {
        super.perimetr();
        console.log(this.a + this.b);
    }


    area() {
        super.area();
        console.log(this.a * this.b);
    }
}

let triangle1 = new Triangle(2, 2, 4)
let rectangle1 = new Rectangle(2, 2)

let shapes = [triangle1, rectangle1]

for (let shape of shapes) {
    shape.perimetr()
    shape.area()
}