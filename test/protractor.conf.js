exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'e2e/*.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    // for Cloud9
    'chromeOptions': {
      args: ['--no-sandbox']
    }
  },

  //baseUrl: 'http://localhost:3001/',
  // for Cloud9
  baseUrl: 'https://ide.c9.io/smathx/fswd3-angularjs:8081',

  framework: 'jasmine',
  directConnect: true,

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
