

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
        count_product()

       evt.parentNode.parentNode.remove();
    };  
    total_price();
  
    count_product()
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

function count_product() {
    let count_product = document.getElementsByClassName("bin").length;
    document.getElementsByClassName("span_cart span1")[0].innerHTML = count_product;
} 

class cartProduct {
    constructor (tooltips, img,  title, orginPrice, oldPrice, innerBlock) {
        this.tooltips = tooltips;
        this.img = img;
        this.title = title;
        this.orginPrice = orginPrice;
        this.oldPrice = oldPrice;
        this.innerBlock = document.querySelector(innerBlock);
        this.valuta = 85;
        this.convertToUSD();
    }

    convertToUSD() {
        this.orginPrice = this.orginPrice / this.valuta
    }

    render() {
        const div = document.createElement("div");
        div.innerHTML = `
                        <div class="products_block tovar">
                            <a href="">
                                <div class="img_product">
                                    <div class="img_new bg_blue">${this.tooltips}</div>
                                    <img src=${this.img} alt="">
                                    <div class="desk_img">
                                        <div class="img_text">
                                            <div class="img_title">out of stock!</div>
                                            <span class="img_orange">see</span>
                                            <span class="img_cursiv">similar products</span>

                                        </div>
                                    </div>
                                    <div class="desk_img">
                                        <div class="img_text">
                                            <div class="img_title">out of stock!</div>
                                            <span class="img_orange">see</span>
                                            <span class="img_cursiv">similar products</span>

                                        </div>
                                    </div>
                                </div>
                                <div class="title_product"><a href="#">${this.title}</a></div>

                                <div class="star_block dflex">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>6 Review(s)</span>
                                </div>

                                <div class="price_product_block">
                                    <span class="currency">$</span>
                                    <span class="oprice">${this.orginPrice}</span>
                                    <del class="price_product_del">${this.oldPrice}</del>
                                </div>
                                <div class="icons__block dnone">
                                    <div class="icon_product addBin"> <i class="icpro fas fa-briefcase"></i></div>
                                    <div class="icon_product balans"><i class="icpro fa fa-balance-scale"></i></div>
                                    <div class="icon_product like"><i class="icpro fa fa-heart "></i></div>
                                </div>
                                <div class="quick_block dnone">
                                    <i class="fas fa-arrows-alt"></i>
                                    <span class="quick">Quick view</span>
                                </div>
                            </a>
                        </div>
        `;
        this.innerBlock.append(div);
    }
}


// const getProduct = async (url) => {

//     const result = await fetch(url);

//     if(!result.ok) {
//         throw new Error(`Ошибка fetch ${url} статус ${result.status}`)
//     };

//     return await result.json();
// };

// getProduct("http//localhost:3000/products")
// .then(data => {

//     // console.log(data);

//     data .forEach(element => {
//         console.log(element.title);

//         new cartProduct(
//             element.img,
//             element.altimg,
//             element.title,
//             element.top_ttl,
//             element.orgin_price,
//             element.old_price,
//             ".product_container",
//         ).render();


//     });

// });



// new cartProduct(
//     "new block",
//     "http://127.0.0.1:5501/img/insta5.jpg",
//     "New Title",
//     1545,
//     2545,
//     ".product_container",
// ).render();