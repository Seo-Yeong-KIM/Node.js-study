
// Stream으로 쓰기

const fs = require('fs');

// createWriteStream(파일명);
const writeStream = fs.createWriteStream('./stream-write.txt');
writeStream.on('finish', () => { // on() 에 이벤트 리스너로 'finish'를 붙임. 파일 쓰기가 종료되면 호출
    console.log('파일 쓰기 완료');
});

// wirte() 에 파일 내용 작성
writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다.');

// end() 로 종료를 알림. 이때 finish 이벤트가 발생
writeStream.end();
