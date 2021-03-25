import React from 'react'
import login_Page_1 from './../image/login_Page_1.jpg'
import './../CSS/LoginPage.css'
import backImage from './../Components/backgroundCSSForSeprateDiv.js';

export default function LoginAsHospital() {

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
            <button type="submit" id="submit" onClick={checkInput}>Submit</button>
            </form>
            </div>
        </>
    )
}
