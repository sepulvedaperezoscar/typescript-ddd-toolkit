import { AggregateRoot } from '../domain/aggregate-root.base';
import { Result } from '../../shared/result';

export interface IRepository<T extends AggregateRoot<any>> {
    save(aggregate: T): Promise<Result<void>>;
    findById(id: any): Promise<Result<T>>;
    delete(id: any): Promise<Result<void>>;
    exists(id: any): Promise<Result<boolean>>;
}

export abstract class Repository<T extends AggregateRoot<any>> implements IRepository<T> {
    abstract save(aggregate: T): Promise<Result<void>>;
    abstract findById(id: any): Promise<Result<T>>;
    abstract delete(id: any): Promise<Result<void>>;
    abstract exists(id: any): Promise<Result<boolean>>;

    protected abstract toDomain(raw: any): Result<T>;
    protected abstract toPersistence(entity: T): any;
}