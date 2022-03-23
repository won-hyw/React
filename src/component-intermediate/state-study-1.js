import React, { useState } from 'react';  
import ReactDOM from 'react-dom'; 

function Counter(props) {
    // import 문에 useState가 추가되지 않았다면 React.useState(0)이라 작성해도 된다.
    // 배열의 비구조화 할당 
    // useState()에 들어있는 0은 기본값이다. - [ 상태값, setter 함수 ] 전달
    const [ count, setCount ] = useState(0)
}

ReactDOM.render(
    <Counter/>
    , document.getElementById("root")
);