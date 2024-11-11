// Include 'dns' module and create its object
const dns = require('dns');

const website = 'geeksforgeeks.org';
// Call to lookup function of dns
dns.lookup(website, (err, address, family) => {
    console.log('address of %s is %j family: IPv%s',
        website, address, family);
});

// Execute using $ node <filename>;
