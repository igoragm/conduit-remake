module.exports = {
    preset: "jest-puppeteer",
    testMatch: ["**/tests/**/*.pt.*"],
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};
