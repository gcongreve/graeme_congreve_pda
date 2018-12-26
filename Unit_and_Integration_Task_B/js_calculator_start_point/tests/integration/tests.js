var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to concatenate multiple number button clicks', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number7')).click();
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('79');
  })

  it('should be able to chain multiple operations together', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('10');
  })

  it('should be able to clear the running total without affecting the calculation', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();    element(by.css('#operator_add')).click();
    element(by.css('#number9')).click();
    element(by.css('#clear')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
  })

});
