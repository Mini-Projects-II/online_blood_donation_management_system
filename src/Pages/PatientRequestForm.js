import React from 'react'
import './../CSS/donorfrom.css';
import {useState} from  'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import DashBoardNav from './../Components/DashBoardNav';
import DashNavPat from '../Components/DashNavPat';
import {useHistory} from 'react-router-dom';
export default function PatientRequestForm() {
    const history = useHistory();
    const [newRecord, setNewRecord] = useState({name:"",per_date:"",per_time:"",mobile_number:"",gender:"null",bloodgroup:"null"}); 
    const [record, setRecord] = useState([]);
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setNewRecord({...newRecord, [name]:value});
    }
    const handleRecord = async(e) =>{
        e.preventDefault();
        if(!(newRecord.name && newRecord.per_time && newRecord.mobile_number && newRecord.per_date)){
            alert("Please Fill all Data in form");
        }
        else if( newRecord.bloodgroup === "null" && newRecord.gender === "null"){
            alert("Please select valid field");
        }
        else if( newRecord.mobile_number.length != 10){
            alert("Please enter valid mobile no ");
            setNewRecord({...newRecord, mobile_number:""});
        }
        else{
        setRecord([...record, newRecord]);
        setNewRecord({name:"",per_date:"",per_time:"",mobile_number:"",gender:"null",bloodgroup:"null"});
        const {name,per_date,per_time,mobile_number,gender,bloodgroup,} = newRecord;
        const res = await fetch("/patientformdata",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,per_date,per_time,mobile_number,gender,bloodgroup
            })
        });
        const data = await res.json();
        if(res.status == 500 || !data){
            window.alert("You already have a request");
            history.push("./../dashboard/patient");
            console.log("Invalid  Registration");
        }
        else if(res.status != 500){
            window.alert("Request added");
            history.push("./../dashboard/patient");
            console.log("Registration Successful");
        }
        }
    }


    return (
        <>
                    <DashNavPat icon = "fas fa-user" val1="Home" val2 = "Request" val3="Instruction" val4="Logout"/><br/>
            <div style = {backImage}></div>
            <div className="base-container">
                <div className="signup-header">
                    <h2>Patient request form</h2>
                </div>
                <form method="POST" onSubmit = {handleRecord}>
                <div className="signup-container">
                    <label htmlFor="name">Patient Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Patient Name"  value = {newRecord.name} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="per_date">Enter Preferd Date</label><br></br>
                    <input type="date" id="per_date" name="per_date" placeholder="Select preferd date" value = {newRecord.per_date} onChange={handleInput}/><br></br><br></br>
                    <label htmlFor="per_time">Enter Preferd Time</label><br></br>
                    <input type="time" id="per_time" name="per_time" placeholder="Enter your preferd time" value = {newRecord.per_time} onChange={handleInput}/><br></br><br></br>
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
                </div>
                <button type="submit" id="submit">Request</button>
                </form>
            </div>
        </>
    )

}
