const { browser } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function(){

    it('first test', async function(){
        const searchValue = 'Телефон Samsung'
        const searchInputSelector = 'body > rz-app-root > div > div > rz-header > rz-main-header > header > div > div > div > rz-search-suggest > form > div > div.search-form__input-wrapper > input' 
        const searchInput = $(searchInputSelector)

        const searchButtonSelector = 'body > rz-app-root > div > div > rz-header > rz-main-header > header > div > div > div > rz-search-suggest > form > button'
        const searchButton = $(searchButtonSelector) 

        const catalogTitleSelector = 'body > rz-app-root > div > div > rz-category > div > main > div:nth-child(1) > div > h1'
        const catalogTitle = $(catalogTitleSelector)

        await browser.get('https://rozetka.com.ua/')
        await browser.wait(EC.visibilityOf(searchInput), 5000, 'Sale label should be visible')
        await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search input should be visible')

        await searchInput.sendKeys(searchValue)
        await searchButton.click()

        await browser.wait(EC.visibilityOf(catalogTitle), 60000, 'Catalog title should be visible')
        const catalogTitleValue = await catalogTitle.getText()

        expect(catalogTitleValue.toLowerCase).to.include('amsung')
    })

})