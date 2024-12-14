class Form {
    constructor(controls, action) {
        this.controls = controls;
        this.action = action;
    }

    getContent() {
        return `<form method="post" action="${this.action}">
        ${this.controls.reduce((ac, c) => {
            return (
                ac +
                `<div>
                ${this.getLabel(c)}
                ${this.getInput(c)}
            </div>`
            );
        }, "")}
        <button type="submit">Enviar</button>
        </form>`;
    }

    // no es parte del patrón builder
    getLabel(control) {
        return `<label>${control.text}</label>`;
    }

    // no es parte del patrón builder
    getInput(control) {
        return `<input type="${control.type}" id="${control.name}" name="${control.name}">`;
    }
}

class FormBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.action = "";
        this.controls = [];
    }
    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({ name: name, text: text, type: "text" });
        return this;
    }

    setCheckBox(name, text) {
        this.controls.push({ name: name, text: text, type: "checkbox" });
        return this;
    }

    setColor(name, text) {
        this.controls.push({ name: name, text: text, type: "color" });
        return this;
    }

    setEmail(name, text) {
        this.controls.push({ name: name, text: text, type: "email" });
        return this;
    }

    build() {
        const form = new Form(this.controls, this.action);
        this.reset();
        return form;
    }
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
    .setAction("add.php")
    .setCheckBox("programador", "Programador")
    .setColor("color", "Color")
    .setEmail("email", "Correo")
    .setText("firstName", "Nombre")
    .setText("lastName", "Apellido")
    .build();
console.log(formPeople);

form1.innerHTML = formPeople.getContent();

class FormDirector {
    constructor(formBuilder) {
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPeopleForm() {
        this.formBuilder.reset();
        this.formBuilder
            .setText("firstName", "Nombre")
            .setText("lastName", "Apellido");
    }

    creteContactForm() {
        this.formBuilder.reset();
        this.formBuilder.setText("nombre", "Nombre");
        this.formBuilder.setEmail("email", "Correo");
    }
}
// el objeto se pasa por referencia
const director = new FormDirector(formBuilder);
director.createPeopleForm();
form2.innerHTML = formBuilder.build().getContent();

director.creteContactForm()
form3.innerHTML=formBuilder.build().getContent()