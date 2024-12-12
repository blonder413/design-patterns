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

class ItemSubject extends Subject {
    constructor() {
        super();
        this.data = [];
    }

    add(item) {
        this.data.push(item);
        this.notify(this.data);
    }
}

class HtmlELementObserver {
    constructor(elemnt) {
        this.element = elemnt;
    }

    refresh(data) {
        this.element.innerHTML = data.reduce((acum, elem) => {
            return acum + `<p>${elem}</p>`;
        }, "");
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

const item = new ItemSubject();
const div1Observer = new HtmlELementObserver(div1); // hace rerencia al elemnto con id div1 del html
const div2Observer = new HtmlELementObserver(div2); // hace rerencia al elemnto con id div1 del html
const div3Observer = new Observer((data) => {
    div3.innerHTML = data.length + " elementos agregados";
});

item.subscribe(div1Observer);
item.subscribe(div2Observer);
item.subscribe(div3Observer);

function add() {
    const name = nombre.value;
    item.add(name);
}
