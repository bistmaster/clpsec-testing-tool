
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'en-US');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'en-US');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   

    const dataFaq = await contentful.fetch(contentful.ENTRY.FAQ, 'en-US');
    faq = JSON.parse(dataFaq).fields;       
    console.log(faq);
  },

  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.faq);

  },

  'Check on the link':  (browser) => {
    utils.verifyLinks(browser, headers)
  },

  'Check on the Breadcrumbs' : (browser) => {
    utils.verfiyBreadcrumbs(browser, faq.breadcrumbs.paths, true);
  },

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },

  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  }
}