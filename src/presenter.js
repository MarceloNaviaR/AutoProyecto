// src/presenter.js

import Auto from './auto';

const auto = new Auto();

// Funciones para interactuar con el auto
export function avanzarAuto() {
    auto.avanzar();
    console.log(`Posición actual: ${auto.posicion}, Dirección: ${auto.direccion}`);
}

export function retrocederAuto() {
    auto.retroceder();
    console.log(`Posición actual: ${auto.posicion}, Dirección: ${auto.direccion}`);
}

export function girarAuto(direccion) {
    auto.girar(direccion);
    console.log(`Posición actual: ${auto.posicion}, Dirección: ${auto.direccion}`);
}
