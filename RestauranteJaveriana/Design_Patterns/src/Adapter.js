function calculatePriceDolar(){
	this.newCalculate = function(originalPrice){
		var dolar = 0.00033
		var conversion = originalPrice * dolar
		return conversion
	}
}

function calculatePaellaPrice(price){
	var calculate = new calculatePriceDolar();
	return calculate.newCalculate(price)
}
