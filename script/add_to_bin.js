

let add_to_bin = document.querySelectorAll(".addBin");

let myFunction=function(evt){
    evt.preventDefault();
    
    let product = this.parentNode.parentNode.querySelectorAll(".title_product");
    let price_product = this.parentNode.parentNode.querySelectorAll(".oprice");
    let img_product = this.parentNode.parentNode.querySelectorAll(".img_product img");

    let creat_li = document.createElement('li');


    // console.log(product[0].innerText);
    // console.log(price_product[0].innerText);
    // console.log(img_product[0].src);

   
        

    creat_li.innerHTML = '<div class="bin">\
                                <div class="bin_img_js">\
                                <img class="img_bin_js" src="'+img_product[0].src+'" alt="">\
                                </div>\
                                <div class="bin_texts">\
                                    <p class="bin_text_1">\
                                        <a href="#">'+product[0].innerText+'</a>\
                                    </p>\
                                    <div class="">\
                                        <span class="currency">$</span>\
                                        <span class="oprice">'+price_product[0].innerText+'</span>\
                                        <span class="bin_text_underline">$42.00</span>\
                                    </div>\
                                    <div class="bin_icon1">\
                                        <p ><i class="fab fa-bitbucket"></i></p>\
                                    </div>\
                                </div>\
                            </div>';
    let block_cart = document.querySelector('.block_Bin ul');
    block_cart.appendChild(creat_li);
    
    // удаление товара с корзины    //
    
    const btns = document.querySelectorAll('.bin_icon1')
    // console.log(btns)
    
    if(btns) {
        btns.forEach(function(el) {
            el.addEventListener('click', () => fun_delete(el))
        })
    }
    function fun_delete(evt) {
        // console.log(this)
        // alert("delete");
        total_price()

       evt.parentNode.parentNode.remove();
    };  
    total_price()
};
// evt.preventDefault(); не будет скорлит к началу страницы//

for (var i=0;i<add_to_bin.length;i++) { 
    add_to_bin[i].addEventListener('click', myFunction, false)
};

function total_price() {
    let count_price = document.querySelectorAll(".oprice");

    let total_price = 0;

    for (i=0; i<count_price.length; i++) {
        total_price = total_price + (+count_price[i].textContent);
     
    }
    
    document.getElementsByClassName("span_cart span2")[0].innerHTML = `$ ${total_price}`;
    document.querySelectorAll(".total_text .total_price")[0].innerHTML = `$ ${total_price}`;
}