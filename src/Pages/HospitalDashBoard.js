import React, {useEffect} from 'react'
import DashNavHos from './../Components/DashNavHos'
import {useState} from 'react';


export default function HospitalDashBoard() {
    const[parray, setParray] = useState([{name:"",per_date:"null",per_time:"null",mobile_number:"",gender:"null",bloodgroup:"null",status:"",HN:"null",HA:"null",Room:"null"}]);
    const getPatientRequests=async()=>{
        try{
            const res = await fetch('/patientrequests',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
            setParray(await res.json());
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect( () =>{
        getPatientRequests();
    },[])
    console.log(parray);
    console.log(parray[0].status);

    const printreq = (e) =>{
        return <div className = "req">
        <div className = "r_details">
            <p className = "p_detail_1">Patient Name: {e.name}</p>
            <p className = "p_detail_2"> Date: {e.per_date}</p>
            <p className = "p_detail_3">Time: {e.per_time}</p>
            <p className = "p_detail_4">Patient Mobile no: {e.mobile_number}</p>
            <p className = "p_detail_5">Patient Gender: {e.gender}</p>
            <p className = "p_detail_6">Patient Blood Group: {e.bloodgroup}</p>
        </div>
        <div className = "r_status">
                <p className = "p_status"> Status:Pending</p>
                <button className = "p_button">Cancel Request</button>
        </div>
    </div>

    }
    return (
            <>
                <DashNavHos  icon = "fas fa-hospital" user="City Hospital" val1="Blood Stock" val2 = "Donation Requests" val3="Blood Requests" val4="Logout"/>
                <h1 className ="p_hading">Patient Requests</h1>
                <div className="p_request">
                   {
                       parray.map((e) => printreq(e))
                   }
                </div>
            </>
    )
}
