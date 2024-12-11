<?php
interface Strategy
{
    public function login(string $user, string $password);
}

class Auth
{
    private Strategy $strategy;

    public function __construct(Strategy $strategy)
    {
        $this->setStrategy($strategy);
    }

    public function setStrategy(Strategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function login(string $user, string $password)
    {
        return $this->strategy->login($user, $password);
    }
}

class LoginDbStrategy implements Strategy
{
    public function login(string $user, string $password)
    {
        if ($user == 'admin' && $password == 'admin') {
            echo "Bienvenido usuario super seguro de la bd";
            return true;
        }
        echo "no tiene acceso a la bd";
        return false;
    }
}

class LoginServiceStrategy implements Strategy
{
    public function login(string $user, string $password)
    {
        if ($user == 'admin' && $password == 'admin') {
            echo "Bienvenido usuario super seguro del servicio";
            return true;
        }
        echo "no tiene acceso al servicio";
        return false;
    }
}

$estrategia = new LoginDbStrategy();
$auth = new Auth($estrategia);
$auth->login("admin", "admin");

print "\n";

$estrategia = new LoginServiceStrategy();
$auth->setStrategy($estrategia);
$auth->login("admin", "admin");
