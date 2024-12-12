<?php
interface ObservadorInterfaz
{
    public function actualizar($mensaje);
}

class Observador implements ObservadorInterfaz
{
    public function actualizar($mensaje)
    {
        echo "Observador: $mensaje\n";
    }
}


interface SujetoInterfaz
{
    public function registrarObservador(ObservadorInterfaz $observador);
    public function eliminarObservador(ObservadorInterfaz $observador);
    public function notificarObservadores($mensaje);
}

class Sujeto implements SujetoInterfaz
{
    private $observadores = [];

    public function registrarObservador(ObservadorInterfaz $observador)
    {
        $this->observadores[] = $observador;
    }

    public function eliminarObservador(ObservadorInterfaz $observador)
    {
        $indice = array_search($observador, $this->observadores);
        if ($indice !== false) {
            unset($this->observadores[$indice]);
        }
    }

    public function notificarObservadores($mensaje)
    {
        foreach ($this->observadores as $observador) {
            $observador->actualizar($mensaje);
        }
    }
}

$sujeto = new Sujeto();
$observador1 = new Observador();
$observador2 = new Observador();

$sujeto->registrarObservador($observador1);
$sujeto->registrarObservador($observador2);

$sujeto->notificarObservadores("¡Estado actualizado!");
