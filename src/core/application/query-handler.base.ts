import { Query } from './query.base';
import { Result } from '../../shared/result';

export abstract class QueryHandler<T extends Query, R> {
    abstract execute(query: T): Promise<Result<R>>;
}