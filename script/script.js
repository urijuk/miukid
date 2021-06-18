//========================LESSON 45=======================//

// class ploshad {

//     constructor (width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     calcPloshad() {
//         return this.width * this.height;
//     }

//     calcPloshad2() {
//         return this.width + this.height;
//     }
// }

// const res_area = new ploshad(10, 20);
// const res_area2 = new ploshad(30, 40);
// console.log(res_area.calcPloshad());
// console.log(res_area2.calcPloshad2());

// class ploshadText extends ploshad {
//     // extends связка двух классов
//     constructor (width, height, text, value) {
//         super(width, height);
//         this.text = text;
//         this.value = value;
//     }

//     showText() {
//         console.log(`Text: ${this.text} | Value: ${this.value}`);
//     }
// }
//  const block = new ploshadText (20, 20, "Urmat", "Тема урока класс");

//  block.showText();
//  console.log(block.calcPloshad());

 //===================HOMEWORK 45==================//

//  Реализуйте класс Student (Студент), который будет наследовать от класса User,
//  подобно тому, как это сделано в теоретической части урока. Этот класс
//  должен иметь следующие свойства: name (имя, наследуется от User),
//  surname (фамилия, наследуется от User), year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
//  с помощью которого можно вывести одновременно имя и фамилию студента.
//  Также класс должен иметь метод getCourse(), который будет выводить 
//  текущий курс студента (от 1 до 5). Курс вычисляется
//  так: нужно от текущего года отнять год поступления в вуз.
//  Текущий год получите самостоятельно.

class user {

    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return this.name + this.surname;
    }
}

class student extends user {
   
    constructor (name, surname, year, this_year) {
        super(name, surname);
        this.year = year;
        this.this_year = this_year;
    }

    getCourse() {
        return this.this_year-this.year
    }
}
 const i_am = new student ("Urmat ", "Zhunushov", 2020, 2021);

 i_am.getCourse();
 console.log(`I ${i_am.getFullName()}`, `learning in course ${i_am.getCourse()}`);