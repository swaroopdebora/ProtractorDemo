const { browser } = require("protractor");

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	directConnect: true,
	specs : [ 'spec2.js' ],
	onPrepare: function() {
		browser.driver.manage().window().maximize();
		jasmine.getEnv().addReporter(
		  new Jasmine2HtmlReporter({
			savePath: 'target/screenshots'
		  })
		);
	 }
	

};

