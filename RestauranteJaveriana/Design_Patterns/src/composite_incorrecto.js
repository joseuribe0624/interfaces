function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    this.arrayElements = [];
   /* this.compositeProto = function(){
        var objectComposite = {
            add: function(product){
            arrayElements.push(product);
            },
            remove: function (product){
                arrayElements.split(0, arrayElements.length);
                arrayElements.add(product);
                return arrayElements;
            }
        }
        return objectComposite
    } */
}


shoppingCar.prototype = {
    add: function(product){
        this.arrayElements.push(product);
        console.log(this.arrayElements)
    },
    remove: function (product){
        this.arrayElements.splice(0, this.arrayElements.length);
        this.arrayElements.push(product);
    }
}


function buildShoppingCar(type,product){//tipo de producto, producto){
    var car = new shoppingCar(type); 
    var resultCar

    for (var i = product.length - 1; i >= 0; i--){
        resultCar = car.add(product[i]);
    }
    //var resultCar = car.compositeProto().add(product)
    return resultCar;

   
}

