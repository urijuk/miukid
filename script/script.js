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

new cartProduct(
    "new block",
    'http://127.0.0.1:5501/img/insta5.jpg',
    "New Title",
    1545,
    2545,
    ".product_container",
).render();