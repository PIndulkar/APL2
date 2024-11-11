const os = require('os');

// Get the OS architecture
console.log(`Architecture: ${os.arch()}`);

// Get the OS platform
console.log(`Platform: ${os.platform()}`);

// Get the OS release
console.log(`Release: ${os.release()}`);

// Get the hostname
console.log(`Hostname: ${os.hostname()}`);

// Get total and free memory
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);

