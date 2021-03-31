import React, {useState} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import Navigation from './../Components/Navigation';
export default function SignupAsDonor() {
    const [newRecord, setNewRecord] = useState({name:"",parents_name:"",address:"",mobile_number:"",gender:"null",bloodgroup:"null",password:""}); 
    const [record, setRecord] = useState([]);
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setNewRecord({...newRecord, [name]:value});

    }
    const handleRecord = (e) =>{
        e.preventDefault();
        if(!(newRecord.name && newRecord.address && newRecord.mobile_number && newRecord.parents_name && newRecord.password)){
            alert("Please Fill all Data in form");
        }
        else if( newRecord.bloodgroup === "null" && newRecord.gender === "null"){
            alert("Please select valid field");
        }
        else if( newRecord.mobile_number.length != 10){
            alert("Please enter valid mobile no ");
            setNewRecord({...newRecord, mobile_number:""});
        }
        else if( newRecord.password.length <8){
            alert("Please enter password of length minimum 8");
            setNewRecord({...newRecord, password:""});
        }
        else{
        setRecord([...record, newRecord]);
        setNewRecord({name:"",parents_name:"",address:"",mobile_number:"",gender:"null",bloodgroup:"null",password:""});
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
                <form onSubmit = {handleRecord}>
                <div className="signup-container">
                    <label htmlFor="name">Donor Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Donor Name"  value = {newRecord.name} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="parents_name">Mother's/Father's Name</label><br></br>
                    <input type="text" id="parents_name" name="parents_name" placeholder="Enter Mother's/Father's Name" value = {newRecord.parents_name} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="address">Current Residential's Address</label><br></br>
                    <input type="text" id="address" name="address" placeholder="Enter Current Residential's Address" value = {newRecord.address} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="mobile_number">Mobile Number</label><br></br>
                    <input type="number" maxLength = "10" id="mobile_number" name="mobile_number" placeholder="Enter Mobile Number" value = {newRecord.mobile_number} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="gender">Gender</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                    <label htmlFor="bloodgroup">Blood Group</label><br></br>
                    <select name="gender" htmlFor="gender"  value = {newRecord.gender} onChange={handleInput}>
                            <option value = "null" selected>Select Gender</option>
                            <option value= "Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Others">Others</option>
                    </select>&nbsp;&nbsp; 
                    <select name="bloodgroup" htmlFor="bloodgroup" value = {newRecord.bloodgroup} onChange={handleInput}>
                        <option value = "null" selected> Select Blood Group</option>
                            <option value="A+" >A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                    </select><br></br><br></br>
                    {/*<label htmlFor="goi_Id">GOI ID</label><br></br>
                    <select name="goi_Id" htmlFor="goi_Id" onChange={handleInput}>
                            <option value={newRecord.} selected>Select Value</option>
                            <option value={newRecord.}>Aadhar Number</option>
                            <option value={newRecord.}>PAN</option>
                            <option value={newRecord.}>Driving Liscense</option>
                            <option value={newRecord.}>Voter Id</option>
                            <option value={newRecord.}>Passport Number</option>
    </select><br></br><br></br>*/}
                    <label htmlFor="password">Password</label><br></br>
                    <input type="password" id="password" name="password" placeholder="Enter Password" value = {newRecord.password} onChange={handleInput}/><br></br><br></br>
                </div>
                <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
