// src/auto.test.js

import Auto from './auto';

describe('Auto', () => {
    let auto;

    beforeEach(() => {
        auto = new Auto(1, 2, 'N'); // Inicia con posición (1, 2) mirando al norte
    });

    test('debe inicializar con posición (1, 2) y dirección norte', () => {
        expect(auto.posicion).toEqual({ x: 1, y: 2 });
        expect(auto.direccion).toBe('N');
    });

    test('debe avanzar correctamente hacia el norte', () => {
        auto.avanzar();
        expect(auto.posicion).toEqual({ x: 1, y: 3 });
    });

    test('debe avanzar correctamente hacia el sur', () => {
        auto.girar('S');
        auto.avanzar();
        expect(auto.posicion).toEqual({ x: 1, y: 1 });
    });

    test('debe avanzar correctamente hacia el este', () => {
        auto.girar('E');
        auto.avanzar();
        expect(auto.posicion).toEqual({ x: 2, y: 2 });
    });

    test('debe avanzar correctamente hacia el oeste', () => {
        auto.girar('W');
        auto.avanzar();
        expect(auto.posicion).toEqual({ x: 0, y: 2 });
    });

    test('debe girar correctamente', () => {
        auto.girar('S');
        expect(auto.direccion).toBe('S');
    });
});
