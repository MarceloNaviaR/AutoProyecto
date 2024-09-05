// src/auto.js

export default class Auto {
  constructor(x = 0, y = 0, direccion = 'N', maxX = 5, maxY = 5) {
    this.posicion = { x, y };   // Posición inicial (x, y)
    this.direccion = direccion; // Dirección inicial ('N', 'S', 'E', 'W')
    this.limites = { maxX, maxY }; // Límites del grid
  }

  avanzar() {
    // Avanza en función de la dirección actual y verifica los límites del grid
    if (this.direccion === 'N' && this.posicion.y < this.limites.maxY) {
      this.posicion.y += 1;
    } else if (this.direccion === 'S' && this.posicion.y > 0) {
      this.posicion.y -= 1;
    } else if (this.direccion === 'E' && this.posicion.x < this.limites.maxX) {
      this.posicion.x += 1;
    } else if (this.direccion === 'W' && this.posicion.x > 0) {
      this.posicion.x -= 1;
    }
  }

  // Método para ejecutar una cadena de comandos de avanzar
  ejecutarComandos(cadena) {
    for (const comando of cadena) {
      if (comando === 'A') {
        this.avanzar();
      }
    }
  }
}
