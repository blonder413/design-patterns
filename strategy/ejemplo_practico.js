const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Es una cerveza alemana",
    },
    { name: "Corona", country: "México", info: "Es una cerveza mexicana" },
    { name: "Águila", country: "Colombia", info: "Es una cerveza colombiana" },
];

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element) {
        console.log(data);

        element.innerHTML = data.reduce((acum, item) => {
            console.log(item, acum);
            return (
                acum +
                `<div><h2>${item.name}</h2><p>${item.country}</p></div><hr>`
            );
        }, "");

        console.log(element);
    }
}

class DescribeStrategy {
    show(data, element) {
        console.log(data);

        element.innerHTML = data.reduce((acum, item) => {
            console.log(item, acum);
            return (
                acum +
                `<div>
                    <dl>
                    <dt>${item.name}</dt>
                    </dd>${item.country}</dd><dd>${item.info}</dd>
                    </dl>
                    <hr>
                </div>`
            );
        }, "");

        console.log(element);
    }
}

const strategy = new ListStrategy()
const info = new InfoContext(strategy, data, content); //content es el id del div en el html
info.show();

const strategies = [new ListStrategy(), new DescribeStrategy()];
options.addEventListener("change", (event) => {
    const opt = event.target.value;
    info.setStrategy(strategies[opt]);
    info.show()
});
