export default class Auto {
  constructor(x = 0, y = 0, direccion = 'N', maxX = 5, maxY = 5) {
    this.posicion = { x, y };   // Posición inicial (x, y)
    this.direccion = direccion; // Dirección inicial ('N', 'S', 'E', 'W')
    this.limites = { maxX, maxY }; // Límites del grid
    this.direcciones = ['N', 'E', 'S', 'W']; // Direcciones posibles en el sentido horario
  }

  avanzar() {
    // Avanza en función de la dirección actual y verifica los límites del grid
    if (this.direccion === 'N' && this.posicion.y < this.limites.maxY - 1) {
      this.posicion.y += 1;
    } else if (this.direccion === 'S' && this.posicion.y > 0) {
      this.posicion.y -= 1;
    } else if (this.direccion === 'E' && this.posicion.x < this.limites.maxX - 1) {
      this.posicion.x += 1;
    } else if (this.direccion === 'W' && this.posicion.x > 0) {
      this.posicion.x -= 1;
    }
  }

  girarIzquierda() {
    let idx = this.direcciones.indexOf(this.direccion);
    // Restar uno para girar a la izquierda, si es < 0 vuelve a la última dirección
    this.direccion = this.direcciones[(idx - 1 + this.direcciones.length) % this.direcciones.length];
  }

  girarDerecha() {
    let idx = this.direcciones.indexOf(this.direccion);
    // Sumar uno para girar a la derecha
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
