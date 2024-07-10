const { browser } = require('protractor')
// const EC = protractor.ExpectedConditions

const expect = require('chai').expect
const { HomePage, DocumentationPage } = require('../page_objects')

describe('First suit', function(){
    const homePage = new HomePage()
    const docPage = new DocumentationPage()

    it('first test', async function(){
        const searchValue = 'people/1/'
        // const documentationTabSelector = 'body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a'
        // const documentationTab = $(documentationTabSelector) 

        // const documentationTabTitleSelector = 'body > div > div:nth-child(2) > div.col-md-9.col-sm-9 > h1:nth-child(1)'
        // const documentationTabTitle = $(documentationTabTitleSelector)

        browser.waitForAngularEnabled(false);
        await browser.get('https://swapi.dev/')
        // await browser.wait(EC.visibilityOf(documentationTab), 60000, 'Google imput should be visible')
        // await documentationTab.click()

        // await browser.wait(EC.visibilityOf(documentationTabTitle), 60000, 'Google imput should be visible')
        // const documentationTabTitleValue = await documentationTabTitle.getText()
        // expect(documentationTabTitleValue).to.include('Documentation')

       await docPage.switchToTheHomeTab()

        await homePage.switchToTheHomeTab()
        await homePage.sendRequest(searchValue)
    })

})