import React, {useRef} from 'react'
import login_Page_1 from './../image/login_Page_1.jpg'
import './../CSS/LoginPage.css'
import backImage from './../Components/backgroundCSSForSeprateDiv.js';

export default function LoginAsHospital() {
    const buttonRef = useRef();
    function checkInput(){
        const nameValue = document.getElementById("name").value;
        const passValue = document.getElementById("password").value;
        if(nameValue === "" || passValue === "")
            buttonRef.current.disabled = true;
    }

    
    return (
        <>
        <div  className= "LoginAsHospital" style = {backImage}></div>
            <div className="base-container">
            <div className="login-header">
                <h2>Sign In</h2>
            </div>
            <form>
            <div className="login-container">
                <label for="name">Hospital Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="Enter Hospital Name"/><br></br>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br>
            </div>
            <button type="submit" id="submit" ref={buttonRef} onClick={checkInput}>Submit</button>
            </form>
            </div>
        </>
    )
}
