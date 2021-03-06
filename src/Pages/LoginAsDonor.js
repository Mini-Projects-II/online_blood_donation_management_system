import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import backImage from '../Components/backgroundCSSForSeprateDiv'
import './../CSS/LoginPage.css'
import Navigation from './../Components/Navigation';
export default function LoginAsDonor() {
    
    const history = useHistory();
    const [newRecord, setNewRecord] = useState({mobile_no:"", password:""});
    const [record, setRecord] = useState([]);
    const handleData = async(e)=>{
        e.preventDefault();
        setRecord([...record, newRecord]);
        setNewRecord({mobile_no:"", password:""});
        const {mobile_no,password} = newRecord;
        const res = await fetch("/signinasdonor",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                mobile_no,password
            })
        }
        );
        const data = await res.json();
        console.log(data)
        if(data.error == "Please fill the data"){
            window.alert("Please fill the details");
            console.log("Invalid  Registration");
        }
        else if(data.error == "Please entered valid details"){
            window.alert("Please entered valid password");
            console.log("Invalid  Registration");
        }
        else if(data.message == "welcome"){
            history.push("./../dashboard/donor");
        }

    }
    const handleInput = (e)=>{
        const name  = e.target.name;
        const value = e.target.value;
        setNewRecord({...newRecord, [name]:value})
    }
    return (
        <>
        <Navigation/>
        <div style = {backImage}></div>
        <div className="base-container">
            <div className="login-header">
                <h2>Sign In</h2>
            </div>
            <form  method="POST" onSubmit = {handleData}>
            <div className="login-container">
                <label htmlFor="mobile_no">Mobile NO </label><br></br>
                <input type="number" id="mobile_no" name="mobile_no"
                maxLength = "10"
                value = {newRecord.mobile_no}
                onChange ={handleInput}
                placeholder="Enter Donor Mobile Number"/><br></br><br></br>
                <label htmlFor="password">Password</label><br></br>
                <input type="password" id="password" name="password"
                value  ={newRecord.password}
                onChange = {handleInput}
                placeholder="Enter Password"/><br></br><br></br>
            </div>
            <button type="submit" id="submit">Submit</button>
            </form>
        </div>
        </>
    )
}
