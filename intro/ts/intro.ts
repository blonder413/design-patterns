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

class Beer extends Drink {
    private alcohol: number;

    constructor(name: string, alcohol: number) {
        super(name);
        this.alcohol = alcohol;
    }

    getName(): string {
        return super.getName() + " " + this.alcohol;
    }
}
const beer = new Beer("Cerveza", 4.13);
console.log(beer, beer.getName());
