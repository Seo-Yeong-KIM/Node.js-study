
// buffer와 stream의 성능 비교

const fs = require('fs');

console.log(`before: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);

const readStream = fs.createReadStream('./compare.txt');
const writeStream = fs.createWriteStream('./compare3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log(`stream: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
});
