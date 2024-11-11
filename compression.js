// compressFile.js
const zlib = require('zlib');
const fs = require('fs');

// Compress a file
const inputFile = 'example.txt'; // Input file
const outputFile = 'example.txt.gz'; // Output file

const gzip = zlib.createGzip();
const input = fs.createReadStream(inputFile);
const output = fs.createWriteStream(outputFile);

input.pipe(gzip).pipe(output);

output.on('finish', () => {
    console.log(`File compressed to ${outputFile}`);
});
