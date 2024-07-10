const {RequestRegion} = require('./requestArea')
const {waitForElementVisible} = require('../commons')
const { browser } = require('protractor')
const expect = require('chai').expect

class HomePage{
    constructor(){
        this.request = new RequestRegion()
    }

    async sendRequest(endpointValue){
        await waitForElementVisible(this.request.endpointInput)
        await this.request.endpointInput.sendKeys(endpointValue)
        await this.request.requestButton.click
    }

    async switchToTheHomeTab(){
        await this.request.homeTab.click()
        await waitForElementVisible(this.request.homeTabTitle)
        const homeTabTitleValue = await this.request.homeTabTitle.getText()
        expect(homeTabTitleValue).to.include('Try it now!')
    }
}

module.exports = {
    HomePage
}