/**
 * Solo debe existir un objeto de la clase
 */

class Singleton {
    constructor() {
        // variable de objeto
        this.random = Math.random();

        if (Singleton.instance) {
            console.log("ya existe");

            return Singleton.instance;
        }
        console.log("no existe, se crea");

        Singleton.instance = this;
    }

    static getInstance() {
        return Singleton.instance;
    }
}

const singleton = new Singleton();      // no existe, se crea
const singleton2 = new Singleton();     // ya existe
console.log(singleton === singleton2);  // true
const singleton3 = Singleton.getInstance();
console.log(singleton3 === singleton2); // true
