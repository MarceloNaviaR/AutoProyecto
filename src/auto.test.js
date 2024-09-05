// src/auto.test.js

import Auto from './auto';

describe('Auto', () => {
    let auto;

    beforeEach(() => {
        auto = new Auto(1, 2, 'N', 5, 5); // Inicia con posición (1, 2) mirando al norte
    });

    test('debe inicializar con posición (1, 2) y dirección norte', () => {
        expect(auto.posicion).toEqual({ x: 1, y: 2 });
        expect(auto.direccion).toBe('N');
    });

    test('debe avanzar correctamente hacia el norte', () => {
        auto.avanzar();
        expect(auto.posicion).toEqual({ x: 1, y: 3 });
    });

    test('debe ejecutar una secuencia de comandos de avanzar correctamente', () => {
        auto.ejecutarComandos('AAA');
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // No debe exceder el límite Y
    });

    test('no debe avanzar más allá del límite del grid', () => {
        auto.ejecutarComandos('AAAAAA');
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // Detiene el avance en el límite
    });
});



