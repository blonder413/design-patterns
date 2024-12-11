class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer) {
        this.observers = this.observers.filter((obs) => obs != observer);
    }

    notify(data) {
        this.observers.forEach((e) => {
            e.refresh(data);
        });
    }
}

class Observer {
    constructor(fn) {
        this.fn = fn;
    }
    refresh(data) {
        this.fn(data);
    }
}

const subject = new Subject();
const observer1 = new Observer((d) => console.log(`Observador 1 ${d}`));
const observer2 = new Observer((d) => (div1.innerHTML = d)); // div1 es el id del html

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.unsuscribe(observer1);

function change() {
    subject.notify(texto.value); // texto es el id del input en el html
}
