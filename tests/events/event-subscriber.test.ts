import { EventSubscriber } from '../../src';
import { DomainEvent } from '../../src';
import { Result } from '../../src';

class TestEvent extends DomainEvent {
    constructor(public readonly data: string) {
        super();
    }

    eventName(): string {
        return 'TestEvent';
    }
}

class TestEventSubscriber extends EventSubscriber {
    public handledEvents: DomainEvent[] = [];

    async handle(event: DomainEvent): Promise<Result<void>> {
        if (!(event instanceof TestEvent)) {
            return Result.fail('Evento no soportado');
        }

        this.handledEvents.push(event);
        return Result.ok();
    }
}

describe('EventSubscriber', () => {
    let subscriber: TestEventSubscriber;

    beforeEach(() => {
        subscriber = new TestEventSubscriber();
    });

    test('debería manejar evento válido', async () => {
        const event = new TestEvent('test-data');
        const result = await subscriber.handle(event);

        expect(result.isSuccess()).toBeTruthy();
        expect(subscriber.handledEvents).toContain(event);
    });

    test('debería mantener el orden de los eventos manejados', async () => {
        const event1 = new TestEvent('first');
        const event2 = new TestEvent('second');

        await subscriber.handle(event1);
        await subscriber.handle(event2);

        expect(subscriber.handledEvents[0]).toBe(event1);
        expect(subscriber.handledEvents[1]).toBe(event2);
    });

    test('debería acceder a los datos del evento', async () => {
        const event = new TestEvent('test-data');
        await subscriber.handle(event);

        const handledEvent = subscriber.handledEvents[0] as TestEvent;
        expect(handledEvent.data).toBe('test-data');
    });
});