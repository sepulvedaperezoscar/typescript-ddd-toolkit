import { Query } from '../../../src';

class TestQuery extends Query {
    constructor(public readonly data: string) {
        super();
        Object.freeze(this);
    }

    queryName(): string {
        return 'TestQuery';
    }
}

describe('Query', () => {
    test('debería crear query con nombre correcto', () => {
        const query = new TestQuery('test-data');
        expect(query.queryName()).toBe('TestQuery');
    });

    test('debería mantener los datos proporcionados', () => {
        const testData = 'test-data';
        const query = new TestQuery(testData);
        expect(query.data).toBe(testData);
    });

    test('debería ser inmutable', () => {
        const query = new TestQuery('test-data');
        expect(() => {
            (query as any).data = 'new-data';
        }).toThrow();
    });
});