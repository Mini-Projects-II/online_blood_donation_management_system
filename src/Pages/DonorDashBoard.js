import React from 'react'
import DashBoardNav from './../Components/DashBoardNav'

export default function DonorDashBoard() {
    return (
            <>
                <DashBoardNav  icon = "fas fa-user" user="Welcome Donor Name" val1="Donate Blood" val2 = "Donation Instruction" val3="History" val4="Logout"/>
                <h1 className ="p_hading">Your Requests</h1>
                <div className="p_request">
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
