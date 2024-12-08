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

/**
 * Inmutable: La colección original no cambia al ejecutarse el método
 * Mutalbe: Cambia el valor inicial
 */
// Foreach es inmutable
const names = ["Jill", "Claire", "Barry"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
names.sort();
console.log(names);

/**
 * map regresa un nuevo array con los valores modificados
 * no cambia el array inicial
 */

const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

/**
 * reduce hace un recorrido acumula por todos los elementos y retorna un solo resultado
 */
const numbers = [4, 13, 8, 10];
const total = numbers.reduce((acum, number) => {
    return acum + number;
}, 0);
const total2 = numbers.reduce((acum, number) => acum + number, 0);
console.log(total, total2);
