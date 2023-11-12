const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    pass_email: 'jaweel@noroff.no',
    pass_password: 'password',
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
