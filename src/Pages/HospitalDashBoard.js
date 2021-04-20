import React, {useEffect} from 'react'
import DashNavHos from './../Components/DashNavHos'


export default function HospitalDashBoard() {
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
            console.log(res.json())
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        getPatientRequests();
    }, [])
    return (
            <>
                <DashNavHos  icon = "fas fa-hospital" user="City Hospital" val1="Blood Stock" val2 = "Donation Requests" val3="Blood Requests" val4="Logout"/>
                <h1 className ="p_hading">Patient Requests</h1>
                <div className="p_request">
                <div className = "req">
                    <div className = "r_details">
                        <p className = "p_detail_1">Req id:</p>
                        <p className = "p_detail_2"> Date:</p>
                        <p className = "p_detail_3">Time:</p>
                        <p className = "p_detail_4">Patient Name:</p>
                        <p className = "p_detail_5">Patient Address:</p>
                        <p className = "p_detail_6">Room No:</p>
                    </div>
                    <div className = "r_status">
                            <p className = "p_status"> Status:Pending</p>
                            <button className = "p_button">Cancel Request</button>
                    </div>
                </div>
                </div>
            </>
    )
}
