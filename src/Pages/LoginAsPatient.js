import React from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/LoginPage.css'

export default function LoginAsPatient() {

    function checkInput(){
        const nameValue = document.getElementById("name").value.trim();
        const passValue = document.getElementById("password").value.trim();
        const submit = document.getElementById("submit");
        if(nameValue === "")
            alert("Please Enter a valid name");
        if(passValue === "")
            alert("Please Enter a valid password");
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
                <label for="name">Patient Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="Enter Patient Name"/><br></br><br></br>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br><br></br>
            </div>
            <button type="submit" id="submit" onClick={checkInput}>Submit</button>
            </form>
        </div>
        </>
    )
}
