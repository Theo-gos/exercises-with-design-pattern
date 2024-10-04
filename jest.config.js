module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        'Solid/**/*.ts',
        '!Solid/**/*.d.ts',
        '!Solid/**/*/main.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
