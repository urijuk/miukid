// const Data = {
//     name: 'Urmat',
//     age: 41,
//     parents: {
//         parent1: "Father",
//         parent2: "mother"
//     }
// };

// // console.log(Data);

// const newObj = JSON.parse(JSON.stringify(Data));
// newObj.parents.parent1 = "Urmat";

// console.log(JSON.stringify(Data));
// console.log(JSON.parse(JSON.stringify(Data)));
// console.log(newObj);

//==========================LESSON 49===================//

(function () {
'use strict';

// const inputSom = document.querySelector("#som");
// const inputUsd = document.querySelector("#usd");

// inputSom.addEventListener( 'input', ()=> {
//     const request = new XMLHttpRequest();
//     request.open("GET", "current.json");
//     request.setRequestHeader("content", "application/json; sharset=UTF-8");
//     request.send();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState ===4 && request.status ===200) {
//             const currency = JSON.parse(request.response);
//             const result =  inputSom.value/currency.current.usd;
//             inputUsd.value = (result).toFixed(2);
//         }
//     })
// } );

//====================LESSON 52========================//


//filter

// const array = ["Яблоки", "Груши", "Виноград", "Апельсин"];
// const result = array.filter(function(fruit) {

//     if (fruit.length < 7) {
//         return fruit
//     }
// });

// console.log(result);

//map

// const array = ["Яблоки", "ГРУШИ", "Виноград", "Апельсин"];
// const result = array.map(item=>item.toLowerCase());

// console.log(result);

//every/some

// const array = [5, "ГРУШИ", "Виноград", "Апельсин"];

// const result = array.some(item=>typeof(item)=='number');
// const result = array.every(item=>typeof(item)=='number');

// console.log(result);

// reduce

// const array = [1,2,3,4,5];

// const result = array.reduce((count, item) => count+item);
// console.log(result);

const obj = {
    dzunushov: "sname",
    urmat: "name",
    42: "age"
};


const result = Object.entries(obj)
.filter(item => console.log(item[0]));
console.log(result)


}());
