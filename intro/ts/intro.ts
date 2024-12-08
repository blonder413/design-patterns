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
