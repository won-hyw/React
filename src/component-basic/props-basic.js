import React from 'react';  
import ReactDOM from 'react-dom'; 

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}


ReactDOM.render(
    <ComponentWithProps value="Hello" />,
    document.getElementById("root")
);