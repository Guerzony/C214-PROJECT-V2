const { defineConfig } = require("cypress");
const path = require("path");
module.exports = defineConfig({
  reporter: 'cypress-multi-reporters', // Alterado para usar o cypress-multi-reporters
  reporterOptions: {
    configFile: path.resolve(__dirname, "cypress-configs/reporter-config.json")
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});