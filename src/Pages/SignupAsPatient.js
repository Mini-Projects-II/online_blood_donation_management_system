import React, {useRef} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import Navigation from './../Components/Navigation';
export default function SignupAsPatient() {
    const buttonRef = useRef();
    function checkDetails(){
        const pname = document.getElementById("name").value;
        const parentsName = document.getElementById("parents-name").value;
        const address = document.getElementById("address").value;
        const mobileNumber = document.getElementById("mobile-number").value;
        const gender = document.getElementById("gender").value;
        const bloodGroup= document.getElementById("bloodgroup").value;
        const password = document.getElementById("password").value;
        if(pname === "" || parentsName === "" || address === "" || mobileNumber === "" || gender ==="" || bloodGroup === "" || password === ""){
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
                    <label for="name">Patient Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Patient Name"/><br></br><br></br>
                    <label for="parents-name">Mother's/Father's Name</label><br></br>
                    <input type="text" id="parents-name" name="parents-name" placeholder="Enter Mother's/Father's Name"/><br></br><br></br>
                    <label for="address">Current Residential's Address</label><br></br>
                    <input type="text" id="address" name="address" placeholder="Enter Current Residential's Address"/><br></br><br></br>
                    <label for="mobile-number">Mobile Number</label><br></br>
                    <input type="text" id="mobile-number" name="mobile-number" placeholder="Enter Mobile Number"/><br></br><br></br>
                    <label for="gender">Gender</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                    <label for="bloodgroup">Blood Group</label><br></br>
                    <select name="gender" for="gender">
                            <option>Female</option>
                            <option>Male</option>
                            <option>Others</option>
                    </select> &nbsp;&nbsp;
                    <select name="bloodgroup" for="bloodgroup">
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                    </select><br></br><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="text" id="password" name="password" placeholder="Enter Password"/><br></br><br></br>
                </div>
                <button type="submit" id="submit" ref={buttonRef} onClick={checkDetails}>Submit</button>
                </form>
            </div>
        </>
    )
}
