var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('it should be able to add numbers', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.equal(actual, 5);
  });

  it('it should be able to subtract numbers', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    actual = calculator.runningTotal;
    assert.equal(actual, 3)
  });

  it('it should be able to muliply numbers', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.multiply(5);
    actual = calculator.runningTotal;
    assert.equal(actual, 15);
  });

  it('it should be able to divide numbers', function () {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });

   it('it should concatenate multiple number button clicks', function () {
    calculator.numberClick(1);
    calculator.numberClick(1);
    actual = calculator.runningTotal;
    assert.equal(actual, 11);
   });

   it('it should chain multiple operations together', function () {
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    actual = calculator.runningTotal;
    assert.equal(actual, 2);
   });

   it('it should clear the running total without affecting the calculation', function () {
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(1);
    actual = calculator.runningTotal;
    assert.equal(actual, 1);
   });



});
