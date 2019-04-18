
const contentful = require('../helpers/contentful');
let headers = null, footers = null, carousels = null;

module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'zh-Hant');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'zh-Hant');
    const dataHomepage = await contentful.fetch(contentful.ENTRY.HOMEPAGE, 'zh-Hant');
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   
    homepage = JSON.parse(dataHomepage).fields;   
  },


  'Check on the Title': (browser) => {
    browser
      .windowMaximize('current')
      .url(`${browser.launch_url}${browser.globals.urls.homeZh}`)
      .waitForElementVisible('body', 30)
      .assert.title('Smart Energy Connect')
  },

  'Check on the link':  (browser) => {
    const linksSelector = '.nav-mid';
    browser.waitForElementVisible(linksSelector);
    browser.expect.element(linksSelector).to.be.visible;
    browser.assert.containsText('.nav-mid > li:first-child', headers.energyAppStore.label);
    browser.assert.containsText('.nav-mid > li:nth-child(2)', headers.partnersLink.label);
    browser.assert.containsText('.nav-mid > li:nth-child(3)', headers.aboutUsLink.label);
    browser.assert.containsText('.nav-mid > li:nth-child(4)', headers.faqsLink.label);
    browser.assert.containsText('.nav-mid > li:nth-child(5)', headers.supportLink.label);
    browser.assert.containsText('.nav-mid > li:nth-child(6)', headers.contactUs.label);
  },

  'Check on the Carousel': (browser) => {
    const carouselSelector = '.carousel'
    browser.waitForElementVisible(carouselSelector);
    browser.waitForElementVisible('ol.carousel-indicators');
    browser.assert.containsText('.carousel-inner div:first-child', homepage.carouselSlide1.title)
    browser.assert.cssProperty(".carousel-inner div:first-child", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/21MlXWCGoI1K8OxOsMZOXr/85896dea94616161be3b58c947482c68/Heroimage_Cropped_2.jpg?w=1920&h=510&q=90&fm=jpg&fit=fill")`);
    browser.click('ol.carousel-indicators li:nth-child(2)')
    browser.assert.cssProperty(".carousel-inner div:nth-child(2)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/2aJl8zm5vquWISAiMACQ4k/ac2dee6ec1eda6d03213f6f0bb2052bc/Carousel-2.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`);
    browser.assert.containsText('.carousel-inner div:nth-child(2)', homepage.carouselSlide2.title)
    browser.click('ol.carousel-indicators li:nth-child(3)')
    browser.assert.cssProperty(".carousel-inner div:nth-child(3)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/18Qom1uIoGk6GeEOKk2oEE/3c187131a9123e5ee7c9be238f0a2132/Carousel-3.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`);
    browser.assert.containsText('.carousel-inner div:nth-child(3)', homepage.carouselSlide3.title)
  },

  'Check on the Feature App' : (browser) => {
    const carouselSelector = '.sec-featured';
    browser.waitForElementVisible(carouselSelector);
    browser.assert.containsText(`${carouselSelector} > h1`, homepage.featuredAppTitle.subtitle)
    browser.assert.containsText(`${carouselSelector} > h3`, homepage.featuredAppTitle.title)
    
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h6', homepage.featuredApp1.category);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h4', homepage.featuredApp1.title);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > p', homepage.featuredApp1.description);

    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h6', homepage.featuredApp2.category);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h4', homepage.featuredApp2.title);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > p', homepage.featuredApp2.description.trim());    

    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h6', homepage.featuredApp3.category);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h4', homepage.featuredApp3.title);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > p', homepage.featuredApp3.description.trim());    
  }, 

  'Check on the Sections':  (browser) => {
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(2)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(3)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(4)');

    browser.assert.containsText('div > .sec-1-content > h5', homepage.section1.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > h2', homepage.section1.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > p', homepage.section1.description);
    browser.assert.containsText('div > .sec-1-content > a', homepage.section1.cta.caption);
    
    browser.assert.containsText('div > .sec-2-content > h5', homepage.section2.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > h2', homepage.section2.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > p', homepage.section2.description);
    browser.assert.containsText('div > .sec-2-content > a', homepage.section2.cta.caption);

    browser.assert.containsText('div > .sec-3-content > h5', homepage.section3.heading.trim());
    browser.assert.containsText('div > .sec-3-content > h2', homepage.section3.title.trim());
    browser.assert.containsText('div > .sec-3-content > p', homepage.section3.description);
    browser.assert.containsText('div > .sec-3-content > a', homepage.section3.cta.caption);     
  },

  'Check on the Footer': (browser) => {
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.enterpriseAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.utilityAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.residentialAppsLink.label)

    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.label)
    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.sepPartnerProgram.label)

    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.aboutUsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.faqsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.Support.label)       
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.contactUsLink.label)       

    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.privacyLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.copyrightLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.disclaimerLink.label)       
  }
}