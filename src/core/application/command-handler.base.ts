import { Command } from './command.base';
import { Result } from '../../shared/result';

export abstract class CommandHandler<T extends Command> {
    abstract execute(command: T): Promise<Result<void>>;
}