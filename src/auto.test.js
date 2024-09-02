// src/auto.test.js

import Auto from './auto';

describe('Auto', () => {
    let auto;

    beforeEach(() => {
        auto = new Auto();
    });

    test('debe inicializar con posición 0 y dirección norte', () => {
        expect(auto.posicion).toBe(0);
        expect(auto.direccion).toBe('norte');
    });

    test('debe avanzar correctamente', () => {
        auto.avanzar();
        expect(auto.posicion).toBe(1);
    });

    test('debe retroceder correctamente', () => {
        auto.girar('sur');
        auto.retroceder();
        expect(auto.posicion).toBe(1); // Actualiza la posición esperada si la dirección es 'sur'
    });

    test('debe girar correctamente', () => {
        auto.girar('sur');
        expect(auto.direccion).toBe('sur');
    });
});
