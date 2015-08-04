module.exports = function () {
	var calculator = require('../../lib/calculator');

	var result = 0

	this.When(/^I add "([^"]*)" and "([^"]*)"$/, function (num1, num2, callback) {
	  result = calculator.add(parseInt(num1), parseInt(num2))
	  callback();
	});

	this.When(/^I delete "([^"]*)" and "([^"]*)"$/, function (num1, num2, callback) {
	  result = calculator.delete(parseInt(num1), parseInt(num2))
	  callback();
	});

	this.Then(/^responce should be "([^"]*)"$/, function (expect_result, callback) {
	  if(result == parseInt(expect_result))
	  	callback();
	  else
	    callback.fail("Expected: " + expect_result + " But Got: " + result);
	});
}