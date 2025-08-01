import { Query } from '../../../src';
import { QueryHandler } from '../../../src';
import { Result } from '../../../src';

// Mock Query
class GetUserQuery extends Query {
    constructor(public readonly userId: string) {
        super();
    }

    queryName(): string {
        return 'GetUserQuery';
    }
}

// Mock Result
interface UserDTO {
    id: string;
    name: string;
}

// Mock Query Handler
class GetUserQueryHandler extends QueryHandler<GetUserQuery, UserDTO> {
    async execute(query: GetUserQuery): Promise<Result<UserDTO>> {
        if (!query.userId) {
            return Result.fail<UserDTO>('UserId es requerido');
        }

        // Simular búsqueda exitosa
        const user: UserDTO = {
            id: query.userId,
            name: 'Usuario Test'
        };

        return Result.ok<UserDTO>(user);
    }
}

describe('QueryHandler Base', () => {
    let handler: GetUserQueryHandler;

    beforeEach(() => {
        handler = new GetUserQueryHandler();
    });

    test('debería manejar una consulta válida', async () => {
        const query = new GetUserQuery('123');
        const result = await handler.execute(query);

        expect(result.isSuccess()).toBeTruthy();
        expect(result.getValue()).toEqual({
            id: '123',
            name: 'Usuario Test'
        });
    });

    test('debería fallar con un userId vacío', async () => {
        const query = new GetUserQuery('');
        const result = await handler.execute(query);

        expect(result.isSuccess()).toBeFalsy();
        expect(result.getError()).toBe('UserId es requerido');
    });

    test('debería mantener la consistencia de tipos', async () => {
        const query = new GetUserQuery('123');
        const result = await handler.execute(query);

        if (result.isSuccess()) {
            const user = result.getValue();
            expect(typeof user.id).toBe('string');
            expect(typeof user.name).toBe('string');
        }
    });
});