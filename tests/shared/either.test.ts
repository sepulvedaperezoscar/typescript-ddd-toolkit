import { Left, Right } from '../../src';

describe('Either', () => {
    describe('Left', () => {
        test('debería crear Left correctamente', () => {
            const left = new Left<string, number>('error');
            expect(left.value).toBe('error');
            expect(left.isLeft()).toBeTruthy();
            expect(left.isRight()).toBeFalsy();
        });
    });

    describe('Right', () => {
        test('debería crear Right correctamente', () => {
            const right = new Right<string, number>(42);
            expect(right.value).toBe(42);
            expect(right.isRight()).toBeTruthy();
            expect(right.isLeft()).toBeFalsy();
        });
    });
});