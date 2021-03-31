import React, {useRef} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import Navigation from './../Components/Navigation';
export default function SignupAsHospital() {
    const buttonRef = useRef();
    function checkDetails(){
        const hname = document.getElementById("hospital-name").value;
        const ownersName = document.getElementById("owner-name").value;
        const address = document.getElementById("address").value;
        const contactNumber = document.getElementById("contact-number").value;
        const district = document.getElementById("district").value;
        const state= document.getElementById("state").value;
        const password = document.getElementById("password").value;
        if(hname === "" || ownersName === "" || address === "" || contactNumber === "" || district ==="" || state === "" || password === ""){
            buttonRef.current.disabled = true;
        }
    }
    return (
        <>
        <Navigation/>
          <div style = {backImage}></div>  
          <div className="base-container">
                <div className="signup-header">
                    <h2>Sign Up</h2>
                </div>
                <form>
                <div className="signup-container">
                    <label for="name">Hospital Name</label>
                    <input type="text" id="hospital-name" name="hospital-name" placeholder="Enter Hospital Name"/><br></br><br></br>
                    
                    <label for="owner-name">Owner's Name</label><br></br>
                    <input type="text" id="owner-name" name="owner-name" placeholder="Enter Hospital Owner's Name"/><br></br><br></br>
                    
                    <label for="address">Address</label><br></br>
                    <input type="text" id="address" name="address" placeholder="Enter Address"/><br></br><br></br>
                    
                    <label for="state">State</label>
                    <input type="text" id="state" name='state' placeholder="Enter State" /><br></br><br></br>
                    
                    <label for="contact-number">Contact Number</label><br></br>
                    <input type="text" id="contact-number" name="contact-number" placeholder="Enter Contact Number"/><br></br><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br><br></br>
                </div>
                <button type="submit" id="submit" ref={buttonRef} onClick={checkDetails}>Submit</button>
                </form>
            </div>
        </>
    )
}
