function Calculator(){}

Calculator.prototype.add = function(a,b){
	return a + b;
}

Calculator.prototype.delete = function(a, b) {
	return a - b;
}

var calculator = new Calculator();

module.exports = calculator;