class ProductComponent {
    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return this.name;
    }
}

// decorador
class ProductDecorator {
    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class CommercialInfoProductDecorator extends ProductDecorator {
    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }
    getDetail() {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

// componente
const productComponent = new ProductComponent("helado");
console.log(productComponent.getDetail());

// decorador con 1 componente
const commercialInfoProduct = new CommercialInfoProductDecorator(
    productComponent,
    "Helados calientes",
    "Hotlados"
);
console.log(commercialInfoProduct.getDetail());

class StoreProductDecorator extends ProductDecorator {
    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return super.getDetail() + ` $${this.price}`;
    }
}

// decorador 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 413);
console.log(storeProduct.getDetail());

class HtmlProductDecorador extends ProductDecorator {
    getDetail() {
        return `<h1>Producto</h1><p>${super.getDetail()}</p>`;
    }
}

// decorador 2 con decorador 1
const product = new StoreProductDecorator(commercialInfoProduct, 4.13);
console.log(product.getDetail());

// decorador 3 con decorador 2 con decorador 1
const htmlProductDecorador = new HtmlProductDecorador(product);
console.log(htmlProductDecorador.getDetail());

