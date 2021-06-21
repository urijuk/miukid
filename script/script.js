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

const inputSom = document.querySelector("#som");
const inputUsd = document.querySelector("#usd");

inputSom.addEventListener( 'input', ()=> {
    const request = new XMLHttpRequest();
    request.open("GET", "current.json");
    request.setRequestHeader("content", "application/json; sharset=UTF-8");
    request.send();

    request.addEventListener('readystatechange', () => {
        if(request.readyState ===4 && request.status ===200) {
            const currency = JSON.parse(request.response);
            const result =  inputSom.value/currency.current.usd;
            inputUsd.value = (result).toFixed(2);
        }
    })
} );



}());
