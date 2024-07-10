const {DocumentationTab} = require('./documentation.core')
const {waitForElementVisible} = require('../commons')
const { HomePage } = require('../home')
const expect = require('chai').expect

class DocumentationPage{
    constructor() {
        this.documentation = new DocumentationTab()
    }

    async switchTotheDocumentationTab(){
        await this.documentation.documentationTab.click()
        await waitForElementVisible(this.documentation.documentationTitle)
        const documentationTabTitleValue = await this.documentationTitle.documentationTitle.getText()
        expect(documentationTabTitleValue).to.include('Documentation')
    }

}

module.exports = {
    DocumentationPage
}