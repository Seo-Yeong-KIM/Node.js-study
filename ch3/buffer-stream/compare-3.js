
// buffer와 stream의 성능 비교

const fs = require('fs');

// 작업 시작 전 메모리 사용량 (약 28.52 MB)
console.log(`before: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);

const readStream = fs.createReadStream('./compare.txt');
const writeStream = fs.createWriteStream('./compare3.txt');
readStream.pipe(writeStream);

// 작업 직후 메모리 사용량 (약 45.00 MB)
readStream.on('end', () => {
    console.log(`stream: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
});
