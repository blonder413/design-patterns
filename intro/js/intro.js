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

operation(sumar, 4, 13);
