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
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9');
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

  it('should be able to deal with decimal numbers', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number3')).click();    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.75');
  })

  it('should be able to deal with negative numbers', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-56');
  })

  it('should be able to deal with very large numbers', function () {
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('531441');
  });

  it('should return NaN when trying to divide a number by zero', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('NaN');
});

});
