
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'en-US');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'en-US');
    const dataContact = await contentful.fetch(contentful.ENTRY.CONTACT, 'en-US');
    const dataThank = await contentful.fetch(contentful.ENTRY.CONTACT, 'en-US');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields; 
    contacts = JSON.parse(dataContact).fields; 
    thanks = JSON.parse(dataThank).fields;
  },

  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.contact);
  },

  'Check on the link':  (browser) => {
    utils.verifyLinks(browser, headers)
  },

  'Check on the Breadcrumbs' : (browser) => {
    utils.verfiyBreadcrumbs(browser, contacts.breadcrumbs.paths);
  },   

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },

  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  },

  'Check on sending enquiry and redirect to thank you page': (browser) => {
    utils.verifyContact(browser);
    utils.verifyLinks(browser, headers)
    utils.verfiyBreadcrumbs(browser, thanks.breadcrumbs.paths);
    utils.verifyFooters(browser, footers);
  },  


}