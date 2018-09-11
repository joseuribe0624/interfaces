function productPaella(name){
	this.name = name;
}


function decoratedNameProduct(roduct,description){
	this.product = product
	this.description = description
	let allName = this.product.name + " " + this.description;

	return allName
}
function executeDecorator(item){
	var itemDecorate =[]
	for(var i=0; i < item.length; i++){
		var productName = new productPaella(item[i])
		var decorated = new decoratedNameProduct(productName, "La mejor paella de la universidad ")
		itemDecorate.push(decorated)
	}
	return itemDecorate
}