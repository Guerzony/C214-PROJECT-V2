const { defineConfig } = require("cypress");
const path = require("path");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/html/.jsons', // Define o diretório para os relatórios
    configFile: path.resolve(__dirname, "cypress-configs/reporter-config.json")
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});