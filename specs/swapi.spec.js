const expect = require('chai').expect
const { HomePage, DocumentationPage } = require('../page_objects');

describe('First suit', function () {
    const homePage = new HomePage();
    const docPage = new DocumentationPage();

    it('first test', async function(){
        const endpointName = 'people/1/'
        browser.waitForAngularEnabled(false);
        await browser.get('https://swapi.dev/')
        
        await docPage.switchTotheDocumentationTab()

        await homePage.switchToTheHomeTab()
        await homePage.sendRequest(endpointName)
    })
})