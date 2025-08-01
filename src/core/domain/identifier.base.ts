export class Identifier<T> {
    constructor(private value: T) { }

    equals(id?: Identifier<T>): boolean {
        if (id === null || id === undefined) {
            return false;
        }
        return this.value === id.value;
    }

    toString(): string {
        return String(this.value);
    }

    getValue(): T {
        return this.value;
    }
}