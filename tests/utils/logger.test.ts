import { Logger } from '../../src';

describe('Logger', () => {
    let logger: Logger;
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        logger = new Logger();
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('debería llamar a console.debug', () => {
        const spy = jest.spyOn(console, 'debug').mockImplementation();
        logger.debug('test');
        expect(spy).toHaveBeenCalledWith('test');
        spy.mockRestore();
    });

    test('debería llamar a console.error', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation();
        logger.error('test');
        expect(spy).toHaveBeenCalledWith('test');
        spy.mockRestore();
    });
});