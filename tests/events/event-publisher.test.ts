import { EventPublisher } from '../../src';
import { DomainEvent } from '../../src';
import { Result } from '../../src';

class TestEvent extends DomainEvent {
    eventName(): string {
        return 'TestEvent';
    }
}

class TestEventPublisher extends EventPublisher {
    public published: DomainEvent[] = [];

    async publish(event: DomainEvent): Promise<Result<void>> {
        this.published.push(event);
        return Result.ok();
    }
}

describe('EventPublisher', () => {
    let publisher: TestEventPublisher;

    beforeEach(() => {
        publisher = new TestEventPublisher();
    });

    test('debería publicar evento correctamente', async () => {
        const event = new TestEvent();
        const result = await publisher.publish(event);

        expect(result.isSuccess()).toBeTruthy();
        expect(publisher.published).toContain(event);
    });

    test('debería mantener orden de eventos publicados', async () => {
        const event1 = new TestEvent();
        const event2 = new TestEvent();

        await publisher.publish(event1);
        await publisher.publish(event2);

        expect(publisher.published[0]).toBe(event1);
        expect(publisher.published[1]).toBe(event2);
    });
});