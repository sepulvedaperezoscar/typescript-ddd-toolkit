import { Command } from '../../../src';
import { CommandHandler } from '../../../src';
import { Result } from '../../../src';

class MockCommand extends Command {
    constructor(public readonly data: string) {
        super();
    }

    commandName(): string {
        return 'MockCommand';
    }
}

class MockCommandHandler extends CommandHandler<MockCommand> {
    async execute(command: MockCommand): Promise<Result<void>> {
        if (!command.data) {
            return Result.fail('Data required');
        }
        return Result.ok();
    }
}

describe('Command Handler Base', () => {
    let handler: MockCommandHandler;

    beforeEach(() => {
        handler = new MockCommandHandler();
    });

    test('debería ejecutar comando exitosamente', async () => {
        const command = new MockCommand('test');
        const result = await handler.execute(command);
        expect(result.isSuccess()).toBeTruthy();
    });

    test('debería fallar con datos inválidos', async () => {
        const command = new MockCommand('');
        const result = await handler.execute(command);
        expect(result.isSuccess()).toBeFalsy();
        expect(result.getError()).toBe('Data required');
    });
});