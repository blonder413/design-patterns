console.log("Hola desde ts");

class Drink {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

const coffe = new Drink("café colombiano");
console.log(coffe.getName());

interface Product {
    price: number;
    getPrice(): string;
}

class Beer extends Drink implements Product {
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    getName(): string {
        return super.getName() + " " + this.alcohol;
    }

    getPrice(): string {
        return "$" + this.price;
    }
}
const beer = new Beer("Cerveza", 4.13, 3000);
console.log(beer, beer.getName(), beer.getPrice());

const products: Product[] = [beer];

function getPrices(items: Product[]) {
    items.forEach((item) => console.log(item.getPrice()));
}

getPrices(products);
