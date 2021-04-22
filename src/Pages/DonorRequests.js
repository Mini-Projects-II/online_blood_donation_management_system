import React,{useEffect} from 'react'
import DashNavHos from './../Components/DashNavHos'
import {useState} from 'react';

export default function DonorRequests() {
    const[di, setDi] = useState({din:""});
    const[ui, setUi] = useState({uin:""});
    const[parray, setParray] = useState([{name:"",per_date:"null",per_time:"null",mobile_number:"",gender:"null",bloodgroup:"null",status:"",HN:"null",HA:"null",Room:"null"}]);
    const getDonorRequests=async()=>{
        try{
            const res = await fetch('/donorrequests',{
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
        getDonorRequests();
    },[])

   
    const {din} = di;
    const deleteDonorReq = async()=> {
        const res3 = await fetch("/deletedonor",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            din
            

        })
        
    });
    const data3 = await res3.json();
    if(res3.status === 200) window.alert("Deleted Sucessfully");
    else if(res3.status === 500)window.alert("User not found");
    window.location.reload(true);
}
const {uin} = ui;
    const acceptDonorReq = async()=> {
        const res3 = await fetch("/acceptdonor",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            uin
            

        })
        
    });
    const data3 = await res3.json();
    if(res3.status === 200) window.alert("Accepted Sucessfully");
    else if(res3.status === 500)window.alert("User not found");
    window.location.reload(true);
}
    
   



    const printreq = (e,index) =>{
        return <div className = "req">
        <div className = "r_details">
            <p className = "p_detail_1">Donor Name: {e.name}</p>
            <p className = "p_detail_2"> Date: {e.per_date}</p>
            <p className = "p_detail_3">Time: {e.per_time}</p>
            <p className = "p_detail_4">Donor Mobile no: {e.mobile_number}</p>
            <p className = "p_detail_5">Donor Gender: {e.gender}</p>
            <p className = "p_detail_6">Donor Blood Group: {e.bloodgroup}</p>
        </div>
        <div className = "r_status">
                <p className = "p_status"> Status: {e.status}</p>
               
        </div>
    </div>
    }

    return (
            <>
                <DashNavHos  icon = "fas fa-hospital" user="City Hospital" val1="Home" val2 = "Donar Requests" val3="Patient Requests" val4="Logout"/>
               
                <h1 className ="p_hading">Donor Requests</h1>
                <h2 className = "p_hading2"> Accept or Reject Requests </h2>
                <p className = "info-d">Please Enter Donor Mobile Number to Remove or Accept Request</p>
                <input placeholder="Donor Mobile No" type = "number" value={di.din} name="di" className="diInput" onChange={(e) =>setDi({din:e.target.value})}/>
                <button className = "p_button" onClick={deleteDonorReq}>Remove Request</button>
                <input placeholder="Donor Mobile No"type = "number" value={ui.uin} name="ui" className="uiInput" onChange={(e) =>setUi({uin:e.target.value})}/>
                <button className = "p_button1" onClick={acceptDonorReq}>Accept Request</button>


                <div className="p_request">
                   {
                       parray.map((e,index) => printreq(e, index))
                   }
                </div>
            </>
    )
}
