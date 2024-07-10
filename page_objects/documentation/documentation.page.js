const {DocumentationTab} = require('./documentation.core')
const {waitForElementVisible} = require('../commons')
const { HomePage } = require('../home/home.page')
const expect = require('chai').expect

class DocumentationPage {
    constructor() {
        this.documentation = new DocumentationTab()
    }

    async switchTotheDocumentationTab(){
        await this.documentation.documentationTab.click()
        await waitForElementVisible(this.documentation.documentationTitle, 5000, 'Wait documentation title')
        const documentationTabTitleValue = await this.documentation.documentationTitle.getText()
        expect(documentationTabTitleValue).to.include('Documentation')
    }

}

module.exports = DocumentationPage;
