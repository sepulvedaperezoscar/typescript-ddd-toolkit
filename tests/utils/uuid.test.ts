import { UUID } from '../../src';

describe('UUID', () => {
    test('debería generar UUID válido sin parámetros', () => {
        const uuid = new UUID();
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        expect(uuid.toValue()).toMatch(uuidRegex);
    });

    test('debería aceptar UUID existente', () => {
        const uuidString = '123e4567-e89b-12d3-a456-426614174000';
        const uuid = new UUID(uuidString);

        expect(uuid.toString()).toBe(uuidString);
        expect(uuid.toValue()).toBe(uuidString);
    });

    test('debería comparar UUIDs correctamente', () => {
        const uuid1 = new UUID('123e4567-e89b-12d3-a456-426614174000');
        const uuid2 = new UUID('123e4567-e89b-12d3-a456-426614174000');
        const uuid3 = new UUID();

        expect(uuid1.equals(uuid2)).toBeTruthy();
        expect(uuid1.equals(uuid3)).toBeFalsy();
        expect(uuid1.equals(undefined)).toBeFalsy();
    });

    test('método generate debería crear UUID válido', () => {
        const uuid = UUID.generate();
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        expect(uuid).toMatch(uuidRegex);
    });

    test('debería mantener consistencia entre toString y toValue', () => {
        const uuid = new UUID();

        expect(uuid.toString()).toBe(uuid.toValue());
    });

    test('debería generar UUIDs únicos', () => {
        const uuids = new Set();
        for (let i = 0; i < 1000; i++) {
            uuids.add(new UUID().toString());
        }

        expect(uuids.size).toBe(1000);
    });
});