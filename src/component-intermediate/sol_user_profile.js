import React, { useState } from 'react';  
import ReactDOM from 'react-dom';

function UserProfile(props) {
    const [userName, setUserName] = useState("아무개")
    const [userAge, setUserAge] = useState(0)
    const [emailAddress, setEmailAddress] = useState(null)
   
    return (
        <div>
            {userName} {userAge} {emailAddress}
        </div>
    )

}
 
ReactDOM.render(
    <UserProfile/>,
    document.getElementById("root")
);
