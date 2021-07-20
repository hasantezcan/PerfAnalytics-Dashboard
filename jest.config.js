module.exports = {
  transform: { '^.+.tsx?$': 'ts-jest' },
  testRegex: '(/tests/.*|(.|/)(test|spec)).([tj]sx?)$',
  moduleNameMapper: { '.+.(css|styl|less|sass|scss)$': 'identity-obj-proxy' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    'node_modules',
    './tests/util.ts',
    './tests/factory.ts'
  ],
  coveragePathIgnorePatterns: ['./tests/util.ts', './tests/factory.ts'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  // coverageThreshold: {
  //   global: { branches: 80, functions: 80, lines: 80, statements: 80 }
  // }
}
