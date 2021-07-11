///гетеры и сетеры==========//

// const  person = {
//     names: "Urmat",
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }

// };

// console.log(person.userAge);
// console.log(person.userAge = 35);
// console.log(person.userAge);


//=====================HOMEEORK 58======//

// создать объект  для получения данных от пользователя (имя фамилие), данные получаем с помощью инпут. 
// сделать проверку на символы, то есть имя и фамилие минимально должны быть 6 символов.
// отобразить эти данные на консоли . 
// все эти пункты сделать с геттерами и сеттерами. 


// let names = prompt("Введите имя: ");
// let surnames = prompt("Введите фамилию: ");

// const person = {
//     names: names,
//     surnames: surnames,

//     get userName() {
//         return this.surnames;
//     },
    
//     set userName(num) {
//         this.surnames = num;
//     }
// };

// const lengthNames = names.length + surnames.length;


// if(lengthNames > 6) {
//     console.log(lengthNames);
// }
// else {
//     console.log("имя и фамилие минимально должны быть 6 символов")
// }


//=====================HOMEEORK 59======//

function User(name, age) {
    this.name = name;

    let userAge = age;

    this.get = function() {
        console.log(`Имя пользователя: ${this.name}, Возраст: ${this.age}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {

        if(typeof age == "number" && age>1 && age<150) {
            userAge = age;
        } else {
            console.log("Недопустимое значение!");
        }
    };
}

const userData = new User("Urmat", 42);

console.log(userData.name);
console.log(userData.getAge());

userData.setAge(90);

console.log(userData.getAge());

///////////////////////////////

class User {

    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    get () {
        console.log(`Имя пользователя: ${this.name}, Возраст: ${this.age}`);
    }

    getAge () {
        return this.age;
    }

    setAge (age) {

        if(typeof age == "number" && age>1 && age<150) {
            this.age = age;
        } else {
            console.log("Недопустимое значение!");
        }
    };
}

const userData = new User("Urmat", 42);

console.log(userData.name);
console.log(userData.getAge());

userData.setAge(90);

console.log(userData.getAge());