
exports.verfiyBreadcrumbs = (browser, paths, isLegalPage) => {
    const breadcrumbContainerClass = isLegalPage ? `#content > div:first-child` : `#content > div:nth-child(2)`;
    browser.waitForElementVisible(breadcrumbContainerClass, 1000);
    paths.forEach((val, idx) => {
        browser.expect.element(`${breadcrumbContainerClass} > span:nth-child(${++idx})`).to.be.visible;   
        browser.assert.containsText(`${breadcrumbContainerClass} > span:nth-child(${idx}) > a:first-child`, val.label)
    })
}

exports.verifyTitle = (browser, lang, isMobile) => {
    const {browserName} = browser.options.desiredCapabilities;
    if (isMobile && browserName !== 'firefox') {
        browser.windowSize('current', 375, 667)
    } else {
        if (browserName !== 'firefox')
            browser.windowMaximize('current')
    } 

    browser.url(`${browser.launch_url}${lang}`)
         .waitForElementVisible('body', 30)
         .assert.title('Smart Energy Connect')    
}

exports.verifyLinks = (browser, headers, isMobile) => {
    if (isMobile) {
        browser.waitForElementVisible('button.d-xs-none');
        browser.click('button.d-xs-none');
    }

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

    if (isMobile) {
        browser.click('button.d-xs-none');
    }

}

exports.verifyCookieConsent = (browser) => {
    browser.waitForElementVisible('footer > div.container > div');
    const {browserName} = browser.options.desiredCapabilities;
    if (browserName !== 'firefox')
        browser.getLocationInView('footer > div.container > div')
    browser.expect.element('footer > .container > div:first-child').to.be.visible;
    browser.click('.cursor-close');
    browser.expect.element('footer > .container > div:first-child').to.not.be.present;    
}

exports.verifyFooters = (browser, footers) => {
    const {browserName} = browser.options.desiredCapabilities;
    browser.waitForElementVisible('div > .footer-1');
    if (browserName !== 'firefox')    
        browser.getLocationInView('div > .footer-1')
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.enterpriseAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.utilityAppsLink.label)
    browser.assert.containsText('div > .footer-1 > ul', footers.energyAppStoreFooter.residentialAppsLink.label)

    browser.waitForElementVisible('div > .footer-2');
    if (browserName !== 'firefox')
        browser.getLocationInView('div > .footer-2')
    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.label)
    browser.assert.containsText('div > .footer-2 > ul', footers.partnersFooter.sepPartnerProgram.label)

    browser.waitForElementVisible('div > .footer-3');
    if (browserName !== 'firefox')
        browser.getLocationInView('div > .footer-3')
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.aboutUsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.faqsLink.label)
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.Support.label)       
    browser.assert.containsText('div > .footer-3 > ul', footers.supportFooter.contactUsLink.label)       


    browser.waitForElementVisible('div > .footer-4');
    if (browserName !== 'firefox')
        browser.getLocationInView('div > .footer-4')
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.privacyLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.copyrightLink.label)
    browser.assert.containsText('div > .footer-4 > ul', footers.quicklinksFooter.disclaimerLink.label)     
}

exports.verifyContact = (browser) => {
    browser.setValue('input[name=firstname]', 'nightwatch')
    browser.setValue('input[name=surname]', 'nightwatch')
    browser.setValue('input[name=surname]', 'nightwatch')
    browser.setValue('input[name=company]', 'nightwatch')
    browser.setValue('input[name=phone]', 'nightwatch')
    browser.setValue('input[name=email]', `${new Date().getTime()}@testsss.com`)
    browser.setValue('select[name=inquiry]', 'Sales Inquiry')
    browser.setValue('select[name=application]', 'Solar Hawk')
    browser.setValue('textarea[name=message]', 'ja dkajshd kjahdk ah kajhs kjhsd')
    browser.click('button.btn-primary');
    browser.pause(5000);    
}