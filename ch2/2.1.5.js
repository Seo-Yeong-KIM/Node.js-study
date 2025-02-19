
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};

// candyMachine의 속성 값을 개별 변수에 할당.
// getCandy라는 변수에 candyMachine.getCandy() 함수를 할당하는 것.
// 이때 새 변수 getCandy에 저장된 getCandy() 함수는 기존 candyMachine과 분리되게 된다. 즉 this를 사용할 수 없다는 것.
// this를 사용하려면 따로 bind 함수를 사용해 객체와 연결해야 한다.
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// **********************************************************

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};

// 구조 분해 할당 문법 사용
// 객체의 속성과 동일한 값을 가진 변수를 만들어줌. const로 명시했으므로 const 변수가 생성.
const { getCandy, status: { count } } = candyMachine;

// count라는 변수가 생겼으므로 출력 가능
console.log(count);

// * 참고
// const 객체는 재할당이 불가능 하다고 했는데, 이것이 객체의 속성값을 바꿀 수 없다는 뜻은 아니다. 속성값은 변경 가능.
// ex) 현재 할당된 candyMachine 을 candyMachine.status.count = 1; 로 바꾸는 것은 가능. 속성값 변경.
// 그런데 candyMachine = {status:{}, getCandy() {}}; 이렇게 재할당 하는 것은 불가능. 안의 속성이 전부 동일하더라도 !

// **********************************************************

// 배열에 들어있는 값을 개별 변수에 할당
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// **********************************************************

// 배열에 들어있는 값을 구조 분해 할당으로 한번에 할당
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array; // 변수명을 지어주지 않은 값은 변수 미생성.
