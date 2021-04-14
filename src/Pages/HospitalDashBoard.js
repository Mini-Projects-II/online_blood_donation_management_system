import React from 'react'
import DashBoardNav from './../Components/DashBoardNav'

export default function HospitalDashBoard() {
    return (
            <>
                <DashBoardNav  icon = "fas fa-hospital" user="Hospital Name" val1="Blood Stock" val2 = "Donation Requests" val3="Blood Requests" val4="Logout"/>
            </>
    )
}
