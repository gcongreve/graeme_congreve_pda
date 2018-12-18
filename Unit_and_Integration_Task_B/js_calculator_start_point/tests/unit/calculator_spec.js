var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add numbers', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    actual = calculator.runningTotal;
    assert.equal(actual, 5);
  })

  it('it should be able to subtract numbers', function() {
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.subtract(4)
    actual = calculator.runningTotal;
    assert.equal(actual, 3)
  })

});
