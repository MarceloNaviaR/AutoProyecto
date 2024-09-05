// src/auto.js

export default class Auto {
  constructor(x = 0, y = 0, direccion = 'N', maxX = 5, maxY = 5) {
    this.posicion = { x, y };   // Posición inicial (x, y)
    this.direccion = direccion; // Dirección inicial ('N', 'S', 'E', 'O')
    this.limites = { maxX, maxY }; // Límites del grid
    this.direcciones = ['N', 'E', 'S', 'O']; // Orden de las direcciones para giros
  }

  avanzar() {
    if (this.direccion === 'N' && this.posicion.y < this.limites.maxY) {
      this.posicion.y += 1;
    } else if (this.direccion === 'S' && this.posicion.y > 0) {
      this.posicion.y -= 1;
    } else if (this.direccion === 'E' && this.posicion.x < this.limites.maxX) {
      this.posicion.x += 1;
    } else if (this.direccion === 'O' && this.posicion.x > 0) {
      this.posicion.x -= 1;
    }
  }

  girarIzquierda() {
    let idx = this.direcciones.indexOf(this.direccion);
    this.direccion = this.direcciones[(idx - 1 + this.direcciones.length) % this.direcciones.length];
  }

  girarDerecha() {
    let idx = this.direcciones.indexOf(this.direccion);
    this.direccion = this.direcciones[(idx + 1) % this.direcciones.length];
  }

  // Método para ejecutar una cadena de comandos de avanzar
  ejecutarComandos(cadena) {
    for (const comando of cadena) {
      if (comando === 'A') {
        this.avanzar();
      } else if (comando === 'I') {
        this.girarIzquierda();
      } else if (comando === 'D') {
        this.girarDerecha();
      }
    }
  }
}
