
// ES6 이전 문법
// 변수와 문자를 같이 출력하기 위해 ''와 +로 합친 문자열을 만들어서 사용해야 했음.

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1);

// **********************************************************

// ES6 문법
// `` 안에 변수명을 넣어 문자열로 바로 사용 가능.
// 참고로 `` 안에 입력한 띄어쓰기, 엔터, 탭, '', "" 도 그대로 표시됨.

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);

const string3 =
    `"출력 테스트" + '${num3}' 
엔터
    탭`;
console.log(string3);