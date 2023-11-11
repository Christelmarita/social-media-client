const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    pass_email: 'user@noroff.no',
    pass_password: '123password',
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
