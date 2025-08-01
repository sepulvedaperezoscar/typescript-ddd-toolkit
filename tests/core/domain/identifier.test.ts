import { Identifier } from '../../../src';

describe('Identifier', () => {
    test('debería crear identifier con valor string', () => {
        const id = new Identifier<string>('test-id');
        expect(id.getValue()).toBe('test-id');
    });

    test('debería crear identifier con valor number', () => {
        const id = new Identifier<number>(123);
        expect(id.getValue()).toBe(123);
    });

    test('debería comparar identifiers correctamente', () => {
        const id1 = new Identifier<string>('test');
        const id2 = new Identifier<string>('test');
        const id3 = new Identifier<string>('different');

        expect(id1.equals(id2)).toBeTruthy();
        expect(id1.equals(id3)).toBeFalsy();
    });

    test('debería manejar comparación con null/undefined', () => {
        const id = new Identifier<string>('test');

        expect(id.equals(null as any)).toBeFalsy();
        expect(id.equals(undefined as any)).toBeFalsy();
    });

    test('debería convertir a string correctamente', () => {
        const stringId = new Identifier<string>('test');
        const numberId = new Identifier<number>(123);

        expect(stringId.toString()).toBe('test');
        expect(numberId.toString()).toBe('123');
    });
});