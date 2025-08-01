import { DomainEvent } from '../core/domain/domain-event.base';
import { Result } from '../shared/result';

export abstract class EventSubscriber {
    abstract handle(event: DomainEvent): Promise<Result<void>>;
}