import React, {useEffect, useState}from 'react'
import DashBoardNav from './../Components/DashBoardNav'

export default function DonorDashBoard() {
    const [donordata, setdonordata] = useState({name:"",parents_name:"",address:"",mobile_number:"",gender:"null",bloodgroup:"null",password:""});
    const [formRecord, setFormRecord] = useState({name:"",per_date:"null",per_time:"null",mobile_number1:"",gender:"null",bloodgroup:"null",status:"",HN:"null",HA:"null",Room:"null"});
    
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

            const res1 = await fetch('/donorreqformdata',{
                method: "GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            })
            const data1 = await res1.json();
            console.log(data1);
            setFormRecord(data1);
            
            

        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        donordash();
    }, [])

    

    const cancelRequest =async(e)=>{
        const {name,per_date,per_time,mobile_number1,gender,bloodgroup,status,HN,HA,Room} = formRecord
        console.log("hgfcx");
        const res =await fetch("/canceld",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,per_date,per_time,mobile_number1,gender,bloodgroup,status,HN,HA,Room
            })
        });
        if(res.status === 200){
            window.location.reload(true);
            window.alert("Request Deleted");
        }
        
        
    }

    return (
            <>
                <DashBoardNav  icon = "fas fa-user" user={donordata.name} val1 ="Home" val2="Add Donation Request" val3 = "Instructions"  val4="Logout"/>
                <h1 className ="p_hading">Your Requests</h1>
                <div className="p_request">
                <div className = "req">
                        <div className = "r_details">
                        <p className = "p_detail_1">Req id: {formRecord._id}</p>
                        <p className = "p_detail_2"> Date: {formRecord.per_date}</p>
                        <p className = "p_detail_3">Time: {formRecord.per_time}</p>
                        <p className = "p_detail_4">Hospital Name: {formRecord.HN} </p>
                        <p className = "p_detail_5">Hospital Address: {formRecord.HA}</p>
                        <p className = "p_detail_6">Room No: {formRecord.Room}</p>
                        </div>
                        <div className = "r_status">
                            <p className = "p_status"> Status: {formRecord.status}</p>
                            <button className = "p_button3" onClick={cancelRequest}>Remove and add New Request</button>
                        </div>

                    </div>
                    
                    

                </div>
            </>
    )
}
