// //+++++++++++++++++++++++ LESSON 42 +++++++++++++++++++++++++++//
// let click  = document.getElementById("btn1");
// let click2 = document.getElementById("btn2");
// let click3 = document.getElementById("btn3");

// let delet_btn = (e) => {
//     e.target.remove();
// }

// click.addEventListener('click', delet_btn );
// click2.addEventListener('click', delet_btn );
// click3.addEventListener('click', delet_btn );  

//+++++++++++++++++++++++ LESSON 43 +++++++++++++++++++++++++++//



// let btn_green = document.getElementById("bg_green");
// let btn_red = document.getElementById("bg_red");
// let btn_yellow = document.getElementById("bg_yellow");

// //=============green============//
// let green_btn = (e) => {
//     document.body.style.background = "green";
//     };

// btn_green.addEventListener('click', green_btn );

// //=============red============//
// let red_btn = (e) => {
//     document.body.style.background = "red";
//     };

// btn_red.addEventListener('click', red_btn ); 

// //=============yellow============//
// let yellow_btn = (e) => {
//     document.body.style.background = "yellow";
//     };

// btn_yellow.addEventListener('click', yellow_btn );  


//++++++++++++++LESSON 44++++++++++++++++++++++++++++++++++++++//

// function get_this (a, b) {

//     function arif() {
//         return a+b;
//     };
//     console.log(arif());
// }
// get_this(10, 3)

// const obj = {
//     name: "Urmat",
//     age: 41,
//     sum: function() {
//         console.log(this);
//     }
// };
//  obj.sum();

//  function User(name, age){
//      this.name = name,
//      this.age = age,
//      this.data = function() {
//          console.log( "Hello" + this.name);
//     };
// };
// let men = new User ("Urmat", 41);
// men.data();

// function hello(name) {
//     console.log(this);
//     console.log(this.name);
// };

// const newObj = {
//     name: "urmat",
// };
// hello.call(newObj);
// hello.apply(newObj);

// const click = document.querySelector("#btn1");

// click.addEventListener('click', function() {
//     this.style.background = "red";
// })






//=======================HOMEwork 44=============================//
// Сделать объект, который запрашивает имя пользователя, год рождения, место рождения, с этим объектом должны создаваться все пользователи;
// данные о пользователе вывести на страницу 

// input 
// let amantur= new createUser();
// output: 
// Amantur, 1998, Bishkek.



 function User(name, age, city){
     this.name = name,
     this.age = age,
     this.city = city,
     this.data = function() {
         console.log(this.name, this.age, this.city);
    };
};
let men = new User ("Urmat", 41, "Bishkek");
men.data();
