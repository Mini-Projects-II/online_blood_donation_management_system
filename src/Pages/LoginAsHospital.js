import React from 'react'
import login_Page_1 from './../image/login_Page_1.jpg'
import './../CSS/LoginPage.css'
import backImage from './../Components/backgroundCSSForSeprateDiv.js';

export default function LoginAsHospital() {
    const name = document.getElementById("name");
    const pass = document.getElementById("password");

    function checkInput(){
        const nameValue = name.value.trim();
        const passValue = pass.value.trim();
        if(nameValue === "")
            showError(name,"Hospital Name can not be Blank");
        if(passValue === "")
            showError(pass,"Invalid Password");
    }

    function showError(input,msg){
        const loginContainer = input.parentNode;
        loginContainer.className = 'login-container error';
        const small = loginContainer.querySelector('small');
        small.innerHTML = msg;
    }

    return (
        <>
        <div  className= "LoginAsHospital" style = {backImage}>
            </div>
            <div className="base-container">
            <div className="login-header">
                <h2>Sign In</h2>
            </div>
            <form onSubmit={checkInput}>
            <div className="login-container">
                <label for="name">Hospital Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="Enter Hospital Name"/><br></br>
                <small>Error Message</small><br></br>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br>
                <small>Error Message</small><br></br>
            </div>
            <input type="submit" value="Submit" id="submit" />
            </form>
            </div>
        </>
    )
}
