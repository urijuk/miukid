//=================LESSON 56===========================//

//http://learn.javascript.ru/data-storage

    // localStorage.setItem('user_name', 'Urmat');
    // let res = localStorage.getItem('user_name');
    // console.log(res);

    const btnClick =  document.querySelector(".form [name='save']");
    const btnReset =  document.querySelector(".form [name='reset']");

    const chek_name = localStorage.getItem('name');
    const chek_sname = localStorage.getItem('sname');
    const chek_number = localStorage.getItem('number');
    const chek_address = localStorage.getItem('address');



    if (chek_name || chek_sname || chek_number || chek_address) {
        document.getElementsByClassName('name')[0].value=chek_name;
        document.querySelector("[name='sname']").value=chek_sname;
        document.querySelector("[name='number']").value=chek_number;
        document.querySelector("[name='address']").value=chek_address;
    };

    btnClick.addEventListener('click', function(e) {
        e.preventDefault();

        const name = document.getElementsByClassName('name')[0].value;
        const sname = document.querySelector("[name='sname']").value;
        const number = document.querySelector("[name='number']").value;
        const address = document.querySelector("[name='address']").value;

        if(name && sname && number && address) {
            localStorage.setItem('name', name);
            localStorage.setItem('sname', sname);
            localStorage.setItem('number', number);
            localStorage.setItem('address', address);
            alert("Данные сохранены");
        }
        else {
            alert("Поля не должны быть пустыми");
        }
        
    });

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.clear();
        alert("Данные сброшены");
    });



