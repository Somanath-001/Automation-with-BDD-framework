const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/feature/*.feature",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
    async setupNodeEvents(on, config) {
      // Add Cucumber Preprocessor Plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Set up ESBuild for feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Ensure modified config is returned
      return config;
    },
  },
});
