class DocumentationTab{
    constructor(){
        this.documentationTab = $('body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a')
        this.documentationTitle = $('body > div > div:nth-child(2) > div.col-md-9.col-sm-9 > h1:nth-child(1)')
    }
}

module.exports = {
    DocumentationTab
}