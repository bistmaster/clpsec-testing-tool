
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null, about = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'en-US');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'en-US');
    const dataAbout = await contentful.fetch(contentful.ENTRY.ABOUT, 'en-US');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   
    about = JSON.parse(dataAbout).fields;   
  },

  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.about);
  },

  'Check on the links':  (browser) => {
    utils.verifyLinks(browser, headers)
  },

  'Check on the Breadcrumbs' : (browser) => {
    utils.verfiyBreadcrumbs(browser, about.breadcrumbs.paths);
  },

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },

  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  }
}