import { DomainEvent } from '../../../src';

class TestDomainEvent extends DomainEvent {
    eventName(): string {
        return 'TestDomainEvent';
    }
}

describe('DomainEvent', () => {
    test('debería generar eventId único', () => {
        const event1 = new TestDomainEvent();
        const event2 = new TestDomainEvent();

        expect(event1.eventId).toBeDefined();
        expect(event2.eventId).toBeDefined();
        expect(event1.eventId).not.toBe(event2.eventId);
    });

    test('debería establecer occurredOn al momento de creación', () => {
        const before = new Date();
        const event = new TestDomainEvent();
        const after = new Date();

        expect(event.occurredOn.getTime()).toBeGreaterThanOrEqual(before.getTime());
        expect(event.occurredOn.getTime()).toBeLessThanOrEqual(after.getTime());
    });

    test('debería mantener nombre de evento constante', () => {
        const event = new TestDomainEvent();
        expect(event.eventName()).toBe('TestDomainEvent');
    });

    test('debería generar UUID válido', () => {
        const event = new TestDomainEvent();
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        expect(event.eventId).toMatch(uuidRegex);
    });
});