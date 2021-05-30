// let string = "text";
// let letObj = new String (string);

// console.log(string);
// console.log(letObj);

// console.log(typeof(string));
// console.log(letObj)

// let car = {
//     kuzov:"железо",
//     koleso:"4 колеса",
//     modal: function() {
//         console.log("hello");
//     }
// };

// // let mb = {
// //     marka:"мерс",
// //     god:"2021"
// // };
// let mb = Object.create(car);
// mb = {
//     marka:"мерс",
//     god:"2021"
// };    


// // mb.__proto__ = car;
// // Object.setPrototypeOf(mb, car);

// console.log (mb.kuzov);
// console.log (mb.modal);
// mb.modal();

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000
};
let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200
}

console.log(salary.almaz+bonus.almaz);
console.log(salary.adilet+bonus.adilet);
console.log(salary.nursultan+bonus.nursultan)