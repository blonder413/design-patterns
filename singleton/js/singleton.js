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

const singleton = new Singleton(); // no existe, se crea
const singleton2 = new Singleton(); // ya existe
console.log(singleton === singleton2); // true
const singleton3 = Singleton.getInstance();
console.log(singleton3 === singleton2); // true

class WeekDays {
    daysSp = [
        "domigo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
    ];
    daysEn = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
    ];

    constructor(lang) {
        this.lang = lang;
        // no debe llamarse instance
        if (WeekDays.instance) {
            return WeekDays.instance;
        }
        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === "es" ? this.daysSp : this.daysEn;
    }
}

const weekDays = new WeekDays("es");
const weekDays2 = new WeekDays("en");   // no crea nueva configuración, ignora el parámetro
console.log(weekDays.getDays(), weekDays2.getDays());
