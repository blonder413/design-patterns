interface IObserver<T> {
    refresh(value: T): void;
}

interface ISubject<T> {
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
    observers: IObserver<T>[];
    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach((e) => {
            e.refresh(value);
        });
    }
}

class Observer<T> implements IObserver<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n) => {
    console.log(`Hola ${n}`);
});

const obs2 = new Observer<number>((n) => {
    console.log(`Buenas ${n}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(4);
subject.notify(13);

const subjectString = new Subject<string>();
const obs1String = new Observer<string>((s) => {
    console.log(s.toUpperCase());
});
subjectString.subscribe(obs1String)
subjectString.notify("blonder413")
