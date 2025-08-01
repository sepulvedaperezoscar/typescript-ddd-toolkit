import { Result } from '../../src';

describe('Result', () => {
    test('debería crear resultado exitoso', () => {
        const result = Result.ok<string>('test');
        expect(result.isSuccess()).toBeTruthy();
        expect(result.getValue()).toBe('test');
    });

    test('debería crear resultado fallido', () => {
        const result = Result.fail<string>('error');
        expect(result.isSuccess()).toBeFalsy();
        expect(result.getError()).toBe('error');
    });

    test('debería lanzar error al obtener valor de resultado fallido', () => {
        const result = Result.fail<string>('error');
        expect(() => result.getValue()).toThrow();
    });
});