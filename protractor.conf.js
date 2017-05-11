// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
var HtmlScreenshotReporter = require("protractor-jasmine2-html-reporter");
var reporter = new HtmlScreenshotReporter({
  savePath: './reports/execution',
  screenshotsFolder: 'images',
  filename: 'report.html'
});

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './tests/**/*.e2e-test.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
 
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'tests'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  }
};
