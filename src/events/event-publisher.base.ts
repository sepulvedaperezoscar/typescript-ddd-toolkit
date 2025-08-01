import { DomainEvent } from '../core/domain/domain-event.base';
import { Result } from '../shared/result';

export abstract class EventPublisherBase {
    abstract publish(event: DomainEvent): Promise<Result<void>>;
    abstract publishAll(events: DomainEvent[]): Promise<Result<void>>;
}