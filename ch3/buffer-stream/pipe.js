
// read 스트림과 wirte 스트림을 연결하여 pipe 만들기

const fs = require('fs');

const readStream = fs.createReadStream('pipe-read.txt');
const writeStream = fs.createWriteStream('pipe-wirte.txt');

// read 스트림에 올라간 데이터를 wirte 스트림으로 전송
// 따로 이벤트 리스너나 wirte 메서드를 사용하지 않아도 파일 생성.
readStream.pipe(writeStream);

// readStream.pipe().pipe() 로 여러 파이프를 연결하는 것도 가능.