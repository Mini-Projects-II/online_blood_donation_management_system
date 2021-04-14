import React from 'react'
import DashBoardNav from './../Components/DashBoardNav'

export default function HospitalDashBoard() {
    return (
            <>
                <DashBoardNav  icon = "fas fa-hospital" user="Hospital Name" val1="Blood Stock" val2 = "Donation Requests" val3="Blood Requests" val4="Logout"/>
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
                    
                    <div className = "req">
                        <div className = "r_details">
                        <p className = "p_detail_1">Req id:</p>
                        <p className = "p_detail_2"> Date:</p>
                        <p className = "p_detail_3">Time:</p>
                        <p className = "p_detail_4">Hospital Name:</p>
                        <p className = "p_detail_5">Hospital Address:</p>
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
