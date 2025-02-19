
// null 병합 연산자 - ??
// falsy 값 중 null 과 undefined 만 구분함

// falsy 값 종류
// 0, '', false, NaN, null, undefined

// || 연산자는 falsy 값이면 'z'를 가져옴
const a = false;
const test_1 = a || 'z';
console.log(test_1);

// ?? 연산자는 null, undefined 인 경우만 'z'를 가져옴
const b = false;
const test_2 = b ?? 'z';
console.log(test_2);

const c = null;
const test_3 = c ?? 'z';
console.log(test_3);

// **********************************************************

// 옵셔널 체이닝 연산자 - .?
// null, undefined 를 조회할 때 에러 발생하는 것을 막음

const aa = {};
aa.arg1; // 속성이 존재하지 않더라도 에러 발생하지 않음

const bb = null;
try {
    bb.arg1; // bb가 null 이므로 에러 발생
} catch(e) {
    console.log(e.message);
}

// ?. 연산자를 사용하면 에러가 발생하지 않음.
// 속성, 함수, 배열 접근 전부 사용 가능하며
// 대상이 null/undefined 값이면 ?.로 조회한 값은 undefined로 나옴
bb?.arg1;
bb?.func1();
bb?.[0];
console.log(bb?.arg1);
