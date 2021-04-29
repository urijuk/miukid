// let title_product=document.getElementsByClassName("title_product");
// console.log(title_product[0].innerText);

// let price_product=document.getElementsByClassName("price_product");
// let price_product_del=document.getElementsByClassName("price_product_del");

// console.log(price_product[0].innerText);
// console.log(price_product_del[0].innerText);

// var arr=["яблоко", "апельсин", "груша"];
// arr.forEach(function(item, i, arr){
// alert(i+ ":" +item+"(массив:"+arr+")");
// });


// var arr=[1, -1, -2, 2, 3];
// var positiveArr =arr.filter(function(number){
//     return number>0;
// })
// alert(positiveArr);
// // выводить цифры больше 0


// // var name=["HTML", "CSS", "JavaScript"];
// // var nameLengths=names.map(function(name){
// //     return name.length;
// // });
// // alert(nameLengths);


// var arrs=[1, -1, 2, -2, 3];
// function isPositive(number){
//     return number>0;
// }
// alert(arrs.every(isPositive)); 
// // все элементы положительные?
// alert(arrs.some(isPositive)); 
// //  есть ли элементы положительные?

// var arr=[1, 12, 23, 43, 5];
// var result=arr.reduce(function(sum, current){
//     return sum+current;
// })
// alert(result);


//===================HOMEWORK 29=======================//

// с помощью цикла сделайте перебор товаров

let title_product=document.getElementsByClassName("title_product");

for (let text of title_product) {
    console.log(text.innerText);
}



// по клику получить название товара с помощью js//
var elements=document.getElementsByClassName("addBin");

var myFunction=function(){
    var attribute=this.parentNode.parentNode.querySelectorAll(".title_product");
    console.log(attribute[0].innerText);
};

for (var i=0; i<elements.length; i++){
    elements[i].addEventListener("click", myFunction, false);
};

// по клику получить цену товара с помощью js

var balans=document.getElementsByClassName("balans");

var myFunction2=function(){
    var som=this.parentNode.parentNode.querySelectorAll(".price_product");
    console.log(som[0].innerText);
};

for (var i=0; i<balans.length; i++){
    balans[i].addEventListener("click", myFunction2, false);
};

// по клику получить адрес картинки с помощью js

var img=document.getElementsByClassName("like");

var myFunction3=function(){
    var image=this.parentNode.parentNode.parentNode.querySelectorAll(".image_product");
    console.log(image,["href"]);
};

for (var i=0; i<img.length; i++){
    img[i].addEventListener("click", myFunction3, false);
};




