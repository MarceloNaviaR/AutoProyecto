import Auto from './auto.js';

// Referencias a los elementos del DOM
const posicionElem = document.getElementById('posicion');
const direccionElem = document.getElementById('direccion');
const comandosInput = document.getElementById('comandos');
const ejecutarBtn = document.getElementById('ejecutarBtn');
const grid = document.getElementById('grid');

let auto;
let gridSize = 5; // Inicialmente el tamaño del grid es 5x5
let carElement;

// Crear el grid de NxN
function createGrid(size) {
    grid.innerHTML = ''; // Limpia el grid antes de generarlo
    grid.style.gridTemplateColumns = `repeat(${size}, 50px)`; // Ajustar columnas dinámicamente
    grid.style.gridTemplateRows = `repeat(${size}, 50px)`;   // Ajustar filas dinámicamente
    
    for (let y = size - 1; y >= 0; y--) {
        for (let x = 0; x < size; x++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            grid.appendChild(cell);
        }
    }
}

// Colocar el auto en la posición indicada
function placeCar(x, y) {
    if (carElement) {
        carElement.remove(); // Eliminar la posición anterior del auto
    }
    
    // Encontrar la celda donde colocar el auto
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
        carElement = document.createElement('div');
        carElement.classList.add('car');
        cell.appendChild(carElement); // Colocar el auto en la celda correcta
    }
}

// Procesar y ejecutar los comandos
function ejecutarComandos() {
    const comandos = comandosInput.value.trim(); // Obtener el valor del input y eliminar espacios en blanco

    // Validar el formato de los comandos
    const regex = /^(\d+),(\d+)\/(\d+),(\d+)([NSEW])\/([IAD]+)$/;
    const match = comandos.match(regex);

    if (!match) {
        alert('Formato de comandos incorrecto. Use el formato 5,5/1,2N/IAIAIAIAA.');
        return;
    }

    // Parsear los datos del comando
    const [_, maxX, maxY, x, y, direccion, secuenciaComandos] = match;
    
    // Actualizar el tamaño del grid y crear el grid
    gridSize = Math.max(parseInt(maxX), parseInt(maxY));
    createGrid(gridSize);

    // Crear el auto con la posición y dirección inicial
    auto = new Auto(parseInt(x), parseInt(y), direccion, parseInt(maxX), parseInt(maxY));
    placeCar(auto.posicion.x, auto.posicion.y);

    // Ejecutar la secuencia de comandos
    for (let comando of secuenciaComandos) {
        if (comando === 'I') {
            auto.girarIzquierda();
        } else if (comando === 'D') {
            auto.girarDerecha();
        } else if (comando === 'A') {
            auto.avanzar();
        }
        placeCar(auto.posicion.x, auto.posicion.y); // Actualizar la posición del auto en el grid
    }

    // Actualizar la posición y dirección final en el DOM
    posicionElem.textContent = `${auto.posicion.x}, ${auto.posicion.y}`;
    direccionElem.textContent = auto.direccion;
}

// Listener para el botón de ejecutar
ejecutarBtn.addEventListener('click', ejecutarComandos);

// Inicializa el grid
createGrid(gridSize);
