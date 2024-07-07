
const { browser } = require("protractor");

const conf = {
    //first.spec.js
    specs: ['./specs/**/*.spec.js'],
    framework: 'mocha',
    mochaOpts: {
        timeout: 20 * 1000
    },
    chromeDriver: '/Users/vb/Js_Training/driver/chromedriver',

    useAllAngular2AppRoots: true,
  };
  
  exports.config = conf