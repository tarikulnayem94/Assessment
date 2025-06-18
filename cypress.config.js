const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    // specPattern: 'cypress/npm//*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {

      // implement node event listeners here if needed
    },
    baseUrl: 'http://automationexercise.com', chromeWebSecurity: false,

    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
  "reporterEnabled": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true
  }
});