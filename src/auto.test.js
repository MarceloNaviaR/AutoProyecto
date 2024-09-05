import Auto from './auto';

describe('Auto', () => {
    let auto;
    let gridSize;

    beforeEach(() => {
        gridSize = 5; // Definir tamaño del grid como 5x5
        auto = new Auto(1, 2, 'N', gridSize, gridSize); // Inicializar el auto con la posición y dirección dada
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
        expect(auto.posicion).toEqual({ x: 4, y: 2 }); 
        expect(auto.direccion).toBe('E');
    });

    test('Debe procesar comandos completos correctamente', () => {
        auto = new Auto(1, 2, 'N', 5, 5);

        auto.ejecutarComandos('DDAAAIAAA');
        expect(auto.posicion).toEqual({ x: 4, y: 0 }); 
        expect(auto.direccion).toBe('E');
    });

    test('debe manejar comandos que superen el límite del grid', () => {
        auto.ejecutarComandos('AAAAAAA'); 
        expect(auto.posicion).toEqual({ x: 1, y: 5 }); 
    });
});
