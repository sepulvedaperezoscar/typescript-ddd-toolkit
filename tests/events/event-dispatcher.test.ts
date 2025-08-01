import { EventDispatcher } from '../../src';
import { DomainEvent } from '../../src';
import { EventSubscriber } from '../../src';
import { Result } from '../../src';

class MockEvent extends DomainEvent {
    eventName(): string {
        return 'MockEvent';
    }
}

class MockSubscriber extends EventSubscriber {
    public timesCalled = 0;

    async handle(event: DomainEvent): Promise<Result<void>> {
        this.timesCalled++;
        return Result.ok();
    }
}

describe('EventDispatcher', () => {
    let dispatcher: EventDispatcher;
    let subscriber: MockSubscriber;

    beforeEach(() => {
        dispatcher = new EventDispatcher();
        subscriber = new MockSubscriber();
    });

    test('debería registrar y despachar eventos correctamente', async () => {
        const event = new MockEvent();
        dispatcher.register(event.eventName(), subscriber);

        const result = await dispatcher.dispatch(event);

        expect(result.isSuccess()).toBeTruthy();
        expect(subscriber.timesCalled).toBe(1);
    });
});