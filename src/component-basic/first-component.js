import React from 'react';  
import ReactDOM from 'react-dom'; 

// 함수형 컴포넌트 : return jsx
function FirstComponet() {
    return <div>first component</div>
}

function HelloWorld() {
    return <h1>Hello, World!</h1>
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);