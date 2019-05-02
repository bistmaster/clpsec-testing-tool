const HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
const reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: __dirname + '/reports/',
  reportFilename: 'report.html',
  themeName: 'cover'  
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};