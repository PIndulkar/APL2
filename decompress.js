// decompressFile.js
const zlib = require('zlib');
const fs = require('fs');

// Decompress a file
const inputFile = 'example.txt.gz'; // Compressed input file
const outputFile = 'decompressed.txt'; // Decompressed output file

const gunzip = zlib.createGunzip();
const input = fs.createReadStream(inputFile);
const output = fs.createWriteStream(outputFile);

input.pipe(gunzip).pipe(output);
