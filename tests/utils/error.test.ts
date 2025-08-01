// Update the import path if the file is located elsewhere, or create the file if it doesn't exist.
import { DomainError, ApplicationError, InfrastructureError } from '../../src';

describe('Errors', () => {
    test('DomainError debería mantener el nombre y mensaje correctos', () => {
        const error = new DomainError('test error');
        expect(error.name).toBe('DomainError');
        expect(error.message).toBe('test error');
    });

    test('ApplicationError debería mantener el nombre y mensaje correctos', () => {
        const error = new ApplicationError('test error');
        expect(error.name).toBe('ApplicationError');
        expect(error.message).toBe('test error');
    });

    test('InfrastructureError debería mantener el nombre y mensaje correctos', () => {
        const error = new InfrastructureError('test error');
        expect(error.name).toBe('InfrastructureError');
        expect(error.message).toBe('test error');
    });
});