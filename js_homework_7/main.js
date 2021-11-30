/*
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = [
    new User (2365, 'Tania', 'Mul', 'Tania@gmail.com', 380676558),
    new User (3687, 'Kolia', 'Naum', 'Kolia@gmail.com', 380962598),
    new User (7517, 'Andrii', 'Lorn', 'Andrii@gmail.com', 380976452),
    new User (5214, 'Julia', 'Kar', 'Julia@gmail.com', 380665892),
    new User (9921, 'Orest', 'Glo', 'Orest@gmail.com', 3809626357),
    new User (4587, 'Karina', 'Luk', 'Karina@gmail.com', 380978523),
    new User (7514, 'Diana', 'Sen', 'Diana@gmail.com', 3809723645),
    new User (2389, 'Dima', 'Kot', 'Dima@gmail.com', 3806723457),
    new User (2214, 'Danil', 'Shum', 'Danil@gmail.com', 380692357),
    new User (9547, 'Sonia', 'Tor', 'Sonia@gmail.com', 380992567)
]

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = arr.filter(value => value.id % 2 === 0);
console.log(filter);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = arr.sort((a, b) => a.id - b.id);
console.log(sort);*/


//-------------------------------------------------------------

/*
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arr = [
    new Client (2365, 'Tania', 'Mul', 'Tania@gmail.com', 380676558, ['Bread', 'Milk', 'Edd']),
    new Client (3687, 'Kolia', 'Naum', 'Kolia@gmail.com', 380962598, ['Cheese', 'Meat', 'TV']),
    new Client (7517, 'Andrii', 'Lorn', 'Andrii@gmail.com', 380976452, ['Refrigerator', 'Milk', 'Gainer']),
    new Client (5214, 'Julia', 'Kar', 'Julia@gmail.com', 380665892, ['Bread', 'Cookies', 'Edd', 'Feed']),
    new Client (9921, 'Orest', 'Glo', 'Orest@gmail.com', 3809626357, ['Pepper', 'Protein', 'Cheese']),
    new Client (4587, 'Karina', 'Luk', 'Karina@gmail.com', 380978523, ['Bread', 'Milk', 'Edd', 'Apple']),
    new Client (7514, 'Diana', 'Sen', 'Diana@gmail.com', 3809723645, ['Bread', 'Cookies', 'Edd']),
    new Client (2389, 'Dima', 'Kot', 'Dima@gmail.com', 3806723457, ['Bread', 'Feed', 'Protein']),
    new Client (2214, 'Danil', 'Shum', 'Danil@gmail.com', 380692357, ['Phone', 'Yogurt', 'Edd', 'Meat']),
    new Client (9547, 'Sonia', 'Tor', 'Sonia@gmail.com', 380992567, ['Orange', 'Pepper'])
];

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort = arr.sort((a, b) => a.order.length - b.order.length);
console.log(sort);*/