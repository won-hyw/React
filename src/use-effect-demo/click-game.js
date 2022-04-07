import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ClickGame = function(props) {
    const [timerState, setTimerState] = useState({
        time: props.time,
        timeout: false
    })
    const [count, setCount] = useState(0)

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

    return (
        <div>
            {timerState.timeout ? <h2>timeout</h2> : <h2>{timerState.time}</h2>}
            <h2>클릭횟수 : {count}</h2>
            {
                timerState.timeout ? <button style={{outline:"none", border:0, borderRadius:"50%", width:"50px", height:"50px", color:"white", background:"gray", cursor:"not-allowed"}} disabled>클릭</button> 
                : <button style={{outline:"none", border:0, borderRadius:"50%", width:"50px", height:"50px", cursor:"pointer"}}  onClick={() => setCount(prev => prev + 1)}>클릭</button>
            }
            
        </div>
    )
}



const App = function(props) {
    return (
        <div>
            {
                <div>
                    <ClickGame time={10} />
                </div>
            }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))