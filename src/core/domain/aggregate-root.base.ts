import { Entity } from './entity.base';
import { DomainEvent } from './domain-event.base';

export abstract class AggregateRoot<T> extends Entity<T> {
    private _version: number = 0;
    private _events: DomainEvent[] = [];

    get version(): number {
        return this._version;
    }

    get events(): readonly DomainEvent[] {
        return this._events;
    }

    protected addDomainEvent(event: DomainEvent): void {
        this._events.push(event);
        this._version++;
    }

    public clearEvents(): void {
        this._events = [];
    }

    abstract validate(): boolean;
}