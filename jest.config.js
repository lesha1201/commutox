module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'app\\/(.*)$': '<rootDir>/src/app/$1',
    '\\.s?css$': '<rootDir>/test/identity-obj-proxy.js',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
};
