const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters', // Alterado para usar o cypress-multi-reporters
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    video: true,
  },
});