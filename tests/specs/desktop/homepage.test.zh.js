
const contentful = require('../../helpers/contentful');
const utils = require('../../helpers/utils');
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
    utils.verifyLinks(browser, headers)
  },

  'Check on the Carousel': (browser) => {
    const carouselSelector = '.carousel';
    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView(carouselSelector)
    browser.waitForElementVisible(carouselSelector);
    browser.waitForElementVisible('ol.carousel-indicators');
    browser.waitForElementVisible('div.carousel-inner div.carousel-item:first-child', 10000);
    browser.assert.containsText('div.carousel-inner div.carousel-item:first-child', homepage.carouselSlide1.title)
   
    if(browser.options.desiredCapabilities.browser == 'IE')
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:first-child", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/21MlXWCGoI1K8OxOsMZOXr/85896dea94616161be3b58c947482c68/Heroimage_Cropped_2.jpg?w=1920&h=510&q=90&fm=jpg&fit=fill")`.toLocaleLowerCase());
    else
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:first-child", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/21MlXWCGoI1K8OxOsMZOXr/85896dea94616161be3b58c947482c68/Heroimage_Cropped_2.jpg?w=1920&h=510&q=90&fm=jpg&fit=fill")`);

    browser.click('ol.carousel-indicators li:nth-child(2)')
    browser.waitForElementVisible('div.carousel-inner div.carousel-item:nth-child(2)');
    if(browser.options.desiredCapabilities.browser == 'IE')
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:nth-child(2)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/2aJl8zm5vquWISAiMACQ4k/ac2dee6ec1eda6d03213f6f0bb2052bc/Carousel-2.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`.toLocaleLowerCase());
    else  
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:nth-child(2)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/2aJl8zm5vquWISAiMACQ4k/ac2dee6ec1eda6d03213f6f0bb2052bc/Carousel-2.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`);
    browser.assert.containsText('div.carousel-inner div.carousel-item:nth-child(2)', homepage.carouselSlide2.title)
    
    browser.click('ol.carousel-indicators li:nth-child(3)');
    browser.waitForElementVisible('div.carousel-inner div.carousel-item:nth-child(3)');
    if(browser.options.desiredCapabilities.browser == 'IE')
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:nth-child(3)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/18Qom1uIoGk6GeEOKk2oEE/3c187131a9123e5ee7c9be238f0a2132/Carousel-3.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`.toLocaleLowerCase());
    else  
      browser.assert.cssProperty("div.carousel-inner div.carousel-item:nth-child(3)", "background-image", `url("${browser.globals.protocol}://images.ctfassets.net/v7rhwo5gj231/18Qom1uIoGk6GeEOKk2oEE/3c187131a9123e5ee7c9be238f0a2132/Carousel-3.png?w=1920&h=510&q=90&fm=jpg&fit=fill")`);
    browser.assert.containsText('div.carousel-inner div.carousel-item:nth-child(3)', homepage.carouselSlide3.title)
  },  

  'Check on the Feature App' : (browser) => {
    const carouselSelector = '.sec-featured'
    browser.waitForElementVisible(carouselSelector);
    browser.assert.containsText(`${carouselSelector} > h1`, homepage.featuredAppTitle.subtitle)
    browser.assert.containsText(`${carouselSelector} > h3`, homepage.featuredAppTitle.title)
    
    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView('.sec-card > div:nth-child(1) .card-body > h6')
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h6', homepage.featuredApp1.category);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > h4', homepage.featuredApp1.title);
    browser.assert.containsText('.sec-card > div:nth-child(1) .card-body > p', homepage.featuredApp1.description.trim());

    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView('.sec-card > div:nth-child(2) .card-body > h6')
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h6', homepage.featuredApp2.category);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > h4', homepage.featuredApp2.title);
    browser.assert.containsText('.sec-card > div:nth-child(2) .card-body > p', homepage.featuredApp2.description.trim());    

    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView('.sec-card > div:nth-child(3) .card-body > h6')
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h6', homepage.featuredApp3.category);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > h4', homepage.featuredApp3.title);
    browser.assert.containsText('.sec-card > div:nth-child(3) .card-body > p', homepage.featuredApp3.description.trim());    
  },  

  'Check on the Sections':  (browser) => {
    browser.pause(1000);
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(2)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(3)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(4)');

    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView('div > .sec-1-content > h5')
    browser.assert.containsText('div > .sec-1-content > h5', homepage.section1.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > h2', homepage.section1.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-1-content > p', homepage.section1.description);
    browser.assert.containsText('div > .sec-1-content > a', homepage.section1.cta.caption);
    
    if (browser.options.desiredCapabilities.browserName !== 'firefox')
      browser.getLocationInView('div > .sec-2-content > h5')
    browser.assert.containsText('div > .sec-2-content > h5', homepage.section2.heading.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > h2', homepage.section2.title.trim().toUpperCase());
    browser.assert.containsText('div > .sec-2-content > p', homepage.section2.description);
    browser.assert.containsText('div > .sec-2-content > a', homepage.section2.cta.caption);

    if (browser.options.desiredCapabilities.browserName !== 'firefox')
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