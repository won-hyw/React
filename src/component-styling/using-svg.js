import React from 'react'
import ReactDOM from 'react-dom'
import HappyFace from './happy.svg'
import { ReactComponent as HappyFaceComponent } from './happy.svg'

const App = function(props) {
    return (
        <div>
            {/* 이미지의 src 속성으로 불러온 값을 전달 */}
            <img src={HappyFace} style={ { width: "200px" } } /><br />
            {/* 컴포넌트처럼 사용 가능 (내부적으로 컴포넌트 내용을 svg 태그로 교체) */}
            <HappyFaceComponent style={ { width: "200px" } } />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))