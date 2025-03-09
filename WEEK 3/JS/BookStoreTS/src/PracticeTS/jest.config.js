module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'], // Match test files like *.test.ts, *.spec.ts
  testPathIgnorePatterns: ['/node_modules/'],  // Ignore node_modules folder
};
