interface Component {
    getDetail(): string;
}

class ProductComponent implements Component {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    getDetail(): string {
        return this.name;
    }
}

// decorador
abstract class ProductDecorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public getDetail(): string {
        return this.component.getDetail();
    }
}

// decorador 1
class ComercialInfoProductDecorator extends ProductDecorator {
    private tradename: string;
    private brand: string;

    constructor(component: Component, tradename: string, brand: string) {
        super(component);
        this.tradename = tradename;
        this.brand = brand;
    }

    public getDetail(): string {
        return `${this.tradename} ${this.brand} ` + super.getDetail();
    }
}

const productComponent = new ProductComponent("Helado");
console.log(productComponent.getDetail());

// decorador 1 con componente
const commercialInfoProduct = new ComercialInfoProductDecorator(
    productComponent,
    "HotCream",
    "heladoz"
);
console.log(commercialInfoProduct.getDetail());

// decorador 2
class StoreProductDecorator extends ProductDecorator {
    private price: number;

    constructor(component: Component, price: number) {
        super(component);
        this.price = price;
    }

    public getDetail(): string {
        return super.getDetail() + " " + this.price;
    }
}

// decorador 2 con componente
const storeProduct = new StoreProductDecorator(productComponent, 4.13);
console.log(storeProduct.getDetail());

// decorador 2 con decorador 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 810);
console.log(storeProduct2.getDetail());

// decorador 3
class HTMLProductDecorator extends ProductDecorator {
    public getDetail(): string {
        return `<h1>Información</h1><p>${super.getDetail()}</p>`;
    }
}

// decorador 3 con decorador 2 con decorador 1
const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());
