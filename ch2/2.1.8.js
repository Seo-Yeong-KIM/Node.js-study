
// 기존 promise 함수를 async와 await을 사용한 문법으로 변경

const findAndSaveUser = async (Users) => {
    try {
        // await을 사용하면 return 값이 들어올때까지 대기하므로,
        // 아래 코드는 각 줄의 실행이 끝나야 다음 줄로 넘어감.
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
    } catch (error) {
        console.error(error);
    }
};

// **********************************************************

// for await of 으로 promise 배열 순회

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();

// **********************************************************

// async 함수의 return 값은 항상 promise로 감싸서 반환됨.
async function findAndSaveUser(Users) {
    // 내부에 void 형식, 혹은 resolve() 로 작성한다면 undefined가 반환되는데,
    // 최종적으로 promise로 감싸진 undefined 값이 return 되는 것.
}

// return 값이 promise 이므로 .then 사용 가능
findAndSaveUser().then(() => {
});

async function other() {
    // 여기서 result는 promise 함수가 아님.
    // promise 함수의 실행이 끝날때까지 await(대기)할 뿐
    // findAndSaveuser()에서 return 되는 값을 받아서 저장함.
    const result = await findAndSaveUser();
}
