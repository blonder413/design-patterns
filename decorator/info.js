class ClientComponent {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        const response = await fetch(this.url);
        return await response.json();
    }
}

// decorador
class ClientDecorator {
    constructor(clienComponent) {
        this.clienComponent = clienComponent;
    }
    async getData() {
        const data = await this.clienComponent.getData();
        return data;
    }
}

// decorador1
class UpperCaseClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map((e) => {
            e.title = e.title.toUpperCase();
            return e;
        });
        return newData;
    }
}

class HtmlClientDecorator extends ClientDecorator {
    async getData() {
        const data = await super.getData();
        const newData = data.map((e) => {
            e.title = `<h1>${e.title}</h1>`;
            e.thumbnailUrl = `<img src="${e.thumbnailUrl}">`;
            return e;
        });
        return newData;
    }
}

(async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const client = new ClientComponent(url);
    const data = await client.getData();
    console.log(data);

    const upperClient = new UpperCaseClientDecorator(client);
    const data2 = await upperClient.getData();
    console.log(data2);

    const htmlClient = new HtmlClientDecorator(upperClient);
    const data3 = await htmlClient.getData();
    console.log(data3);
    content1.innerHTML = data3.reduce((acum, e) => {
        return acum + e.title + e.thumbnailUrl;
    }, "");

    const htmlClient2 = new HtmlClientDecorator(client);
    const data4 = await htmlClient2.getData();
    content2.innerHTML = data4.reduce((ac, e) => {
        return ac + e.title + e.thumbnailUrl;
    },"");
})();
