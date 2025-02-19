
// Promise 함수

const condition = true;
const promise = new Promise((resolve, reject) => {
    // resolve 값이 성공, reject 값이 실패
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        // 성공 시 실행
        console.log(message);
    })
    .catch((error) => {
        // 실패 시 실행
        console.error(error);
    })
    .finally(() => {
        // 성공/실패 상관없이 항상 실행
        console.log('finally');
    });

// **********************************************************

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            // new Promise로 return 하면 다음 then 에서 이전 promise의 return 값(resolve 시 넘기는 값)을 매개변수로 받을 수 있음.
            resolve(message);
        });
    })
    .then((message2) => {
        // 이전 promise의 return 값 message를 message2로 받아옴.
        // 이 message2를 다음 promise의 매개변수로 넘길 수 있음.
        console.log(`message2 ${message2}`);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(`message3 ${message3}`);
    })
    .catch((error) => {
        console.error(error);
    });

// **********************************************************

// n중 중첩된 콜백 함수

function findAndSaveUser(Users) {
    // 첫번째 콜백
    Users.findOne({}, (err, user) => { // 여기 findOne({}) 은 mongoDB 문법
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        // 두번째 콜백
        user.save((err) => {
            if (err) {
                return console.error(err); // 콜백함수마다 error 처리를 해줘야 함.
            }
            // 세번째 콜백
            Users.findOne({ gender: 'm' }, (err, user) => {
            });
        });
    });
}

// **********************************************************

// 중첩된 콜백 함수를 promise로 변환

function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save(); // 이때 save() 함수 내부에 new Promise가 있다고 가정. 그래야 return 값을 다음 then으로 넘길 수 있음.
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' }); // 여기도 findOne() 함수 내부에 new Promise가 있다고 가정.
        })
        .then((user) => {
        })
        .catch(err => {
            console.error(err);
        });
}


// **********************************************************

// Promise.all 로 여러 개의 promise를 실행
// Promise.all은 한 개의 promise라도 reject가 나면 catch 문으로 이동. 그러나 어떤 promise에서 reject가 났는지 확인 불가.

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// **********************************************************

// Promise.allSettled

const promise3 = Promise.resolve('성공1');
const promise4 = Promise.reject('실패1');
const promise5 = Promise.resolve('성공2');
Promise.allSettled([promise3, promise4, promise5])
    .then((result) => {
        // result 값에 개별 promise의 return 값이 {status, value/reason} 값으로 들어옴.
        // 성공 시 value, 실패 시 reason 값으로 들어오므로 reject 의 원인은 reason 값으로 확인하면 됨.
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
