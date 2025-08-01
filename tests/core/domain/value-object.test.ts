import { ValueObject } from '../../../src';

interface MockValueObjectProps {
    name: string;
    value: number;
}

class MockValueObject extends ValueObject<MockValueObjectProps> {
    protected validate(props: MockValueObjectProps): void {
        if (!props.name || props.value < 0) {
            throw new Error('Invalid props');
        }
    }
}

describe('Value Object Base', () => {
    test('debería crear value object con props válidas', () => {
        const props = { name: 'test', value: 1 };
        const vo = new MockValueObject(props);
        expect(vo).toBeDefined();
    });

    test('debería fallar con props inválidas', () => {
        const props = { name: '', value: -1 };
        expect(() => new MockValueObject(props)).toThrow('Invalid props');
    });

    test('debería comparar value objects correctamente', () => {
        const props1 = { name: 'test', value: 1 };
        const props2 = { name: 'test', value: 1 };
        const props3 = { name: 'other', value: 2 };

        const vo1 = new MockValueObject(props1);
        const vo2 = new MockValueObject(props2);
        const vo3 = new MockValueObject(props3);

        expect(vo1.equals(vo2)).toBeTruthy();
        expect(vo1.equals(vo3)).toBeFalsy();
    });
});