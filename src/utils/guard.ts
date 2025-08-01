export class Guard {
    public static againstNull(value: unknown, propertyName: string): void {
        if (value === null || value === undefined) {
            throw new Error(`${propertyName} is required`);
        }
    }

    public static againstEmptyString(value: string, propertyName: string): void {
        if (!value || value.trim().length === 0) {
            throw new Error(`${propertyName} cannot be empty`);
        }
    }

    public static againstInvalidLength(
        value: string | Array<any>,
        min: number,
        max: number,
        propertyName: string
    ): void {
        if (value.length < min || value.length > max) {
            throw new Error(
                `${propertyName} must be between ${min} and ${max} characters`
            );
        }
    }
}