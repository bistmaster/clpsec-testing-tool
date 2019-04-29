const nightwatch_config = {
    src_folders : ["tests/specs"],
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
  
    test_settings: {
      default: {
        launch_url: "https://www.clpsec.com",
        desiredCapabilities: {
            'browserstack.user': 'bethoveentodino3',
            'browserstack.key': 'KsRB2ahsy3zxxkmCzskx',
            'os': 'Windows',
            'os_version': '10',
            'browser': 'Chrome',
            'browser_version': '62.0',
            'resolution': '1024x768',
            'project': 'CLPSEC - Windows Chrome'
        },
        globals: {
            "urls": {
                "home": "/",
                "developer": "/developer",
                "about": "/about",
                "faq": "/faq",
                "contact": "/contact",
                "terms": "/terms",
                "privacy": "/privacy",
                "copyright": "/copyright",
                "disclaimer": "/disclaimer",
                "cookies": "/cookies",
                "pics": "/pics",
                "homeZh": "/zh",
                "developerZh": "/zh/developer",
                "aboutZh": "/zh/about",
                "faqZh": "/zh/faq",
                "contactZh": "/zh/contact",
                "termsZh": "/zh/terms",
                "privacyZh": "/zh/privacy",
                "copyrightZh": "/zh/copyright",
                "disclaimerZh": "/zh/disclaimer",
                "cookiesZh": "/zh/cookies",
                "picsZh": "/zh/pics"                
            },
            "protocol": "http"
        }          
      },
      ie: {
        launch_url: "https://www.clpsec.com",
        desiredCapabilities: {
            'browserstack.user': 'bethoveentodino3',
            'browserstack.key': 'KsRB2ahsy3zxxkmCzskx',
            'os': 'Windows',
            'os_version': '10',
            'browser': 'IE',
            'browser_version': '11.0',
            'resolution': '1366x768',
            'project': 'CLPSEC - Windows Internet Explorer'
        },
        globals: {
            "urls": {
                "home": "/",
                "developer": "/developer",
                "about": "/about",
                "faq": "/faq",
                "contact": "/contact",
                "terms": "/terms",
                "privacy": "/privacy",
                "copyright": "/copyright",
                "disclaimer": "/disclaimer",
                "cookies": "/cookies",
                "pics": "/pics",
                "homeZh": "/zh",
                "developerZh": "/zh/developer",
                "aboutZh": "/zh/about",
                "faqZh": "/zh/faq",
                "contactZh": "/zh/contact",
                "termsZh": "/zh/terms",
                "privacyZh": "/zh/privacy",
                "copyrightZh": "/zh/copyright",
                "disclaimerZh": "/zh/disclaimer",
                "cookiesZh": "/zh/cookies",
                "picsZh": "/zh/pics"                
            },
            "protocol": "http"
        }          
      },
      edge: {
        launch_url: "https://www.clpsec.com",
        desiredCapabilities: {
            'browserstack.user': 'bethoveentodino3',
            'browserstack.key': 'KsRB2ahsy3zxxkmCzskx',
            'os': 'Windows',
            'os_version': '10',
            'browser': 'Edge',
            'browser_version': '17.0',
            'resolution': '1024x768',
            'project': 'CLPSEC - Windows Edge'
        },
        globals: {
            "urls": {
                "home": "/",
                "developer": "/developer",
                "about": "/about",
                "faq": "/faq",
                "contact": "/contact",
                "terms": "/terms",
                "privacy": "/privacy",
                "copyright": "/copyright",
                "disclaimer": "/disclaimer",
                "cookies": "/cookies",
                "pics": "/pics",
                "homeZh": "/zh",
                "developerZh": "/zh/developer",
                "aboutZh": "/zh/about",
                "faqZh": "/zh/faq",
                "contactZh": "/zh/contact",
                "termsZh": "/zh/terms",
                "privacyZh": "/zh/privacy",
                "copyrightZh": "/zh/copyright",
                "disclaimerZh": "/zh/disclaimer",
                "cookiesZh": "/zh/cookies",
                "picsZh": "/zh/pics"                
            },
            "protocol": "http"
        }          
      },      
      firefox: {
        launch_url: "https://www.clpsec.com",
        desiredCapabilities: {
            'browserstack.user': 'bethoveentodino3',
            'browserstack.key': 'KsRB2ahsy3zxxkmCzskx',
            'os': 'Windows',
            'os_version': '10',
            'browser': 'Firefox',
            'browser_version': '66.0',
            'resolution': '1024x768',
            'project': 'CLPSEC - Windows Firefox'
        },
        globals: {
            "urls": {
                "home": "/",
                "developer": "/developer",
                "about": "/about",
                "faq": "/faq",
                "contact": "/contact",
                "terms": "/terms",
                "privacy": "/privacy",
                "copyright": "/copyright",
                "disclaimer": "/disclaimer",
                "cookies": "/cookies",
                "pics": "/pics",
                "homeZh": "/zh",
                "developerZh": "/zh/developer",
                "aboutZh": "/zh/about",
                "faqZh": "/zh/faq",
                "contactZh": "/zh/contact",
                "termsZh": "/zh/terms",
                "privacyZh": "/zh/privacy",
                "copyrightZh": "/zh/copyright",
                "disclaimerZh": "/zh/disclaimer",
                "cookiesZh": "/zh/cookies",
                "picsZh": "/zh/pics"                
            },
            "protocol": "http"
        }          
      },
      safari: {
        launch_url: "https://www.clpsec.com",
        desiredCapabilities: {
            'browserstack.user': 'bethoveentodino3',
            'browserstack.key': 'KsRB2ahsy3zxxkmCzskx',
            'os': 'OS X',
            'os_version': 'Mojave',
            'browser': 'Safari',
            'browser_version': '12.0',
            'resolution': '1024x768',
            'project': 'CLPSEC - OS X Mojave Safari'
        },
        globals: {
            "urls": {
                "home": "/",
                "developer": "/developer",
                "about": "/about",
                "faq": "/faq",
                "contact": "/contact",
                "terms": "/terms",
                "privacy": "/privacy",
                "copyright": "/copyright",
                "disclaimer": "/disclaimer",
                "cookies": "/cookies",
                "pics": "/pics",
                "homeZh": "/zh",
                "developerZh": "/zh/developer",
                "aboutZh": "/zh/about",
                "faqZh": "/zh/faq",
                "contactZh": "/zh/contact",
                "termsZh": "/zh/terms",
                "privacyZh": "/zh/privacy",
                "copyrightZh": "/zh/copyright",
                "disclaimerZh": "/zh/disclaimer",
                "cookiesZh": "/zh/cookies",
                "picsZh": "/zh/pics"                
            },
            "protocol": "http"
        }          
      }                  
    }
  };
  
  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
  }
  
  module.exports = nightwatch_config;