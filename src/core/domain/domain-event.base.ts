export abstract class DomainEvent {
    public readonly occurredOn: Date;
    public readonly eventId: string;

    constructor() {
        this.occurredOn = new Date();
        this.eventId = this.generateUUID();
    }

    private generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    abstract eventName(): string;
}