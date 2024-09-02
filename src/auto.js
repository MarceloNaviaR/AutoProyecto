// src/auto.js

export default class Auto {
  constructor() {
    this.posicion = 0;          // Inicializa la posición en 0
    this.direccion = 'norte';   // Inicializa la dirección en 'norte'
  }

  avanzar() {
    // Avanza en función de la dirección actual
    if (this.direccion === 'norte') {
      this.posicion += 1;   // Aumenta la posición si la dirección es 'norte'
    } else if (this.direccion === 'sur') {
      this.posicion -= 1;   // Disminuye la posición si la dirección es 'sur'
    }
  }

  retroceder() {
    // Retrocede en función de la dirección actual
    if (this.direccion === 'norte') {
      this.posicion -= 1;   // Disminuye la posición si la dirección es 'norte'
    } else if (this.direccion === 'sur') {
      this.posicion += 1;   // Aumenta la posición si la dirección es 'sur'
    }
  }

  girar(direccion) {
    this.direccion = direccion; // Cambia la dirección a la nueva dirección
  }
}

