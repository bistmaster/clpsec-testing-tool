
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
let headers = null, footers = null, carousels = null;

module.exports = {

  'Fetch Contentful' : async (browser) => {
    const dataHeaders = await contentful.fetch(contentful.ENTRY.HEADERS, 'en-US');
    const dataFooters = await contentful.fetch(contentful.ENTRY.FOOTERS, 'en-US');
    const dataHomepage = await contentful.fetch(contentful.ENTRY.HOMEPAGE, 'en-US');
    
    headers = JSON.parse(dataHeaders).fields;   
    footers = JSON.parse(dataFooters).fields;   
    homepage = JSON.parse(dataHomepage).fields; 
  },


  'Check on the Title': (browser) => {
    utils.verifyTitle(browser, browser.globals.urls.home, true);      
  },

  'Check on the link':  (browser) => {
    utils.verifyLinks(browser, headers, true)
  },

  'Check on the Carousel': (browser) => {
    const carouselSelector = '.carousel'
    browser.waitForElementVisible(carouselSelector);
    browser.waitForElementVisible('ol.carousel-indicators');
    browser.assert.containsText('.carousel-inner div:first-child', homepage.carouselSlide1.title)
    browser.assert.cssProperty(".carousel-inner div:first-child", "background-image", `url("${browser.globals.protocol}://www.clpsec.com/static/img/ColorblockFor-Mobile.png")`);
    browser.waitForElementVisible('ol.carousel-indicators li:nth-child(2)')
    browser.execute(function() {
      document.querySelector('ol.carousel-indicators li:nth-child(2)').click()
    });
    browser.assert.cssProperty(".carousel-inner div:nth-child(2)", "background-image", `url("${browser.globals.protocol}://www.clpsec.com/static/img/ColorblockFor-Mobile.png")`);
    browser.assert.containsText('.carousel-inner div:nth-child(2)', homepage.carouselSlide2.title)
    browser.waitForElementVisible('ol.carousel-indicators li:nth-child(3)')
    browser.execute(function() {
      document.querySelector('ol.carousel-indicators li:nth-child(3)').click()
    });
    browser.assert.cssProperty(".carousel-inner div:nth-child(3)", "background-image", `url("${browser.globals.protocol}://www.clpsec.com/static/img/ColorblockFor-Mobile.png")`);
    browser.assert.containsText('.carousel-inner div:nth-child(3)', homepage.carouselSlide3.title)
  },

  'Check on the Feature App' : (browser) => {
    const carouselSelector = '.sec-featured'
    
    browser.waitForElementVisible(carouselSelector);
    browser.getLocationInView(carouselSelector)
    browser.assert.containsText(`${carouselSelector} > h1`, homepage.featuredAppTitle.subtitle)
    browser.assert.containsText(`${carouselSelector} > h3`, homepage.featuredAppTitle.title)
    
    browser.getLocationInView('.sec-card > div:nth-child(1) .card-body > h6')
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h6', homepage.featuredApp1.category);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h4', homepage.featuredApp1.title);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > p', homepage.featuredApp1.description.trim());

    browser.getLocationInView('.sec-card > div:nth-child(2) .card-body > h6')    
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h6', homepage.featuredApp2.category);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h4', homepage.featuredApp2.title);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > p', homepage.featuredApp2.description.trim());    
    
    browser.getLocationInView('.sec-card > div:nth-child(3) .card-body > h6')
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h6', homepage.featuredApp3.category);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h4', homepage.featuredApp3.title);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > p', homepage.featuredApp3.description.trim());    
  },  

  'Check on the Sections':  (browser) => {
    browser.getLocationInView('#content > div > .sec-details:nth-child(2)')
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(2)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(3)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(4)');

    browser.getLocationInView('div > .sec-1-content > h5')
    browser.assert.containsText('div > .sec-1-content > h5', homepage.section1.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > h2', homepage.section1.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > p', homepage.section1.description);
    browser.assert.containsText('div > .sec-1-content > a', homepage.section1.cta.caption);
    
    browser.getLocationInView('div > .sec-2-content > h5')
    browser.assert.containsText('div > .sec-2-content > h5', homepage.section2.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > h2', homepage.section2.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > p', homepage.section2.description);
    browser.assert.containsText('div > .sec-2-content > a', homepage.section2.cta.caption);

    browser.getLocationInView('div > .sec-3-content > h5')
    browser.assert.containsText('div > .sec-3-content > h5', homepage.section3.heading.trim());
    browser.assert.containsText('div > .sec-3-content > h2', homepage.section3.title.trim());
    browser.assert.containsText('div > .sec-3-content > p', homepage.section3.description);
    browser.assert.containsText('div > .sec-3-content > a', homepage.section3.cta.caption);     
  },

  'Check on the Cookie': (browser) => {
    utils.verifyCookieConsent(browser)
  },

  'Check on the Footer': (browser) => {
    utils.verifyFooters(browser, footers);
  }
}