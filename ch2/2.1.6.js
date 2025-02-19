
// JS의 프로토타입
// 프로토타입은 모든 객체의 최상위 부모인 객체를 말함. JS에서 모든 객체는 prototype 객체를 상속받음.
// console 로 객체를 떠보면 [Prototype]윈도우11 도커 설치 이라는 것이 보임. 이것이 prototype 객체에서 상속받은 속성 값들.
// 기본적으로 filter, foreach, split.. 등등의 메서드를 사용할 수 있는 것도 이 메서드들이 prototype이 가진 함수이기 때문.

// Human 이라는 생성자 함수를 만듦
// 생성자 함수로 new 객체(); 를 만들 수 있음.
var Human = function(type) {
    this.type = type || 'human'; // 이때 || 는 type 값이 제대로 들어오지 않으면 'human' 으로 세팅하라는 뜻. 즉 기본값을 설정.
};

// 정적 메서드 추가. static 메서드라고 이해하면 될 듯.
// 클래스명으로만 호출 가능. 인스턴스에서는 호출 불가능.
Human.isHuman = function(human) {
    return human instanceof Human; // instanceof는 객체가 클래스, 혹은 상속받는 클래스에 속하는지 확인함. new 클래스명(); 으로 생성되었는지 확인하는 것.
}

// ptorotype에 메서드를 추가한 이유 : Human으로 만든 모든 인스턴스에서 breathe 메서드를 사용하기 위함.
// Human.breathe로 메서드를 추가하면 static 메서드로 만들어져서 인스턴스에서는 사용 불가능함 !
Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};

// Zero 라는 생성자 함수를 만듦
var Zero = function(type, firstName, lastName) {
    // 함수.apply(this로 지정될 객체, 인수)
    // apply는 함수에서만 사용 가능. var/const 등은 지정 불가능.
    // 함수에서 this를 사용하지 않는다면 this로 지정될 객체는 생략 가능.
    Human.apply(this, arguments); // arguments는 함수에 전달된 모든 인수를 담고 있음
    this.firstName = firstName;
    this.lastName = lastName;
};

// Zero의 프로토타입을 Human의 프로토타입을 상속받아 객체를 생성
// 이렇게 생성된 객체는 Human의 프로토타입에 추가된 breathe 메서드를 사용 가능
Zero.prototype = Object.create(Human.prototype);
// Human의 프로토타입을 상속받았으므로 prototype.constructor가 가리키는 것이 Human이 됨. 이를 Zero로 재설정함.
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');

// Zero 클래스로 만들어진 인스턴스 oldZero 가 Human을 상속받는지 확인
Human.isHuman(oldZero); // true

// **********************************************************

// 클래스 문법 사용
// 클래스 문법으로 바꾸더라도 JS는 프로토타입 기반으로 동작 !

class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert('h-a-a-a-m');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); // true
