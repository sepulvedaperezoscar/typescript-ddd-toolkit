// Core exports
export * from './core/domain/aggregate-root.base';
export * from './core/domain/entity.base';
export * from './core/domain/value-object.base';
export * from './core/domain/domain-event.base';
export * from './core/domain/identifier.base';

// Application exports
export * from './core/application/command.base';
export * from './core/application/query.base';
export * from './core/application/command-handler.base';
export * from './core/application/query-handler.base';
export * from './core/application/event-bus';

// Infrastructure exports
export * from './core/infrastructure/repository.base';
export * from './core/infrastructure/unit-of-work';
export * from './core/infrastructure/event-publisher';

// Shared exports
export * from './shared/result';
export * from './shared/either';
export * from './shared/types';
export * from './shared/interfaces';

// Utils exports
export * from './utils/guard';
export * from './utils/error';
export * from './utils/logger';
export * from './utils/uuid';

// Events exports
export * from './events/event-dispatcher';
export * from './events/event-subscriber.base';
export * from './events/event-publisher.base';