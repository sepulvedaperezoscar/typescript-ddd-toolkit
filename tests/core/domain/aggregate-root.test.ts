import { AggregateRoot, Identifier } from '../../../src';
import { DomainEvent } from '../../../src';
import { UUID } from '../../../src';

class TestEvent extends DomainEvent {
    eventName(): string {
        return 'TestEvent';
    }
}

class TestAggregate extends AggregateRoot<UUID> {
    private constructor(id: Identifier<UUID>) {
        super(id);
    }

    static create(id: Identifier<UUID>): TestAggregate {
        return new TestAggregate(id);
    }

    public addTestEvent(): void {
        this.addDomainEvent(new TestEvent());
    }

    validate(): boolean {
        return true;
    }
}

describe('AggregateRoot', () => {
    let aggregate: TestAggregate;
    let id: Identifier<UUID>;

    beforeEach(() => {
        id = new Identifier(new UUID());
        aggregate = TestAggregate.create(id);
    });

    test('debería inicializar con versión 0', () => {
        expect(aggregate.version).toBe(0);
    });

    test('debería incrementar versión al añadir eventos', () => {
        aggregate.addTestEvent();
        expect(aggregate.version).toBe(1);
    });

    test('debería almacenar eventos de dominio', () => {
        aggregate.addTestEvent();
        expect(aggregate.events.length).toBe(1);
        expect(aggregate.events[0]).toBeInstanceOf(TestEvent);
    });

    test('debería limpiar eventos correctamente', () => {
        aggregate.addTestEvent();
        aggregate.clearEvents();
        expect(aggregate.events.length).toBe(0);
    });
});