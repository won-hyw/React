import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ClickGame = function(props) {
    const [clickCount, setClickCount] = useState(0)
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })

    useEffect(() => {
        console.log('setInterval');
        const id = setInterval(() => {
            setTimerState(prevState => {
                console.log('from setInterval', id)
                if( prevState.time === 1 ) {
                    console.log('clearInterval (by timeout)')
                    clearInterval(id)
                    return { timeout: true, time: prevState.time - 1}
                } else {
                    return { ...prevState, time: prevState.time - 1 }
                }
            })
        }, 1000)
        return () => {
            console.log('clearInterval (by unmount)', id)
            clearInterval(id)
        }
    }, [])

    const style = {
        background : "dodgerblue", 
        width : "80px", 
        height : "80px", 
        border : "0px", 
        borderRadius : "50%", 
        color : "white", 
        fontWeight : "bold", 
        fontSize : "24px",
        cursor : "pointer"
    }

    if (timerState.timeout) {
        style.background = "gray"
    }

    return (
        <div>
            {timerState.timeout ? <h2>게임 끝</h2> : <h2>남은 시간 : {timerState.time}</h2>}
            <h2>클릭 횟수 : {clickCount}</h2>
            {
                timerState.timeout ? null :
                <button style = {style} onClick={() => { if(!timerState.timeout) { setClickCount(prev => prev + 1) }}}>클릭</button>
            }

            
        </div>
    )
}

ReactDOM.render(
    <ClickGame time={5} />
    , document.getElementById("root")
);