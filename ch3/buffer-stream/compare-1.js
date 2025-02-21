
// buffer와 stream의 성능 비교

const fs = require('fs');

// 성능 비교용으로 용량이 큰 파일 생성
const file = fs.createWriteStream('./compare.txt'); // 약 100MB

for (let i = 0; i <= 3000000; i++) {
    file.write('성능 비교용 파일 data 출력');
}
file.end();
