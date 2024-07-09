const { browser } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function(){


    it('first test', async function(){
        const searchValue = 'people/1/'
        const documentationTabSelector = 'body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a'
        const documentationTab = $(documentationTabSelector) 

        const documentationTabTitleSelector = 'body > div > div:nth-child(2) > div.col-md-9.col-sm-9 > h1:nth-child(1)'
        const documentationTabTitle = $(documentationTabTitleSelector)

        const homeTabSelector = 'body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(1) > a'
        const homeTab = $(homeTabSelector)

        const endpointInputSelector = '#interactive'
        const endpointInput = $(endpointInputSelector)

        const requestButtonSelector = 'body > div > div:nth-child(3) > div.col-lg-8.col-md-8.col-sm-8 > div.input-group > span.input-group-btn > button'
        const requestButton = $(requestButtonSelector)


        browser.waitForAngularEnabled(false);
        await browser.get('https://swapi.dev/')
        await browser.wait(EC.visibilityOf(documentationTab), 60000, 'Google imput should be visible')
        await documentationTab.click()

        await browser.wait(EC.visibilityOf(documentationTabTitle), 60000, 'Google imput should be visible')
        const documentationTabTitleValue = await documentationTabTitle.getText()
        expect(documentationTabTitleValue).to.include('Documentation')

        await browser.wait(EC.visibilityOf(homeTab), 60000, 'Google imput should be visible')
        await homeTab.click()

        await browser.wait(EC.visibilityOf(endpointInput), 60000, 'Google imput should be visible')
        await browser.wait(EC.visibilityOf(requestButton), 60000, 'Google imput should be visible')
        await endpointInput.sendKeys(searchValue)
        await requestButton.click()
    })

})