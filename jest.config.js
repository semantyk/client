module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    }
};