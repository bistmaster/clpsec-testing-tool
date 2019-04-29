
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'zh-Hant');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'zh-Hant');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   

    const dataCopyright = await contentful.fetch(contentful.ENTRY.COPYRIGHT, 'zh-Hant');
    copyright = JSON.parse(dataCopyright).fields;    
  },

  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.copyrightZh);
  },

  'Check on the link':  (browser) => {
    utils.verifyLinks(browser, headers)
  },

  'Check on the Breadcrumbs' : (browser) => {
    utils.verfiyBreadcrumbs(browser, copyright.breadcrumbs.paths, true);
  },

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },


  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  }

}