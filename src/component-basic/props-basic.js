import React from 'react';  
import ReactDOM from 'react-dom'; 

// 배열 비구조화 할당
const arr = [100, 200]
// const v1 = arr[0]
// const v2 = arr[1]
const [v1, v2] = arr    // v1 = 100, v2 = 200
const [v3] = arr        // v3 = 100

// 객체 비구조화 할당
const user = {name : "John", age : 20}
const name = "Sally"                    
const {name : n, age} = user // 상수(변수) 이름과 속성 이름이 일치하는 것을 가져와서 대입한다.

function f1({name, age}) {
    console.log(name, age)
}

function f2(user) {
    const name = user.name
    const age = user.age
    console.log(name, age)
}

f1(user)
f2(user)

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

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

ReactDOM.render(
    <div>
        <PersonProfile name='John' age={35} gender='male'
        profile='https://randomuser.me/api/portraits/men/75.jpg' highlight />
        {/* hightlight 속성에 값을 주지 않았기 때문에 undefined 값이 들어가게 된다.
            undefined는 boolean으로 평가하면 False로 처리된다. */}
        <PersonProfile {...anotherPerson} />
    </div>,
    document.getElementById("root")
);