import React, {useEffect, useState}from 'react'
import DashBoardNav from './../Components/DashBoardNav'

 
 export default function Myprofile1() {
    const [donordata, setdonordata] = useState({name:"",parents_name:"",address:"",mobile_number:"",gender:"null",bloodgroup:"null",password:""});
    const donordash = async()=>{
        try{
            const res = await fetch('/donordashdata',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            console.log(data);
            setdonordata(data);

            
            

        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        donordash();
    }, [])


     return (
        <>
        <DashBoardNav icon = "fas fa-user" user= {donordata.name}  val1="Home" val2 = "Request" val3="Instructions" val4="Logout" val5 ="My Profile"/>
        
        <div className="myprofile">
        <i  id="icon" class="fas fa-user">Patient Profile</i>
        <div className="mys">
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Name:</span>{donordata.name}</p>
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Parent's Name:</span>{donordata.parents_name}</p>
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Address:</span>{donordata.address}</p>
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Mobile Number:</span>{donordata.mobile_number}</p>
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Gender:</span>{donordata.gender}</p>
            <p className="myp"> <span style={{color:"rgb(9, 245, 21)", fontWeight:"bold"}}>Blood Group:</span>{donordata.bloodgroup}</p>
            </div>
        </div>
   </>
     )
 }
 