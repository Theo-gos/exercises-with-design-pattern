module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        'Solid/5.Dip/**/*.ts',
        '!Solid/5.Dip/**/*.d.ts',
        '!Solid/5.Dip/main.ts',
        '!Solid/5.Dip/interfaces/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
