var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();

var assert = require('assert');

describe('Check labels', function() {
      it('should return SPEAKERS for speakersTxt', async () => {
        await driver.get('http://advantageonlineshopping.com');
        await driver.sleep(10000);
        await driver.wait(until.elementLocated(By.id('speakersTxt')));
        const label = await driver.findElement(By.id('speakersTxt'));
        label.getText().then(function(text) {
          assert.equal( "SPEAKERS", text );
        });
      });

      it('should return TABLETS for tabletsTxt', async () => {
        await driver.get('http://advantageonlineshopping.com');
        await driver.sleep(10000);
        await driver.wait(until.elementLocated(By.id('tabletsTxt')));
        const label = await driver.findElement(By.id('tabletsTxt'));
        label.getText().then(function(text) {
          assert.equal( "TABLETS", text );
        });
      });

      after(async () => driver.quit());
});


//      it('should return TABLETS for tabletsTxt', function() {
//        assert.equal( getLabelText("tabletsTxt"), "TABLETS");
//      })
//});
