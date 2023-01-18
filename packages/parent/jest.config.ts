import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/'],
  globals: {
    'ts-jest': {
      packageJson: '<rootDir>/package.json',
      diagnostics: false,
      isolatedModules: true,
    },
  },
};

export default config;
