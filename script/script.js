let click  = document.getElementById("btn1");
let click2 = document.getElementById("btn2");
let click3 = document.getElementById("btn3");

// click.onclick = function() {
//     alert("click")
// }

let delet_btn = (e) => {
    e.target.remove();
}

click.addEventListener('click', delet_btn );
click2.addEventListener('click', delet_btn );
click3.addEventListener('click', delet_btn );  