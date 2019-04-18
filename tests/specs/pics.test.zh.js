
const contentful = require('../helpers/contentful');
let headers = null, footers = null;
module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'zh-Hant');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'zh-Hant');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   
  },

  'Check on the Title': (browser) => {
    browser
      .windowMaximize('current')
      .url(`${browser.launch_url}${browser.globals.urls.picsZh}`)
      .waitForElementVisible('body', 30)
      .assert.title('Smart Energy Connect')
  },

  'Check on the link':  (browser) => {
    const linksSelector = '.nav-mid';
    browser.waitForElementVisible(linksSelector);
    browser.expect.element(linksSelector).to.be.visible;
    browser.expect.element('.nav-mid > li:first-child').to.be.visible;
    browser.assert.containsText('.nav-mid > li:first-child', headers.energyAppStore.label);
    browser.expect.element('.nav-mid > li:nth-child(2)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(2)', headers.partnersLink.label);
    browser.expect.element('.nav-mid > li:nth-child(3)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(3)', headers.aboutUsLink.label);
    browser.expect.element('.nav-mid > li:nth-child(4)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(4)', headers.faqsLink.label);
    browser.expect.element('.nav-mid > li:nth-child(5)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(5)', headers.supportLink.label);
    browser.expect.element('.nav-mid > li:nth-child(6)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(6)', headers.contactUs.label);
  },

  'Check on the Footer': (browser) => {
    browser.waitForElementVisible('div > .footer-1');
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.enterpriseAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.utilityAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.residentialAppsLink.label)


    browser.waitForElementVisible('div > .footer-2');
    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.label)
    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.sepPartnerProgram.label)

    browser.waitForElementVisible('div > .footer-3');
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.aboutUsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.faqsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.Support.label)       
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.contactUsLink.label)       


    browser.waitForElementVisible('div > .footer-4');
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.privacyLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.copyrightLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.disclaimerLink.label)       
  }

}