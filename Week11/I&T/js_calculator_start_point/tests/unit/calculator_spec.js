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

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    assert.equal(4, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    assert.equal(12, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    assert.equal(3, calculator.runningTotal);
  })

  it('can click a number', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(13, calculator.runningTotal);
    assert.equal(true, calculator.newTotal);
  })

  it('can click operator', function(){
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("=")
    calculator.operatorClick("+");
    calculator.operatorClick("=");
    assert.equal(16, calculator.runningTotal);
    assert.equal(true, calculator.newTotal);
  })

  it('can clear operator', function(){
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
