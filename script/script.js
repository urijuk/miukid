//+++++++++++++++++++++++ LESSON 42 +++++++++++++++++++++++++++//
let click  = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
let click3 = document.getElementById("btn3");

let delet_btn = (e) => {
    e.target.remove();
}

click.addEventListener('click', delet_btn );
click2.addEventListener('click', delet_btn );
click3.addEventListener('click', delet_btn );  

//+++++++++++++++++++++++ LESSON 43 +++++++++++++++++++++++++++//



let btn_green = document.getElementById("bg_green");
let btn_red = document.getElementById("bg_red");
let btn_yellow = document.getElementById("bg_yellow");

//=============green============//
let green_btn = (e) => {
    document.body.style.background = "green";
    };

btn_green.addEventListener('click', green_btn );

//=============red============//
let red_btn = (e) => {
    document.body.style.background = "red";
    };

btn_red.addEventListener('click', red_btn ); 

//=============yellow============//
let yellow_btn = (e) => {
    document.body.style.background = "yellow";
    };

btn_yellow.addEventListener('click', yellow_btn );  