import {
    Primitive,
    DeepPartial,
    Optional,
    AggregateID,
    CommandProps,
    QueryProps
} from '../../src';

describe('Types', () => {
    // Test para Primitive
    test('Primitive type debería aceptar tipos primitivos', () => {
        const stringValue: Primitive = 'test';
        const numberValue: Primitive = 123;
        const booleanValue: Primitive = true;
        const undefinedValue: Primitive = undefined;
        const nullValue: Primitive = null;

        expect(typeof stringValue).toBe('string');
        expect(typeof numberValue).toBe('number');
        expect(typeof booleanValue).toBe('boolean');
        expect(undefinedValue).toBeUndefined();
        expect(nullValue).toBeNull();
    });

    // Test para DeepPartial
    test('DeepPartial debería hacer todas las propiedades opcionales', () => {
        interface TestType {
            name: string;
            age: number;
            address: {
                street: string;
                city: string;
            };
            hobbies: string[];
        }

        const partialObject: DeepPartial<TestType> = {
            name: 'test',
            address: {
                street: 'Main St'
                // city puede ser omitido
            }
            // age y hobbies pueden ser omitidos
        };

        expect(partialObject.name).toBeDefined();
        expect(partialObject.address?.street).toBeDefined();
        expect(partialObject.address?.city).toBeUndefined();
    });

    // Test para Optional
    test('Optional debería permitir undefined y null', () => {
        const definedValue: Optional<string> = 'test';
        const undefinedValue: Optional<string> = undefined;
        const nullValue: Optional<string> = null;

        expect(definedValue).toBe('test');
        expect(undefinedValue).toBeUndefined();
        expect(nullValue).toBeNull();
    });

    // Test para AggregateID
    test('AggregateID debería aceptar string y number', () => {
        const stringId: AggregateID = 'test-123';
        const numberId: AggregateID = 123;

        expect(typeof stringId === 'string' || typeof stringId === 'number').toBeTruthy();
        expect(typeof numberId === 'string' || typeof numberId === 'number').toBeTruthy();
    });

    // Test para CommandProps y QueryProps
    test('CommandProps y QueryProps deberían ser readonly', () => {
        interface TestCommand {
            action: string;
            payload: number;
        }

        const command: CommandProps<TestCommand> = {
            action: 'test',
            payload: 123
        };

        const query: QueryProps<TestCommand> = {
            action: 'test',
            payload: 123
        };

        // Esto debería dar error de compilación
        // command.action = 'new'; // Error: Cannot assign to 'action' because it is a read-only property
        // query.payload = 456; // Error: Cannot assign to 'payload' because it is a read-only property

        expect(command.action).toBe('test');
        expect(query.payload).toBe(123);
    });
});