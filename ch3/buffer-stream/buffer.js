
// 버퍼 클래스

const buffer = Buffer.from('버퍼로 변환'); // 문자열을 버퍼로 변환
console.log('from():', buffer); // 버퍼로 변환되어 출력됨
console.log('length:', buffer.length); // 버퍼의 크기 출력
console.log('toString():', buffer.toString()); // 버퍼를 문자열로 변환

// Buffer.concat(인수)
// 배열에 담긴 버퍼들을 하나로 합침
// 인수에는 배열값만 넣을 수 있으며 배열 안의 값은 Buffer.from()으로 변환된 버퍼 데이터여야 함
// 문자열, 숫자 등 일반 데이터가 포함되어 있으면 타입 에러 남
const array = [Buffer.from('1번 '), Buffer.from('2번 '), Buffer.from('3번')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.concat([Buffer.from('4번 '), '5번']); // type 에러

const array2 = [Buffer.from('6번 '), '7번'];
const buffer4 = Buffer.concat(array2); // type 에러

// Buffer.alloc(인수)
// 인수만큼의 크기를 가진 빈 버퍼를 생성
const buffer5 = Buffer.alloc(5);
console.log('alloc():', buffer5);
