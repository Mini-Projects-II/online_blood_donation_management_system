import React from 'react'
import DashBoardNav from './../Components/DashBoardNav';  
import "./../CSS/PatientDashBoard.css";


export default function PatientDashBoard() {
    return (
            <>
                <DashBoardNav icon = "fas fa-user" user= "Welcome Patient Name"  val1="Request Blood" val2 = "Request Instruction" val3="History" val4="Logout"/>
                <h2 className ="p_hading">Patient Requests</h2>
                <div className="p_Request">
                    <div className = "req1">
                        <div className = "r_details">
                        <p className = "p_detail">Req id:</p>
                        <p className = "p_detail"> Date</p>
                        <p className = "p_detail">Time</p>
                        <p className = "p_detail">Hospital Name</p>
                        <p className = "p_detail">Hospital Address</p>
                        <p className = "p_detail"></p>
                        </div>
                        <div className = "r_status">
                            <p>Status:Pending</p>
                            <button>Delete Request</button>
                        </div>

                    </div>

                </div>
            </>
    )
}
