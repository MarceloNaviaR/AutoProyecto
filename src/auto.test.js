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
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // Límite del grid
    });

    test('no debe avanzar más allá del límite del grid', () => {
        auto.ejecutarComandos('AAAAAA');
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // Límite del grid
    });

    test('debe girar a la izquierda y avanzar', () => {
        auto.ejecutarComandos('IAAA'); // Girar izquierda (N -> W), avanzar 3 veces
        expect(auto.posicion).toEqual({ x: 0, y: 2 }); // Después de girar y avanzar
        expect(auto.direccion).toBe('W'); // Dirección final
    });

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
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // Límite del grid
    });

    test('no debe avanzar más allá del límite del grid', () => {
        auto.ejecutarComandos('AAAAAA');
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); // Límite del grid
    });

    test('debe girar a la izquierda y avanzar', () => {
        auto.ejecutarComandos('IAAA'); 
        expect(auto.posicion).toEqual({ x: 0, y: 2 }); 
        expect(auto.direccion).toBe('W'); 
    });

    test('debe girar a la derecha y avanzar', () => {
        auto.ejecutarComandos('DAAA');
        expect(auto.posicion).toEqual({ x: 4, y: 4 }); 
        expect(auto.direccion).toBe('N'); 
    });
});


});
