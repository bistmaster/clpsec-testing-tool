

module.exports = {
  'Check on the Title': (browser) => {
    browser
      .url('https://www.clpsec.com')
      .waitForElementVisible('body', 30)
      .assert.title('Smart Energy Connect')
  },

  'Check on the link':  (browser) => {
    const linksSelector = '.nav-mid';
    browser.waitForElementVisible(linksSelector);
    browser.expect.element(linksSelector).to.be.visible;
    browser.expect.element('.nav-mid > li:first-child').to.be.visible;
    browser.assert.containsText('.nav-mid > li:first-child', "Energy App Store");
    browser.expect.element('.nav-mid > li:nth-child(2)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(2)', "Developer");
    browser.expect.element('.nav-mid > li:nth-child(3)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(3)', "About Us");
    browser.expect.element('.nav-mid > li:nth-child(4)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(4)', "FAQ");
    browser.expect.element('.nav-mid > li:nth-child(5)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(5)', "Support");
    browser.expect.element('.nav-mid > li:nth-child(6)').to.be.visible;
    browser.assert.containsText('.nav-mid > li:nth-child(6)', "Contact Us");
  },

  'Check on the Carousel': (browser) => {
    const carouselSelector = '.carousel'
    browser.waitForElementVisible(carouselSelector);
    browser.waitForElementVisible('.carousel-inner div:first-child', 1000)
    browser.assert.containsText('.carousel-inner div:first-child', 'Choose the right energy management solution for you')
    browser.assert.cssProperty(".carousel-inner div:first-child", "background-image", 'url("https://images.ctfassets.net/v7rhwo5gj231/21MlXWCGoI1K8OxOsMZOXr/8732fe168c48fbd1754cf5c168e09bf3/Heroimage_Cropped_2.jpg?w=1920&h=510&q=90&fm=jpg&fit=fill")');
    browser.waitForElementVisible('.carousel-inner div:nth-child(2)', 7000)
    browser.assert.cssProperty(".carousel-inner div:nth-child(2)", "background-image", 'url("https://images.ctfassets.net/v7rhwo5gj231/2aJl8zm5vquWISAiMACQ4k/ac2dee6ec1eda6d03213f6f0bb2052bc/Carousel-2.png?w=1920&h=510&q=90&fm=jpg&fit=fill")');
    browser.assert.containsText('.carousel-inner div:nth-child(2)', 'Leverage digital technologies to charge up your business')
    browser.waitForElementVisible('.carousel-inner div:nth-child(3)', 7000)
    browser.assert.cssProperty(".carousel-inner div:nth-child(3)", "background-image", 'url("https://images.ctfassets.net/v7rhwo5gj231/18Qom1uIoGk6GeEOKk2oEE/3c187131a9123e5ee7c9be238f0a2132/Carousel-3.png?w=1920&h=510&q=90&fm=jpg&fit=fill")');
    browser.assert.containsText('.carousel-inner div:nth-child(3)', 'Benefit from our partnerships with innovative developers')
  },

  'Check on the Feature App' : (browser) => {
    const carouselSelector = '.sec-featured'
    browser.waitForElementVisible(carouselSelector);
    browser.assert.containsText(`${carouselSelector} > h1`, 'ENERGY APP STORE')
    browser.assert.containsText(`${carouselSelector} > h3`, 'Featured App')

    browser.waitForElementVisible('.sec-card > div:nth-child(1)');
    browser.waitForElementVisible('.sec-card > div:nth-child(2)');
    browser.waitForElementVisible('.sec-card > div:nth-child(3)');

    browser.assert.elementPresent('.sec-card > div:nth-child(1) .card-body');
    browser.assert.elementPresent('.sec-card > div:nth-child(1) .card-body > img');
    browser.assert.elementPresent('.sec-card > div:nth-child(1) .card-body > h6');
    browser.assert.elementPresent('.sec-card > div:nth-child(1) .card-body > h4');
    browser.assert.elementPresent('.sec-card > div:nth-child(1) .card-body > p');

    browser.assert.elementPresent('.sec-card > div:nth-child(2) .card-body');
    browser.assert.elementPresent('.sec-card > div:nth-child(2) .card-body > img');
    browser.assert.elementPresent('.sec-card > div:nth-child(2) .card-body > h6');
    browser.assert.elementPresent('.sec-card > div:nth-child(2) .card-body > h4');   
    browser.assert.elementPresent('.sec-card > div:nth-child(2) .card-body > p');   

    browser.assert.elementPresent('.sec-card > div:nth-child(3) .card-body');
    browser.assert.elementPresent('.sec-card > div:nth-child(3) .card-body > img');
    browser.assert.elementPresent('.sec-card > div:nth-child(3) .card-body > h6');
    browser.assert.elementPresent('.sec-card > div:nth-child(3) .card-body > h4');     
    browser.assert.elementPresent('.sec-card > div:nth-child(3) .card-body > p');     
  },  

  'Check on the Sections':  (browser) => {

    browser.waitForElementVisible('#content > div > .sec-details:nth-child(2)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(3)');
    browser.waitForElementVisible('#content > div > .sec-details:nth-child(4)');

    browser.waitForElementVisible('div > .sec-1-content');
    browser.assert.elementPresent('div > .sec-1-content > h5');
    browser.assert.elementPresent('div > .sec-1-content > h2');
    browser.assert.elementPresent('div > .sec-1-content > p');
    browser.assert.elementPresent('div > .sec-1-content > a');

    browser.waitForElementVisible('div > .sec-2-content');
    browser.assert.elementPresent('div > .sec-2-content > h5');
    browser.assert.elementPresent('div > .sec-2-content > h2');
    browser.assert.elementPresent('div > .sec-2-content > p');
    browser.assert.elementPresent('div > .sec-2-content > a');    

    browser.waitForElementVisible('div > .sec-3-content');
    browser.assert.elementPresent('div > .sec-3-content > h5');
    browser.assert.elementPresent('div > .sec-3-content > h2');
    browser.assert.elementPresent('div > .sec-3-content > p');
    browser.assert.elementPresent('div > .sec-3-content > a');     
  },

  'Check on the Footer': (browser) => {
    browser.waitForElementVisible('div > .footer-1');
    browser.assert.containsText('div > .footer-1 > ul', 'ENERGY APP STORE')
    browser.assert.containsText('div > .footer-1 > ul', 'Enterprise Apps')
    browser.assert.containsText('div > .footer-1 > ul', 'Utility Apps')
    browser.assert.containsText('div > .footer-1 > ul', 'Residential Apps')


    browser.waitForElementVisible('div > .footer-2');
    browser.assert.containsText('div > .footer-2 > ul', 'DEVELOPER')
    browser.assert.containsText('div > .footer-2 > ul', 'Smart Energy Connect Developer Programme')

    browser.waitForElementVisible('div > .footer-3');
    browser.assert.containsText('div > .footer-3 > ul', 'SUPPORT')
    browser.assert.containsText('div > .footer-3 > ul', 'About Us')
    browser.assert.containsText('div > .footer-3 > ul', 'FAQ')
    browser.assert.containsText('div > .footer-3 > ul', 'Support')       
    browser.assert.containsText('div > .footer-3 > ul', 'Contact Us')       


    browser.waitForElementVisible('div > .footer-4');
    browser.assert.containsText('div > .footer-4 > ul', 'QUICK LINKS')
    browser.assert.containsText('div > .footer-4 > ul', 'Privacy Policy')
    browser.assert.containsText('div > .footer-4 > ul', 'Copyright')
    browser.assert.containsText('div > .footer-4 > ul', 'Disclaimer')       
  }

}