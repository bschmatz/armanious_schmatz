module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/components/ui/alert$": "<rootDir>/src/__mocks__/uiMocks.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupTests.js"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.test.{js,jsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx}",
  ],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/main.jsx",
    "!src/__mocks__/**",
    "!src/__tests__/setupTests.js",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "setupTests.js"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  injectGlobals: true,
};
