import React from 'react';  
import ReactDOM from 'react-dom'; 

/* 1. s1, s2, s3 값 출력
   2. 조건부 렌더링 필요 (축하합니다 메시지)
   3. 모두 7일 경우 강조 (style에 스타일 객체 전달) */
const SlotMachine = function(props) {
    const { s1, s2, s3 } = props // 비구조화 할당
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 === "7"
    return (
        <div>
            <div>
                {s1} {s2} {s3}
            </div>
            {
                allSame && <p style={allSeven ? {color:"red"} : null}>Congrats!</p>
            }
        </div>
    )
}

ReactDOM.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
    </div>,
    document.getElementById("root")
);