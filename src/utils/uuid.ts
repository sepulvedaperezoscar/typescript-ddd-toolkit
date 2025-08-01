export class UUID {
    private readonly value: string;

    constructor(value?: string) {
        this.value = value || UUID.generate();
    }

    public static generate(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public equals(id?: UUID): boolean {
        if (id === null || id === undefined) {
            return false;
        }
        return this.value === id.value;
    }

    toString(): string {
        return this.value;
    }

    toValue(): string {
        return this.value;
    }
}