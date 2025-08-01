export abstract class ValueObject<T> {
    protected readonly props: T;

    constructor(props: T) {
        this.validate(props);
        this.props = Object.freeze(props);
    }

    protected abstract validate(props: T): void;

    public equals(vo?: ValueObject<T>): boolean {
        if (vo === null || vo === undefined) {
            return false;
        }
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}