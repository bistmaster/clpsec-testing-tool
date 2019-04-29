
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'zh-Hant');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'zh-Hant');
    const dataAbout = await contentful.fetch(contentful.ENTRY.ABOUT, 'zh-Hant');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   
    about = JSON.parse(dataAbout).fields;   
  },

  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.aboutZh, true);
  },

  'Check on the links':  (browser) => {
    utils.verifyLinks(browser, headers, true)
  },

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },

  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  }
}