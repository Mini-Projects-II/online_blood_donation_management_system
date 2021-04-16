import React, {useState} from 'react'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/SignupPage.css'
import Navigation from './../Components/Navigation';
export default function SignupAsHospital() {
    const [newRecord, setNewRecord] = useState({hospital_name:"",owner_name:"",address:"",district:"",state:"", contact_number:"",password:""}); 
    const [record, setRecord] = useState([]);
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setNewRecord({...newRecord, [name]:value});

    }
    const handleRecord = async(e) =>{
        e.preventDefault();
        if(!(newRecord.hospital_name && newRecord.address && newRecord.contact_number && newRecord.state && newRecord.district && newRecord.owner_name &&  newRecord.password)){
            alert("Please Fill all Data in form");
        }
        else if( newRecord.contact_number.length != 10){
            alert("Please enter valid mobile no ");
            setNewRecord({...newRecord, contact_number:""});
        }
        else if( newRecord.password.length <8){
            alert("Please enter password of length minimum 8");
            setNewRecord({...newRecord, password:""});
        }
        else{
        setRecord([...record, newRecord]);
        setNewRecord({hospital_name:"",owner_name:"",address:"",district:"",state:"", contact_number:"",password:""});
        const {hospital_name,owner_name,address,district,state,contact_number,password} = newRecord;
        const res = await fetch("/hospital",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                hospital_name,owner_name,address,district,state,contact_number,password
            })
        });
        const data = await res.json();
        if(data.status == 500 || !data){
            window.alert("Invalid  Registration");
            console.log("Invalid  Registration");
        }
        else{
            window.alert("Registration Successful");
            console.log("Registration Successful");
        }
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
                    <label for="name">Hospital Name</label>
                    <input type="text" id="hospital_name" name="hospital_name" value = {newRecord.hospital_name} onChange = {handleInput} placeholder="Enter Hospital Name"/><br></br><br></br>
                    
                    <label for="owner-name">Owner's Name</label><br></br>
                    <input type="text" id="owner_name" name="owner_name" value = {newRecord.owner_name} onChange = {handleInput} placeholder="Enter Hospital Owner's Name"/><br></br><br></br>
                    
                    <label for="address">Address</label><br></br>
                    <input type="text" id="address" name="address" value = {newRecord.address} onChange = {handleInput} placeholder="Enter Address"/><br></br><br></br>
                    
                    <label for="district">District</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                    <label for="state">State</label>
                    <input type="text" id="district" name='district' value = {newRecord.district} onChange = {handleInput} placeholder="Enter District" />
                    <input type="text" id="state" name='state' value = {newRecord.state} onChange = {handleInput} placeholder="Enter State" /><br></br><br></br>
                    
                    <label for="contact_number">Contact Number</label><br></br>
                    <input type="number" maxLength = "10" id="contact_number" name="contact_number" value = {newRecord.contact_number} onChange = {handleInput} placeholder="Enter Contact Number"/><br></br><br></br>
                    <label for="password">Password</label><br></br>
                    <input type="password" id="password" name="password" value = {newRecord.password} onChange = {handleInput} placeholder="Enter Password"/><br></br><br></br>
                </div>
                <button type="submit" id="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
