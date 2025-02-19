
// Map
// Map은 key(=속성)들의 순서가 보장됨

const map = new Map();

// set(key, value)
map.set('a', 'b');

// 문자열이 아니어도 key 값으로 사용 가능
map.set(1, 'c');

// 객체도 key 값으로 사용 가능
const key_obj = {};
map.set(key_obj, 'd');
map.get(key_obj);

// 반복문, forEach 문 사용 가능
// for of 문에서는 매개변수를 [key/value]의 순서로 받아옴
for(const [key, value] of map) {
    console.log(key, value);
}
// forEach 문에서는 반대 순서인 [value/key]로 받아옴
map.forEach((value, key) => {
    console.log(key, value)
});

// Map이 가진 속성 갯수
map.size;
console.log(map.size);

// key 값 존재 여부 확인.
// 해당 key의 value 값이 없더라도 true로 나옴. key 값은 존재하기 때문.
map.set('key_1');
console.log(map.has('key_1')); // true
console.log(map.has('key_2')); // false

// 개별 key 삭제
map.delete('key_1');
console.log(map.size);

// 모든 key 삭제
map.clear();
console.log(map.size);

// **********************************************************

// Set
// Set은 중복 값을 허용하지 않음

const set = new Set();
set.add(true);
set.add('1');
set.add(1);
set.add('1'); // 중복이므로 저장되지 않음

// 요소 존재 여부 확인
set.has('1');

// 개별 요소 삭제
set.delete('1');

// 모든 요소 삭제
set.clear();

// **********************************************************

// Set으로 배열의 중복 요소 삭제
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6];

const set1 = new Set(arr); // 배열로 새로운 set 생성. 이때 중복 제거
const arr2 = Array.from(set1); // Set을 다시 배열로 바꿈
console.log(arr2);
