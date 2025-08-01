module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/**/*.spec.ts',
        '**/__tests__/**/*.test.ts'
    ],
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1'
    }
};