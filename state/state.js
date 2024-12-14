class DocumentContext {
    constructor() {
        this.content = "";
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}

class BlankState {
    write(documentContext, text) {
        documentContext.content = text;
        documentContext.setState(new WithContentState());
    }
}

class WithContentState {
    write(documentContext, text) {
        documentContext.content += " " + text;
    }
}

class FinishState {
    write(documentContext, text) {
        console.error("documento guardado");
    }
}

const doc = new DocumentContext();
console.log(doc.state);
doc.write("hola");
doc.write("blonder");
console.log(doc.content, doc.state);

doc.setState(new FinishState());
doc.write("texto nuevo")
console.log(doc.content, doc.state);

doc.setState(new WithContentState())
doc.write('reabro el archivo')
console.log(doc.content, doc.state);