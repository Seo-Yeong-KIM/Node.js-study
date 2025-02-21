
// 비동기 처리

// ** fs 모듈의 대부분 메서드는 'node를 실행하는 콘솔의 위치'를 기준으로 파일의 경로를 지정함.
// 콘솔을 C:\ 에서 실행했다면 readFile(./readme.txt) 의 경로는 C:\readme.txt 가 되는 것.

// fs 모듈의 readFile은 비동기 메서드
// 여러개 실행 시 각 작업의 순서가 보장되지 않음
const fs = require('fs');

console.log('시작');
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');