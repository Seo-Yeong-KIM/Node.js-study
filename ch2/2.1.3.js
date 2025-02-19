
// ES6 이전 문법
// 객체 리터럴에 '속성명 : 변수명' 으로 명시해야함. (속성 = 프로퍼티)
// 객체의 속성명을 동적으로 사용하고 싶으면 객체 리터럴 바깥에서 지정 후 객체에 추가해야 했음.

var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode
};

// 속성명을 변수로 지정
oldObject[es + 6] = 'Fantastic';
var addProperty = 'property1';
oldObject[addProperty] = 'Add Property';

oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); // Fantastic

// **********************************************************

// ES6 문법
// 객체 리터럴 사용 시 간편해진 문법 제공

const sayNode = function() {
    console.log('Node');
};
const es = 'ES';
const newObject = {
    // '속성명 : 변수명' 으로 정의할 필요 없이 더 축약해서 명시 가능
    sayJS() {
        console.log('JS');
    },
    sayNode, // 속성명과 변수명이 같으면 한번만 명시 가능
    [es + 6]: 'Fantastic', // 객체 리터럴 내부에서 속성명 동적으로 생성 가능
    [es]: 'Add Property'
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic
console.log(newObject.ES); // Add Property

// **********************************************************

// 속성명과 변수명이 같다면 한번만 명시 가능

{ name: name, age: age } // ES6 이전 문법
{ name, age } // ES6 문법
