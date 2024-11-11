const async = require('async'); 

async.parallel([ 
	(callback) => { 
		setTimeout(() => { 
			console.log('This is first function'); 
			callback(null, 4); 
		}, 500); 
	}, 
	(callback) => { 
		console.log('This is second function'); 
		callback(null, 2); 
	} 
], (err, results) => { 
	if (err) console.error(err); 
	console.log(results); 
}); 
