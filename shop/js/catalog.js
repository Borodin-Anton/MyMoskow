class Product {
    constructor (name, price, pic) {
        this.name = name;
        this.price = price;
        this.pic = pic;
        this.el = document.querySelector('.goods');
    }
    renderProduct() {
        let newProductBlock = document.createElement('div');
        newProductBlock.classList.add('goods__item');
        newProductBlock.innerHTML = `
        <div class="goods__item-photo" style="background-image: url(../images/catalog/${this.pic})"></div>
        <div class="goods__item-name">${this.name}</div>
        <div class="goods__item-price">${this.price} руб.</div>
        `;
        this.el.appendChild(newProductBlock)
    }
}

class Catalog {
    constructor () {

    }
    renderCatalog() {



        let catalogItems = [
            {
                name: 'Куртка черная',
                price: 2700,
                pic: '1.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            },
            {
                name: 'Куртка серая',
                price: 2500,
                pic: '2.jpg'
            }
        ];

        catalogItems.forEach(function(value) {
            let newProduct = new Product (value.name, value.price, value.pic);
            newProduct.renderProduct();
        });
    }
}

let catalog = new Catalog();
catalog.renderCatalog()