import { Guard } from '../../src';

describe('Guard', () => {
    describe('againstNull', () => {
        test('debería lanzar error para valores nulos', () => {
            expect(() => Guard.againstNull(null, 'test')).toThrow();
            expect(() => Guard.againstNull(undefined, 'test')).toThrow();
        });

        test('no debería lanzar error para valores válidos', () => {
            expect(() => Guard.againstNull('test', 'test')).not.toThrow();
            expect(() => Guard.againstNull(0, 'test')).not.toThrow();
        });
    });

    describe('againstEmptyString', () => {
        test('debería lanzar error para strings vacíos', () => {
            expect(() => Guard.againstEmptyString('', 'test')).toThrow();
            expect(() => Guard.againstEmptyString('  ', 'test')).toThrow();
        });

        test('no debería lanzar error para strings válidos', () => {
            expect(() => Guard.againstEmptyString('test', 'test')).not.toThrow();
        });
    });
});