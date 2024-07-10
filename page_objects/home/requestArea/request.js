
class RequestRegion{
    constructor(){
        this.homeTab = $('body > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(1) > a')
        this.endpointInput = $('#interactive')
        this.requestButton = $('button.btn.btn-primary')
        this.homeTabTitle = $('h1[class="center"]')
    }
}

module.exports = {
    RequestRegion
}