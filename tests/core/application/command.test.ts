import { Command } from '../../../src';

class TestCommand extends Command {
    constructor(public readonly action: string) {
        super();
        Object.freeze(this);
    }

    commandName(): string {
        return 'TestCommand';
    }
}

describe('Command', () => {
    test('debería crear command con nombre correcto', () => {
        const command = new TestCommand('create');
        expect(command.commandName()).toBe('TestCommand');
    });

    test('debería mantener los datos del comando', () => {
        const action = 'create';
        const command = new TestCommand(action);
        expect(command.action).toBe(action);
    });

    test('debería ser inmutable', () => {
        const command = new TestCommand('create');
        const originalAction = command.action;

        // Intentar modificar una propiedad readonly debería lanzar error
        expect(() => {
            Object.defineProperty(command, 'action', {
                value: 'update'
            });
        }).toThrow();

        // Verificar que el valor no cambió
        expect(command.action).toBe(originalAction);
    });

    test('debería permitir comparación de comandos', () => {
        const command1 = new TestCommand('create');
        const command2 = new TestCommand('create');
        const command3 = new TestCommand('update');

        expect(command1.commandName()).toBe(command2.commandName());
        expect(command1.action).toBe(command2.action);
        expect(command1.action).not.toBe(command3.action);
    });
});