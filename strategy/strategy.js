/**
 * Patrón de comportamiento
 * definimos nuestra clase principal que va a permitir definir la estrategia a utilizar
 */
class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }
}

/**
 * Clase estrategia, funciona como si fuera un condicional
 */
class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + amount * this.tax;
    }
}

/**
 * Clase estrategia, funciona como si fuera un condicional
 * No necesitamos modificar la clase inicial para crear nuevas estrategias,
 * basta con crear una clase nueva
 */
class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + amount * this.tax - this.discount;
    }
}

const regularSale = new RegularSaleStrategy(0.19);
const discountSale = new DiscountSaleStrategy(0.19, 4);

// Definimos un objeto que tiene definido un impuesto
const sale = new SaleContext(regularSale);

console.log(sale.calculate(13));

// Cambiamos el objeto aplicándole un descuento
sale.setStrategy(discountSale);
console.log(sale.calculate(13));
