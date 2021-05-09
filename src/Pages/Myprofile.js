import React, {useEffect, useState} from 'react'
import DashNavPat from './../Components/DashNavPat';  
import "./../CSS/Myprofile.css";

export default function Myprofile() {
    const [Patientdata, setPatientdata] = useState({name:"",parents_name:"",address:"",mobile_number:"",gender:"null",bloodgroup:"null",password:""});
    const donordash = async()=>{
        try{
            const res = await fetch('/patientdashdata',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setPatientdata(data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        donordash();
    }, [])

    return (
       <>
            <DashNavPat icon = "fas fa-user" user= {Patientdata.name}  val1="Home" val2 = "Request" val3="Instructions" val4="Logout" val5 ="My Profile"/>
            
            <div className="myprofile">
            <i  id="icon" class="fas fa-user">Patient Profile</i>
            <div className="mys">
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Name:</span>{Patientdata.name}</p>
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Parent's Name:</span>{Patientdata.parents_name}</p>
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Address:</span>{Patientdata.address}</p>
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Mobile Number:</span>{Patientdata.mobile_number}</p>
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Gender:</span>{Patientdata.gender}</p>
                <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Blood Group:</span>{Patientdata.bloodgroup}</p>
                </div>
            </div>
       </>
    )
}
