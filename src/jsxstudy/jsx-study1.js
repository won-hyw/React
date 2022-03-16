import React from 'react';  
import ReactDOM from 'react-dom'; 
// 화면에 그려주는 render를 사용하기 위해 가져옴

const name = "김미림";
const element = <h1>Hello {name}</h1>

const div1 = <div>
    {/* boolean(true, false), undefined, null이 반환될 경우 아무것도 그리지 않음 */}
    {true}
    {false}
    {undefined}
    {null}
</div>

const unreadMessages = ["메시지1", "메시지2"];
const div2 = <div>
    <h1>Hello!</h1>

    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력 */}
    {
        unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>
    }

    {/* 삼항연산자 */}
    {
        unreadMessages.length > 0 ?
        <h2>You have {unreadMessages.length} unread messages.</h2> :
        <h2>메시지를 다 읽으셨습니다.</h2>
    }
</div>

function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

let el;
let age = 30;
if(age >= 20) {
    el = <div>성인</div>
} else {
    el = <div>미성년자</div>
}

// 반드시 중괄호를 하나 더 적어주도록 한다.
const myStyle = {color:"red", backgroundColor : "lightblue", fontSize:"50px"}
const h1 = <h1 style = {myStyle}>Hello Style!</h1>

ReactDOM.render(
    <div>{h1}</div>,
    document.getElementById("root")
);