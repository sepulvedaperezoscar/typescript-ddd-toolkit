export class Result<T> {
    private readonly _isSuccess: boolean;
    private readonly _error: string | null;
    private readonly _value: T | null;

    private constructor(isSuccess: boolean, error?: string, value?: T) {
        this._isSuccess = isSuccess;
        this._error = error || null;
        this._value = value || null;
    }

    public static ok<U>(value?: U): Result<U> {
        return new Result<U>(true, undefined, value);
    }

    public static fail<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }

    public isSuccess(): boolean {
        return this._isSuccess;
    }

    public getValue(): T {
        if (!this._isSuccess) {
            throw new Error('Cannot get value of a failed result');
        }
        return this._value as T;
    }

    public getError(): string {
        return this._error as string;
    }
}