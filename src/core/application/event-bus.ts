import { DomainEvent } from '../domain/domain-event.base';

export class EventBus {
    private handlers: Map<string, Function[]> = new Map();

    public subscribe(eventName: string, handler: Function): void {
        if (!this.handlers.has(eventName)) {
            this.handlers.set(eventName, []);
        }
        this.handlers.get(eventName)?.push(handler);
    }

    public async publish(event: DomainEvent): Promise<void> {
        const handlers = this.handlers.get(event.eventName()) || [];
        await Promise.all(handlers.map(handler => handler(event)));
    }
}