import Auto from './auto.js';

// Referencias a los elementos del DOM
const comandosInput = document.getElementById('comandos');
const ejecutarBtn = document.getElementById('ejecutarBtn');
const posicionFinalElem = document.getElementById('posicionFinal');
const grid = document.getElementById('grid');

let auto;
let gridSize = 5;
let carElement;

// Crear el grid de 5x5
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

function ejecutarComandos(comandos) {
    const [dimensiones, posicionInicial, secuenciaComandos] = comandos.split('/');
    
    const [maxX, maxY] = dimensiones.split(',').map(Number);
    gridSize = Math.max(maxX, maxY); // Actualizar el tamaño del grid
    createGrid();
    
    const [x, y, direccion] = [parseInt(posicionInicial[0]), parseInt(posicionInicial[2]), posicionInicial[3]];

    // Crear el auto en la posición inicial
    auto = new Auto(x, y, direccion);
    placeCar(auto.posicion.x, auto.posicion.y);

    for (let comando of secuenciaComandos) {
        if (comando === 'I') {
            auto.girarIzquierda();
        } else if (comando === 'D') {
            auto.girarDerecha();
        } else if (comando === 'A') {
            auto.avanzar();
        }
        placeCar(auto.posicion.x, auto.posicion.y);
    }

    // Actualizar la posición final en el DOM
    posicionFinalElem.textContent = `${auto.posicion.x},${auto.posicion.y} ${auto.direccion}`;
}

ejecutarBtn.addEventListener('click', () => {
    const comandos = comandosInput.value;
    ejecutarComandos(comandos);
});
