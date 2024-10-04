module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverage: true,
    collectCoverageFrom: [
        'Solid/2.Ocp/**/*.ts',
        '!Solid/2.Ocp/**/*.d.ts',
        '!Solid/2.Ocp/main.ts',
        '!Solid/employees/interfaces/**/*.ts',
        '!Solid/shapes/interfaces/**/*.ts',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
