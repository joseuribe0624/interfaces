/*Esta funcion permite obtener el valor del select de html(onchange)*/

menu = ["vegetariana","pollo y carne", "mariscos"]

function getValueType (paellaType){

	this.paellaType = paellaType;
}

function buildPaella(){

	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	var base = productoBase();
	console.log(paellaProduct);
	var arrayPaella = []
	arrayPaella.push(paellaProduct)

	var micarrito = new buildShoppingCar(factory.type, arrayPaella)
	console.log("esto es el carrito=",micarrito)
	//console.log("tipos=", (factory.type))
	//console.log(base)
	//console.log(executeSingleton())
	console.log(getValuePrice())

	var decorator = new executeDecorator(menuItems)
	console.log("decorador=",decorator )
}

function getValueCoin(coin){
	this.currency = coin
	//var val = getValuePrice(this)
	var Dollars = calculatePaellaPrice(paellaPrice.value)
	console.log("dollar price=", Dollars)
	
}

function getValuePrice(paellaPrice){
	this.paellaPrice = paellaPrice
	let valPaella = paellaPrice.value
	var paellaPriceIva = valPaella - (valPaella*0.19) 
	console.log(paellaPriceIva)
	return valPaella
	
}



