class DocumentationTab{
    constructor(){
        this.documentationTab = $('body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(3) > a')
        this.documentationTitle = $('h1')[1]
    }
}

module.exports = {
    DocumentationTab
}