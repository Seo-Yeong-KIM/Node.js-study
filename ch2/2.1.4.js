
function add1(x, y) {
    return x + y;
}

// 화살표 함수로 축약 가능
const add2 = (x, y) => {
    return x + y;
};

// 함수 내부에 return 문만 있는 경우 {} 생략 가능
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

// 매개변수가 1개인 경우 괄호 생략 가능
const not2 = x => !x;

// **********************************************************

var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
            // console.log(this.name, friend); // 여기서 this를 사용하면 부모 객체(relationship1)가 아닌 undefined를 가리킴.
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend); // 화살표 함수를 사용하면 this가 부모 객체(relationship2)를 가리키게 됨.
        });
    },
};
relationship2.logFriends();
