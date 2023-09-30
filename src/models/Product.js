

class Product {



    constructor(id, model, price, picture, countCart = 0) {
        this.id = id;
        this.model = model;
        this.price = price;
        this.picture = picture;
        this.countCart = countCart;
    }


    addToCart(countCart) {
        this.countCart = countCart
    }

}

export default Product;