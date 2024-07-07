class TestClass {
    constructor() {
        console.log('Call from constructor')
        this.field1 = 'test fieldd 1'
    }

    logConsoleTestClass(){
        console.log(this.field1)
    }
    
}

new TestClass().logConsoleTestClass()