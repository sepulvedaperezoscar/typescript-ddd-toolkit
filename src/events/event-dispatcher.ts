import { DomainEvent } from '../core/domain/domain-event.base';
import { Result } from '../shared/result';
import { EventSubscriber } from './event-subscriber.base';

export class EventDispatcher {
    private subscribers: Map<string, EventSubscriber[]> = new Map();

    public register(eventName: string, subscriber: EventSubscriber): void {
        if (!this.subscribers.has(eventName)) {
            this.subscribers.set(eventName, []);
        }
        this.subscribers.get(eventName)?.push(subscriber);
    }

    public async dispatch(event: DomainEvent): Promise<Result<void>> {
        const subscribers = this.subscribers.get(event.eventName()) || [];

        try {
            await Promise.all(
                subscribers.map(subscriber => subscriber.handle(event))
            );
            return Result.ok();
        } catch (error) {
            return Result.fail(`Error dispatching event: ${error}`);
        }
    }
}