
// 동기 처리

// fs 모듈의 readFileSync는 동기 메서드
// 각 작업의 순서가 보장됨
const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());
console.log('끝');
