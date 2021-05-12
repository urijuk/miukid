
//==============HOMEWORK 30==============================//

// Сделать функцию которая вычисляет длину окружности, радиус задает пользователь.
// function dlinaKruga (d){
//     let p=3.14;
//     let c=p*d
//     console.log(c)
// }
// dlinaKruga (8)




// // Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b
// function min(a,b) {
//     let aa=a-b
//     let bb=b-a
//     if (aa>0) {
//         console.log(a);
//     } else {
//         console.log(b)
//     }
// }
// min (5, 9)


// ==============================LESSON 31//

// function name_function (peremenay) {
//     let number=50;
//     let result;
//     result=number+peremenay;
//     alert (result);
// }
// name_function(300);

// //==================homework 31==============//

// // Сделайте функцию которая возводить в степень числа вводимые пользователем//

// function stepen (peremenX) {
//     let numberX=4;
//     resultX=numberX**peremenX;
//     console.log (resultX)
// }
// stepen (3);

// // Сделайте функцию которая находит площадь круга, радиус вводить пользователь //

// function ploshad (radius) {
//     let p=3.14;
//     let resultY=p*radius**2;
//     console.log (resultY)
// }
// ploshad (5);

// //  Сделайте функцию которая находит площадь прямоугольника, длину и ширину вводить пользователь.//

// function ploshad_pramougolnika (a, b) {
//     let resultZ=a*b;
//     console.log (resultZ)
// }
// ploshad_pramougolnika (6, 9);

//============================LESSON 32=====================//
// методы и свойства//

// let text="Привет, как у тебя дела?";
// console.log(text.length);
// console.log(text.indexOf("тебя"));
// console.log(text.search);
// console.log(text.slice(7, 11));
// console.log(text.replace("тебя", "меня"));
// console.log(text.toUpperCase())

// let x=123;
// x.toString();
// console.log(x*5)

// let z=9.51524;
// console.log(z.toExponential(2));

// let y=6.48792;
// console.log(y.toFixed(0))
// console.log(y.toFixed(2))

// let a=9;
// let b="10";
// let result=a+ +b;
// console.log(result)

//================HOMEWORK 32==========================//
// сделайте функцию которая суммируем два числа с плавающей точкой
// пример: если пользователь  ввел 1.2, 1.2 вывод должен быть 2. 
// пример: если пользователь  ввел 2.5, 2.3 вывод должен быть 5
// пример: если пользователь  ввел 2,5, 2.7 вывод должен быть 5. 
// пример: если пользователь  ввел 2,5, 3,2 вывод должен быть 6.


// let a=1.2;
// let b=1.2;
// let result=a+b;
// console.log(result.toFixed(0));

// let c=2.5;
// let d=2.3;
// let result2=c+d;
// console.log(result2.toFixed(0));

// let e=2.5;
// let f=2.7;
// let result3=e+f;
// console.log(result3.toFixed(0));

// let x=2.5;
// let y=3.2;
// let result4=x+y;
// console.log(result4.toFixed(0))

//==========LESSON 33==================//

let add_to_bin = document.getElementsByClassName("addBin");
    console.log(add_to_bin);

let myFunction=function(evt){
    evt.preventDefault();
    
    let product = this.parentNode.parentNode.querySelectorAll(".title_product");
    let price_product = this.parentNode.parentNode.querySelectorAll(".price_product");
    let img_product = this.parentNode.parentNode.querySelectorAll(".img_product img");

    let creat_li = document.createElement('li');


    console.log(product[0].innerText);
    console.log(price_product[0].innerText);
    console.log(img_product[0].src);

   
        

    creat_li.innerHTML = '<div class="bin">\
                                <div class="bin_img">\
                                <img src="'+img_product[0].src+'" alt="">\
                                </div>\
                                <div class="bin_texts">\
                                    <p class="bin_text_1">\
                                        <a href="#">'+product[0].innerText+'</a>\
                                    </p>\
                                    <div class="">\
                                        <span class="bin_text_bold">'+price_product[0].innerText+'</span>\
                                        <span class="bin_text_underline">$42.00</span>\
                                    </div>\
                                    <div class="bin_icon">\
                                            <i class="fab fa-bitbucket"></i>\
                                    </div>\
                                </div>\
                            </div>';
    let block_cart = document.querySelector('.block_Bin ul');
    block_cart.appendChild(creat_li);

};
// evt.preventDefault(); не будет скорлит к началу страницы//

for (var i=0;i<add_to_bin.length;i++) { 
    add_to_bin[i].addEventListener('click', myFunction, false)}
