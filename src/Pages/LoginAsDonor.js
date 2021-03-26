import React, {useRef} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/LoginPage.css'

export default function LoginAsDonor() {
    const buttonRef = useRef();
    function checkInput(){
        const nameValue = document.getElementById("name").value;
        const passValue = document.getElementById("password").value;
        if(nameValue === "" || passValue === "")
            buttonRef.current.disabled = true;
    }

    return (
        <>
        <div style = {backImage}></div>
        <div className="base-container">
            <div className="login-header">
                <h2>Sign In</h2>
            </div>
            <form>
            <div className="login-container">
                <label for="name">Donor Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="Enter Donor Name"/><br></br><br></br>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br><br></br>
            </div>
            <button type="submit" id="submit" ref={buttonRef} onClick={checkInput}>Submit</button>
            </form>
        </div>
        </>
    )
}
