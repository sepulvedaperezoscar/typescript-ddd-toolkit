import { Result } from '../../shared/result';

export interface IUnitOfWork {
    begin(): Promise<void>;
    commit(): Promise<Result<void>>;
    rollback(): Promise<void>;
}

export abstract class UnitOfWork implements IUnitOfWork {
    abstract begin(): Promise<void>;
    abstract commit(): Promise<Result<void>>;
    abstract rollback(): Promise<void>;
}