/*
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }

    this.info = function (){
        console.log(`Model - ${this.model}\n Producer - ${this.producer}\n Year - ${this.year}\n MaxSpeed - ${this.maxSpeed}\n Volume - ${this.volume}`);
    }

    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue){
        this.year = newValue;
    }

    this.addDriver = function (driver){
        this.driver = driver;
    }
}*/

//---------------------------------------------------------------------------

/*
//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class car {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }

    info() {
        console.log(`Model - ${this.model}\n Producer - ${this.producer}\n Year - ${this.year}\n MaxSpeed - ${this.maxSpeed}\n Volume - ${this.volume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}*/

//---------------------------------------------------------------------------

/*
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella (name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}

let cinderellaArr = [
    new Cinderella('Tania', 19, 32),
    new Cinderella('Anna', 26, 36),
    new Cinderella('Sophia', 22, 30),
    new Cinderella('Marta', 18, 37),
    new Cinderella('Diana', 27, 40),
    new Cinderella('Olena', 30, 35),
    new Cinderella('Nadia', 24, 29),
    new Cinderella('Marina', 31, 41),
    new Cinderella('Sonia', 20, 31),
    new Cinderella('Julia', 22, 38),
];

class prince{
    constructor(name, age, shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let Prince = new prince('Kiril', 24, 29);

let find = (cinderellaArr, Prince) => {
     for (let i = 0; i < cinderellaArr.length; i++) {
         if (cinderellaArr[i].size === Prince.shoe) {
             return cinderellaArr[i].name;
         }
     }
};
console.log(find(cinderellaArr, Prince));

let cinderellaFind = cinderellaArr.find(value => value.size === Prince.shoe);
console.log(cinderellaFind);*/