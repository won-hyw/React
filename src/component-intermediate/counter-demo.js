import React, { useState } from 'react';  
import ReactDOM from 'react-dom'; 

const Counter = function (porps) {
    const [ count, setCount ] = useState(0)
    const increase = () => setCount(prev => prev + 1)
    const decrease = () => setCount(prev => prev - 1)
    // 특정숫자값(amount)을 파라미터로 전달받아 count에 더해주는 add 함수정의
    const add = (amount) => setCount(prev => prev + amount)

    return (
        <div>
            <h2>{count}</h2>
            {/* onClick으로 전달되는 값은 함수가 전달되어야 한다. 
                add(값)의 경우는 함수가 아닌 결과를 호출하는 것이기 때문에 무한 렌더링에 걸리게 된다. */}
            <button onClick={increase} style={{marginRight:"10px"}}>+1</button>
            <button onClick={decrease} style={{marginRight:"10px"}}>-1</button>
            <button onClick={() => add(5)} style={{marginRight:"10px"}}>+5</button>
            <button onClick={() => add(10)}>+10</button>
        </div>
    )
}

ReactDOM.render(
    <Counter/>
    , document.getElementById("root")
);