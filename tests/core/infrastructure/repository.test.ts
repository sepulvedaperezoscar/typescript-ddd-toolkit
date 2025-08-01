import { Repository } from '../../../src';
import { AggregateRoot } from '../../../src';
import { Result } from '../../../src';
import { UUID } from '../../../src';

class MockAggregate extends AggregateRoot<UUID> {
    validate(): boolean {
        return true;
    }
}

class MockRepository extends Repository<MockAggregate> {
    private items: Map<string, MockAggregate> = new Map();

    async save(aggregate: MockAggregate): Promise<Result<void>> {
        this.items.set(aggregate.id.toString(), aggregate);
        return Result.ok();
    }

    async findById(id: UUID): Promise<Result<MockAggregate>> {
        const item = this.items.get(id.toString());
        if (!item) {
            return Result.fail('Not found');
        }
        return Result.ok(item);
    }

    protected toDomain(raw: any): Result<MockAggregate> {
        throw new Error('Method not implemented.');
    }

    protected toPersistence(entity: MockAggregate): any {
        throw new Error('Method not implemented.');
    }
}

describe('Repository Base', () => {
    let repository: MockRepository;
    let aggregate: MockAggregate;

    beforeEach(() => {
        repository = new MockRepository();
        aggregate = new MockAggregate(new UUID());
    });

    test('debería guardar agregado', async () => {
        const result = await repository.save(aggregate);
        expect(result.isSuccess()).toBeTruthy();
    });

    test('debería encontrar agregado por id', async () => {
        await repository.save(aggregate);
        const result = await repository.findById(aggregate.id);
        expect(result.isSuccess()).toBeTruthy();
        expect(result.getValue().id).toEqual(aggregate.id);
    });
});