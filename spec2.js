// describe is Test Suite -- means a feature to be tested


// describe takes 2 parameters , name of teh senario and a function
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(9000);
        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
    
        element(by.id('gobutton')).click();
        browser.sleep(3000);
        expect(element(by.binding('latest')).getText()).
            toEqual('3'); // This is wrong!
      });
    });