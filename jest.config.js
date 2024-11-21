module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        'Solid/3.Lsp/**/*.ts',
        '!Solid/3.Lsp/**/*.d.ts',
        '!Solid/3.Lsp/main.ts',
        '!Solid/3.Lsp/interfaces/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
