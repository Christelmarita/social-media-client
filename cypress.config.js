/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    pass_email: 'jaweel@noroff.no',
    pass_password: 'password',
    fail_email: 'jaweel@error.no',
    fail_password: 'notmypassword',
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
