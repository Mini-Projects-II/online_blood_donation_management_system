import React, {useState} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import Navigation from './../Components/Navigation';
export default function SignupAsDonor() {
    const [donor, setDonor] = useState({pname:"",parentsName:"",address:"",mobileNumber:"",gender:"",bloodGroup:"",password:""});    
    const updateName=(event)=>{
        event.preventDefault();
        setDonor({...donor,pname:event.target.value});
    }

    const updateparentsName=(event)=>{
        setDonor({...donor,parentsName:event.target.value});
    }

    const updateaddress=(event)=>{
        setDonor({...donor,address:event.target.value});
    }

    const updatemobileNumber=(event)=>{
        setDonor({...donor,mobileNumber:event.target.value});
    }

    const updategender=(event)=>{
        setDonor({...donor,gender:event.target.value});
    }

    const updatebloodGroup=(event)=>{
        setDonor({...donor,bloodGroup:event.target.value});
    }

    const updatepassword=(event)=>{
        setDonor({...donor,password:event.target.value});
        if(donor.pname !== "" && donor.parentsName !== "" && donor.address !== "" && donor.mobileNumber !== "" && donor.gender !== "" && donor.bloodGroup !== "" && donor.password !== "" && donor.goi_Id !== ""){
            document.getElementById("submit").style.backgroundColor = "red";
            document.getElementById("submit").disabled = false;
        }
        else{
            document.getElementById("submit").style.backgroundColor = "darkgray";
            document.getElementById("submit").disabled = true;
        }
    }

    const updategoi_Id=(event)=>{
        setDonor({...donor,goi_Id:event.target.value});
    }

    function checkDetails(){

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
                    <label for="name">Donor Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Donor Name" onChange={updateName}/><br></br><br></br>
                    <label for="parents-name">Mother's/Father's Name</label><br></br>
                    <input type="text" id="parents-name" name="parents-name" placeholder="Enter Mother's/Father's Name" onChange={updateparentsName}/><br></br><br></br>
                    <label for="address">Current Residential's Address</label><br></br>
                    <input type="text" id="address" name="address" placeholder="Enter Current Residential's Address" onChange={updateaddress}/><br></br><br></br>
                    <label for="mobile-number">Mobile Number</label><br></br>
                    <input type="text" id="mobile-number" name="mobile-number" placeholder="Enter Mobile Number" onChange={updatemobileNumber}/><br></br><br></br>
                    <label for="gender">Gender</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                    <label for="bloodgroup">Blood Group</label><br></br>
                    <select name="gender" for="gender" onChange={updategender}>
                            <option selected>Select Value</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Others</option>
                    </select>&nbsp;&nbsp; 
                    <select name="bloodgroup" for="bloodgroup" onChange={updatebloodGroup}>
                            <option selected>Select Value</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                    </select><br></br><br></br>
                    <label for="goi-Id">GOI ID</label><br></br>
                    <select name="goi_Id" for="goi_Id" onChange={updategoi_Id}>
                            <option selected>Select Value</option>
                            <option>Aadhar Number</option>
                            <option>PAN</option>
                            <option>Driving Liscense</option>
                            <option>Voter Id</option>
                            <option>Passport Number</option>
                    </select><br></br><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="text" id="password" name="password" placeholder="Enter Password" onChange={updatepassword}/><br></br><br></br>
                </div>
                <button type="submit" id="submit" disabled>Submit</button>
                </form>
            </div>
        </>
    )
}
