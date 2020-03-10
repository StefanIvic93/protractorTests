exports.config = {
  onPrepare: function(){
    browser.ignoreSynchronization = true;
  },
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['CafeTest.js'],


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    }

};
