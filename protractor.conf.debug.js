var HtmlScreenshotReporter = require("protractor-jasmine2-html-reporter");
var reporter = new HtmlScreenshotReporter({
  savePath: './reports/debug',
  screenshotsFolder: 'images',
  filename: 'Debugreport.html'
});
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './dist/out-tsc-tests/**/*.e2e-test.js'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  //directConnect: true,
  //baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
   
  },
  onPrepare: function() {
   jasmine.getEnv().addReporter(reporter);
  },
  //SELENIUM_PROMISE_MANAGER: 0
};