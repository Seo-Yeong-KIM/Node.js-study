
// Stream으로 읽기

const fs = require('fs');

// createReadStream() 으로 스트림 생성.
// highWaterMark 옵션으로 버퍼의 크기를 정할 수 있음(바이트(B) 단위). 기본 값은 64KB
const readStream = fs.createReadStream('./stream-read.txt', { highWaterMark: 16 }); // ** 파일 경로 탐색 시 node 명령어 실행 위치를 기준으로 함
const data = [];

// chuck 란 버퍼가 나뉘어서 전송되는 단위.

// readStream은 이벤트 리스너를 붙여서 사용.
// on() 에 'data', 'end', 'error' 등을 명시해서 사용하면 됨
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

// 데이터 전송이 완료되면 실행
readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
});
