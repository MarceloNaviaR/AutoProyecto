// presenter.js
import Auto from './auto.js';

// Crear una instancia del auto con posición inicial (1, 2) y dirección 'N'
const auto = new Auto(1, 2, 'N');

// Referencias a los elementos del DOM
const posicionElem = document.getElementById('posicion');
const direccionElem = document.getElementById('direccion');
const avanzarBtn = document.getElementById('avanzarBtn');
const grid = document.getElementById('grid');

// Crear el grid de 5x5
const gridSize = 5;
let carElement;

// Generar celdas del grid y agregar el auto
function createGrid() {
    grid.innerHTML = ''; // Limpia el grid
    for (let y = gridSize - 1; y >= 0; y--) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            grid.appendChild(cell);
        }
    }
    placeCar(auto.posicion.x, auto.posicion.y);
}

// Colocar el auto en la posición indicada
function placeCar(x, y) {
    carElement?.remove(); // Eliminar la posición anterior del auto
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
        carElement = document.createElement('div');
        carElement.classList.add('car');
        cell.appendChild(carElement);
    }
}

// Actualiza el estado del auto en el DOM
function actualizarEstado() {
    posicionElem.textContent = `${auto.posicion.x}, ${auto.posicion.y}`;
    direccionElem.textContent = auto.direccion;
}

// Función para mover el auto al presionar el botón "Avanzar"
function avanzar() {
    auto.avanzar();
    placeCar(auto.posicion.x, auto.posicion.y);
    actualizarEstado();
}

// Listener para el botón de avanzar
avanzarBtn.addEventListener('click', avanzar);

// Inicializa el grid y el estado del auto
createGrid();
actualizarEstado();

