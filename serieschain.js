const async = require('async'); 

async.series([ 
	(callback) => { 
		setTimeout(() => { 
			console.log('This is the first function'); 
			callback(null, 4); 
		}, 500); 
	}, 
	(callback) => { 
		console.log('This is the second function'); 
		callback(null, 2); 
	} 
], (err, results) => { 
	if (err) console.error(err); 
	console.log(results); 
}); 
