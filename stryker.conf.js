module.exports = function(config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress'],
    testRunner: 'jest',
    transpilers: ['typescript'],
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.test.json',
    mutate: ['lib/**/*.ts', '!lib/**/*.spec.ts'],
    jest: {
      config: require('./jest.config')
    }
  })
}
