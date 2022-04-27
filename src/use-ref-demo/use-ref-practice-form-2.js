import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

/*
    [제어 컴포넌트 방식(useState)]
    요구 사항
    1. 모든 input 요소에 ref 연결해주기
    2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기
    3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
*/

function Form() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const target = event.target; // 이벤트가 발생한 요소
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // ES6에서 도입된 computed property names 문법 활용
        // https://eloquentcode.com/computed-property-names-in-javascript
        setState({
            ...state,
            // 태그의 name 속성값을 속성키로 사용
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()

        // 3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
        console.log(state.name)
        console.log(state.email)
        console.log(state.password)
    }

    const handleReset = () => {
        // 4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
        setState({ name: '', email: '', password: '' })
    }

    // 1. 모든 input 요소에 ref 연결해주기
    return (
        <>
            <label>
                Name:
                <input name="name" value={state.name} type="text" placeholder="name" onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input name="email" value={state.email} type="text" placeholder="email" onChange={handleInputChange} />
            </label>
            <label>
                Password:
                <input name="password" value={state.password} type="password" placeholder="password" onChange={handleInputChange} />
            </label>

            <hr />

             {/* 2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기 */}
             <button>
                Focus Name Input
            </button>
            <button>
                Focus Email Input
            </button>
            <button>
                Focus Password Input
            </button>

            <hr />

            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))