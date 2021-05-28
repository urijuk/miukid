let a=10;
let b=a;
b=b+15;

console.log (b)
//===============================//
const arr1 = {
    a:1,
    b:2,
};
const newarr = arr1;
newarr.a=10;
console.log (newarr);

//===============================//

function copy_arr (myObj) {
    const newObj = {};

    let key;
    for (key in myObj) {
        newObj[key] = myObj[key];
    }
    return newObj;
};

const oldObj = {
    name: "Urmat",
    surname: "Dzhunushov",
    hobby: {
        1: "swimming",
        2: "running",
    }
};

const newObj = copy_arr(oldObj);
newObj.name = "Alex";
newObj.hobby[1] = "reading";

console.log (oldObj);
console.log (newObj);

const newAssign = Object.assign (arr1,oldObj);
console.log (newAssign)

//==============================//

const arr = [ "яблоки", "груши", "виноград"]
const arr2 = arr.slice();

arr2[2] = "вишня";
console.log (arr2) 

//==============//

const tehnika = ["телефон","планшет","компьютер"],
      melodia = ["рок","хип-хоп","джаз"],
      combo = [...melodia, ...tehnika,"плавание","бег"];

      console.log (combo)

const old_per = ["телефон","планшет","компьютер"];
const new_per = [...old_per];     

new_per[1]="футболка";

console.log (old_per)
console.log (new_per)

//======================HOMEWORK 35===================//

const getPersonInfo = ['Bret', 'Pit', 'option1', 'option2', 'option3', 'option4'];
console.log (getPersonInfo)
