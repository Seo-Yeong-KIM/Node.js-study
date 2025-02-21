
// buffer와 stream의 성능 비교

const fs = require('fs');

// 작업 시작 전 메모리 사용량
console.log(`before: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);

const data1 = fs.readFileSync('./compare.txt');
fs.writeFileSync('./compare2.txt', data1);

// 작업 직후 메모리 사용량
console.log(`buffer: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);