const moduleNameMapper = require('./aliases.config').jest

module.exports = {
  moduleNameMapper,
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  setupFiles: ['<rootDir>/tests/unit/setup'],
  globalSetup: '<rootDir>/tests/unit/global-setup',
  globalTeardown: '<rootDir>/tests/unit/global-teardown',
  setupFilesAfterEnv: ['<rootDir>/tests/unit/matchers'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js,vue}',
    '!**/node_modules/**',
    '!src/main.ts',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
}
