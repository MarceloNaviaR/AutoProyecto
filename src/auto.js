// src/auto.js

export default class Auto {
  constructor(x = 0, y = 0, direccion = 'N') {
    this.posicion = { x, y };   // Posición inicial (x, y)
    this.direccion = direccion; // Dirección inicial ('N', 'S', 'E', 'W')
  }

  avanzar() {
    // Avanza en función de la dirección actual
    if (this.direccion === 'N') {
      this.posicion.y += 1; // Avanza hacia el norte
    } else if (this.direccion === 'S') {
      this.posicion.y -= 1; // Avanza hacia el sur
    } else if (this.direccion === 'E') {
      this.posicion.x += 1; // Avanza hacia el este
    } else if (this.direccion === 'W') {
      this.posicion.x -= 1; // Avanza hacia el oeste
    }
  }

  girar(direccion) {
    this.direccion = direccion; // Cambia la dirección a la nueva dirección
  }
}
