import Auto from './auto.js';

// Referencias a los elementos del DOM
const posicionElem = document.getElementById('posicion');
const direccionElem = document.getElementById('direccion');
const comandosInput = document.getElementById('comandos');
const ejecutarBtn = document.getElementById('ejecutarBtn');
const grid = document.getElementById('grid');
const posicionInicialElem = document.getElementById('posicionInicial');
const comandosTextoElem = document.getElementById('comandosTexto');

let auto;
let gridSize = 5; 
let carElement;

function createGrid(size) {
    grid.innerHTML = ''; 
    grid.style.gridTemplateColumns = `repeat(${size}, 50px)`; 
    grid.style.gridTemplateRows = `repeat(${size}, 50px)`;   
    
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

function placeCar(x, y) {
    if (carElement) {
        carElement.remove(); 
    }
    
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    if (cell) {
        carElement = document.createElement('div');
        carElement.classList.add('car');
        cell.appendChild(carElement); 
    }
}

function ejecutarComandos() {
    const comandos = comandosInput.value.trim(); 

    const regex = /^(\d+),(\d+)\/(\d+),(\d+)([NSEO])\/([IAD]+)$/;
    const match = comandos.match(regex);

    if (!match) {
        alert('Formato de comandos incorrecto. Use el formato 5,5/1,2N/IAIAIAIAA.');
        return;
    }

    const [_, maxX, maxY, x, y, direccion, secuenciaComandos] = match;
    
    gridSize = Math.max(parseInt(maxX), parseInt(maxY));
    createGrid(gridSize);

    auto = new Auto(parseInt(x), parseInt(y), direccion, parseInt(maxX), parseInt(maxY));
    placeCar(auto.posicion.x, auto.posicion.y);

    posicionInicialElem.textContent = `${auto.posicion.x}, ${auto.posicion.y}${auto.direccion}`;
    comandosTextoElem.textContent = secuenciaComandos;

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

    posicionElem.textContent = `${auto.posicion.x}, ${auto.posicion.y}`;
    direccionElem.textContent = auto.direccion;
}

ejecutarBtn.addEventListener('click', ejecutarComandos);

createGrid(gridSize);
