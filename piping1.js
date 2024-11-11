const fs = require('fs');

const readableStream = fs.createReadStream('source.txt');
const writableStream = fs.createWriteStream('destination.txt');

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
  console.log('Data has been written successfully.');
});