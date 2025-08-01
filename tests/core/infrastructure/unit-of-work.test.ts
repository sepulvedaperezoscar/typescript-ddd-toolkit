import { UnitOfWork } from '../../../src';
import { Result } from '../../../src';

class TestUnitOfWork extends UnitOfWork {
    private isTransactionActive: boolean = false;
    public commitCalled: boolean = false;
    public rollbackCalled: boolean = false;

    async begin(): Promise<void> {
        this.isTransactionActive = true;
    }

    async commit(): Promise<Result<void>> {
        if (!this.isTransactionActive) {
            return Result.fail('No hay transacción activa');
        }
        this.commitCalled = true;
        this.isTransactionActive = false;
        return Result.ok();
    }

    async rollback(): Promise<void> {
        if (this.isTransactionActive) {
            this.rollbackCalled = true;
            this.isTransactionActive = false;
        }
    }
}

describe('UnitOfWork', () => {
    let uow: TestUnitOfWork;

    beforeEach(() => {
        uow = new TestUnitOfWork();
    });

    test('debería iniciar transacción correctamente', async () => {
        await uow.begin();
        const result = await uow.commit();

        expect(result.isSuccess()).toBeTruthy();
        expect(uow.commitCalled).toBeTruthy();
    });

    test('debería fallar al intentar commit sin transacción activa', async () => {
        const result = await uow.commit();

        expect(result.isSuccess()).toBeFalsy();
        expect(result.getError()).toBe('No hay transacción activa');
    });

    test('debería ejecutar rollback correctamente', async () => {
        await uow.begin();
        await uow.rollback();

        expect(uow.rollbackCalled).toBeTruthy();

        const commitResult = await uow.commit();
        expect(commitResult.isSuccess()).toBeFalsy();
    });

    test('debería mantener consistencia en operaciones secuenciales', async () => {
        await uow.begin();
        await uow.commit();

        const secondCommit = await uow.commit();
        expect(secondCommit.isSuccess()).toBeFalsy();
    });
});