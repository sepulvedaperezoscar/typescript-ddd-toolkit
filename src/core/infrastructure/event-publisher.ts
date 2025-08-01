import { DomainEvent } from '../domain/domain-event.base';
import { Result } from '../../shared/result';

export interface IEventPublisher {
    publish(event: DomainEvent): Promise<Result<void>>;
}

export abstract class EventPublisher implements IEventPublisher {
    abstract publish(event: DomainEvent): Promise<Result<void>>;
}