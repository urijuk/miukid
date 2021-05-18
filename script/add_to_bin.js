

//=======================LESSON 34========================//

// let arr=[1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.pop()); //последний извлекает//
// console.log(arr.shift()); //первый извлекает//
// console.log(arr);

// arr.push(10); //добавляет в конец//
// console.log(arr);

// arr.unshift(15) //добавляет в начало//
// console.log(arr);

// delete arr[0];
// delete arr[1];
// console.log(arr)

// arr[50] = 20;
// console.log(arr)

// let arr=[1, 2, 3, 4, 5];
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value)
// }  

// arr.forEach(function(item, index, arr){
//     console.log("идекс: " +index+ " значение: " +item+ " из массива: " +arr)
// });

// let object = {0:1, 1:2, 2:3, lenth:3};
// console.log(object);



// let array=[];
// for (let i=0; i<object.lenth; i++) {
//     array.push(object[i])
// }
// console.log(array)

// ================HOMEWORK 34==========================//

let object = {0: 'first', 1: 'second', 2: 'third', length: 3} ;
console.log(object);



let array=[];
for (let i=0; i<object.length; i++) {
    array.push(object[i]);
}
console.log(array)

let massiv = ["first", "second", "third" ];

let vyvod1=[massiv[0]];
let vyvod2=[massiv[1]];
let vyvod3=[massiv[2]];

let vyvod=[];
vyvod.push(vyvod1)
vyvod.push(vyvod2)
vyvod.push(vyvod3)

console.log(vyvod)
