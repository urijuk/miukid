

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
                                <div class="bin_img_js">\
                                <img class="img_bin_js" src="'+img_product[0].src+'" alt="">\
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
                                        <a href="#"><i class="fab fa-bitbucket"></i></a>\
                                    </div>\
                                </div>\
                            </div>';
    let block_cart = document.querySelector('.block_Bin ul');
    block_cart.appendChild(creat_li);
    
    // удаление товара с корзины    //
    let click_trash = document.querySelectorAll("bin_icon");

    for (var i=0; i<click_trash.length; i++) { 
        class_trash[i].addEventListener('click', fun_delete, false);
    }
    
    function fun_delete(evt) {
        evt.preventDefault();
        alert("delete");

       this.parentNode.parentNode.parentNode.remove();
    };  

};
// evt.preventDefault(); не будет скорлит к началу страницы//

for (var i=0;i<add_to_bin.length;i++) { 
    add_to_bin[i].addEventListener('click', myFunction, false)}





