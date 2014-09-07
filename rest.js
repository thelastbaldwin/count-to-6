module.exports = function average(...args){

	var total = 0;
	args.forEach(function(value){
		total += value;
	});

	return total/args.length;
}