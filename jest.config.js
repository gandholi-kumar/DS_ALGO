/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["!**/src/mock_data", "**/?(*.)+(spec|test).[t]s?(x)"],
  collectCoverage: true,
};
