import { Entity, Identifier } from '../../../src';
import { UUID } from '../../../src';

class MockEntity extends Entity<UUID> {
    private constructor(id: Identifier<UUID>) {
        super(id);
    }

    public static create(id: Identifier<UUID>): MockEntity {
        return new MockEntity(id);
    }
}

describe('Entity Base', () => {
    let id: Identifier<UUID>;

    beforeEach(() => {
        id = new Identifier(new UUID());
    });

    test('debería crear una entidad con ID', () => {
        const entity = MockEntity.create(id);
        expect(entity.id).toBeDefined();
        expect(entity.id).toEqual(id);
    });

    test('debería comparar entidades correctamente', () => {
        const entity1 = MockEntity.create(id);
        const entity2 = MockEntity.create(id);
        const entity3 = MockEntity.create(new Identifier(new UUID()));

        expect(entity1.equals(entity2)).toBeTruthy();
        expect(entity1.equals(entity3)).toBeFalsy();
    });
});