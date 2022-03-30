import React, { useState } from 'react';  
import ReactDOM from 'react-dom'; 

function Counter(props) {
    // 배열의 비구조화 할당 
    // useState()에 들어있는 0은 기본값이다. - [ 상태값, setter 함수 ] 전달
    // import 문에 useState가 추가되지 않았다면 React.useState(0)이라 작성해도 된다.
    const [ count, setCount ] = useState(0)

    return ( 
        <div>
            <h1>{count}</h1>
            {/* setCount()를 호출하면은 Counter라고 하는 컴포넌트를 다시 그리게 된다(re-render) */}
            <button onClick={() => setCount(count + 1)} style={{marginRight:"10px"}}>증가</button>
            <button onClick={() => setCount(count - 1)}>감소</button>
        </div>
    )
}

const MultipleStateComponent = function(props) {
    // useState 함수를 원하는 만큼 호출하여 여러 상태값을 관리할 수 있음
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>증가</button>
            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")}>a 추가</button>
        </div>
    )
}

const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({value1: "hello", value2: 1000})

    return (
        <div>
            <button onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    // state는 불변이고, 새 객체를 만들어서 새롭게 값을 갱신해준다.
                    setState({ ...state, value1: "bye" } )
                } else {
                    setState({ ...state, value1: "hello" } )
                }
                }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState({ ...state, value2: state.value2 * 2 } )
                }}>{state.value2}</button>
        </div>
    )
}

function CounterComponent(props) {
    const [ count, setCount ] = useState(0)

    return ( 
        <div>
            <h1>{count}</h1>
            {/* prev는 파라미터 값.
                가급적이면은 상태를 바꿀 때 이전의 상태에 기반해서 값을 변경하는 것이 좋다. */}
            <button onClick={() => setCount(prev => prev + 1)} style={{marginRight:"10px"}}>증가</button>
            <button onClick={() => setCount(function (prev) { return prev - 1 })}>감소</button>
        </div>
    )
}

ReactDOM.render(
    <CounterComponent/>
    , document.getElementById("root")
);