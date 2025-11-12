/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: { '^.+\\.[jt]sx?$': 'babel-jest' },   // transpile JS/TS/JSX
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',               // mock CSS
    '\\.(gif|ttf|eot|svg|png|jpe?g|jfif|webp)$': '<rootDir>/src/__mocks__/fileMock.js', // mock assets incl jfif
  },
};
