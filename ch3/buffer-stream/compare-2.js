
// buffer와 stream의 성능 비교

const fs = require('fs');

// 작업 시작 전 메모리 사용량 (약 28.57 MB)
console.log(`before: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);

const data1 = fs.readFileSync('./compare.txt');
fs.writeFileSync('./compare2.txt', data1);

// 작업 직후 메모리 사용량 (약 130.41 MB)
console.log(`buffer: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
// ** 이때 작업이 끝났음에도 메모리 사용량이 높게 측정되는 이유
// : 작업이 끝난 즉시 사용된 메모리가 해제되지 않고, 메모리 해제하는 데 시간이 필요하기 때문.

// 메모리 해제 시간 확인
// 현재 테스트 시 5-10ms 정도 소요
setTimeout(function() {
    console.log(`done: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB`);
}, 5);