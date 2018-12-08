module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    'app/(.*)$': '<rootDir>/src/app/$1',
    '\\.s?css$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setupTests.js'),
};
