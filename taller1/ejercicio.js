function age(){
	var age = prompt()
	days= age* 365
	console.log(days)
	var result = pairOr(days)
	console.log(result)
	return result
}

function pairOr(days){
	number = []
	if ((days % 2) == 0){
		var daysString = days.toString()
		//console.log(daysString)
		return daysString
	}

	else{
		number.push(days)
		//console.log(number)
		return number
	}

}