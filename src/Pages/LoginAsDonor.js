import React from 'react'
import './../CSS/LoginPage.css'
export default function LoginAsDonor() {
    return (
        <div className="base-container">
            <div className="login-header">
                <h2>Sign In</h2>
            </div>
            <div className="login-container">
                <label for="name">Donor Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="Enter Donor Name"/><br></br><br></br>
                <label for="password">Password</label><br></br>
                <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br><br></br>
            </div>
            <input type="submit" value="Submit" id="submit" />
        </div>
    )
}
