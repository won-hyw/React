import React from 'react';  
import ReactDOM from 'react-dom'; 

// 배열 비구조화 할당
const arr = [100, 200]
// const v1 = arr[0]
// const v2 = arr[1]
const [v1, v2] = arr    // v1 = 100, v2 = 200
const [v3] = arr        // v3 = 100

// 객체 비구조화 할당
// const user = {name : "John", age : 20}
// const name = "Sally"                    
// const {name : n, age} = user 
// 상수(변수) 이름과 속성 이름이 일치하는 것을 가져와서 대입한다.

function f1({name, age}) {
    console.log(name, age)
}

function f2(user) {
    const name = user.name
    const age = user.age
    console.log(name, age)
}

// f1(user)
// f2(user)

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

function Greeting(props) {
    return <h1>Hello, {props.name}</h1>
}

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
    <div className='person' style={highlight ? {color: 'red', background: 'yellow'} : null}>
    <h1>Profile</h1>
    <img src={profile} />
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>gender : {gender}</p>
    </div>
    )
}

/* 힌트
props.name, props.age와 같이 개별적 값을 접근하는게 아니고
props.person을 통해 객체 접근 가능, 그리고 그 객체에 모든 정보가 포함 */
const PersonProfile2 = function(props) {
    const { name, age, gender, profile } = props.person
    // props.person을 비구조화 할당
    return (
    <div className='person' style={props.highlight ? {color: 'red', background: 'yellow'} : null}>
    <h1>Profile</h1>
    <img src={profile} />
    <p>name : {name}</p>
    <p>age : {age}</p>
    <p>gender : {gender}</p>
    </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}
const { name, gender, ...rest } = anotherPerson
console.log(rest) // { age: 28, profile: '...' }

ReactDOM.render(
    <div>
        <PersonProfile name='John' age={35} gender='male'
        profile='https://randomuser.me/api/portraits/men/75.jpg' highlight />
        {/* hightlight 속성에 값을 주지 않았기 때문에 undefined 값이 들어가게 된다.
            undefined는 boolean으로 평가하면 False로 처리된다. */}
        <PersonProfile {...anotherPerson} />
        <PersonProfile name='Ken' gender='male' age={32} {...rest} />
        {/* age={32}라고 주었지만, rest 안에도 age 값이 작성되어 있다.
        이럴 때에는 우측에 있는 rest가 가지고 있는 age 값이 우선권을 가지게 된다. */}
        <PersonProfile2 person={anotherPerson} highlight />
    </div>,
    document.getElementById("root")
);