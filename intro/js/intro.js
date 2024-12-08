function sumar(a, b) {
    return a + b;
}

let suma = sumar(4, 13);
console.log(suma);

/**
 * Función de primer orden
 * Toda función que pueda ser tratada como una variable
 */

const fnsuma = sumar;
suma = fnsuma(8, 10);
console.log(suma);

/**
 * Función de orden superior
 * Toda función que puede recibir funciones como argumentos
 */
function operation(fn, a, b) {
    console.log("se hace algo");
    console.log(fn(a, b));
}

operation(sumar, 4, 13); // 17

/** Arrow function */
// Cuando solo hay una línea las llaves sobran
let fa = () => console.log("Algo");
fa(); // algo

operation((num1, num2) => num1 * num2, 8, 10); // 80
operation(
    (a, b) => {
        const c = a + b;
        return c * 2;
    },
    4,
    13
); // (4+13) * 2 = 34
