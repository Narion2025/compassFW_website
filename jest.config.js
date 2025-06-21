module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: [
    'src/js/**/*.js',
    '!src/js/**/*.min.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
}; 