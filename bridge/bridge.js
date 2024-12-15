class EncoderTextAbstraction {
    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64EncoderImplementor {
    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode("jill"));
console.log(encoder1.decode(encoder1.encode("jill")));

class HtmlEncoderImplementor {
    encode(str) {
        return str.split(".").reduce((ac, e) => {
            return ac + `<p>${e.trim()}</p>`;
        }, "");
    }

    decode(str) {
        return str.split("</p>").reduce((ac, e) => {
            return e != ""
                ? ac + e.replace("<p>", "") + ". "
                : ac + e.replace("<p>", "");
        }, "");
    }
}

const encoder2 = new EncoderTextAbstraction(new HtmlEncoderImplementor());
console.log(encoder2.encode("hola. blonder413"));
console.log(encoder2.decode(encoder2.encode("hola. blonder413")));
