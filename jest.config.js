module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: '.',
    testMatch: [
        '<rootDir>/tests/**/*.spec.ts',
        '<rootDir>/tests/**/*.test.ts'
    ],
    moduleNameMapper: {
        '^@core/(.*)$': '<rootDir>/src/core/$1',
        '^@shared/(.*)$': '<rootDir>/src/shared/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@events/(.*)$': '<rootDir>/src/events/$1'
    },
    modulePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/'
    ],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'json', 'html'],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        '/coverage/',
        '/.git/'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    verbose: true
};