module.exports = (function(settings) {
    settings.test_workers = false;
    settings.globals_path = 'globalsModule.js'
    return settings;
  })(require('./config/nightwatch.json'));