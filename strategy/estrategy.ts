interface Strategy {
    login(user: string, password: string): boolean;
}

class Login {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDbStrategy implements Strategy {
    login(user: string, password: string): boolean {
        if (user == "admin" && password == "password") {
            console.log("sesión en bd iniciada correctamente");
            return true;
        }
        console.log("credenciales no válidas en bd");
        return false;
    }
}

class LoginServiceStrategy implements Strategy {
    login(user: string, password: string): boolean {
        if (user == "admin" && password == "password") {
            console.log("sesión iniciada correctamente desde el servicio");
            return true;
        }
        console.log("credenciales no válidas en el servicio");
        return false;
    }
}

const auth = new Login(new LoginDbStrategy());
auth.login("admin", "password");
auth.setStrategy(new LoginServiceStrategy());
auth.login("admin", "admin");
