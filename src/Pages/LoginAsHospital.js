import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import login_Page_1 from './../image/login_Page_1.jpg'
import './../CSS/LoginPage.css'
import backImage from './../Components/backgroundCSSForSeprateDiv.js';
import Navigation from './../Components/Navigation';

export default function LoginAsHospital() {
    const history = useHistory();
    const [newRecord, setNewRecord] = useState({username:"", password:""});
    const [record, setRecord] = useState([]);
    const handleData = async(e)=>{
        e.preventDefault();
        setRecord([...record, newRecord]);
        setNewRecord({username:"", password:""});
        const {username,password} = newRecord;
        const res = await fetch("/signinashospital",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username,password
            })
        });
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
            history.push("./../dashboard/hospital");
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
            <form onSubmit = {handleData}>
            <div className="login-container">
                <label htmlFor="username">Username</label><br></br>
                <input type="text" id="username" name="username"
                value = {newRecord.username}
                onChange ={handleInput}
                placeholder="Enter Donor username"/><br></br><br></br>
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
