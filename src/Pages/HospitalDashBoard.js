import React, {useEffect} from 'react'
import DashNavHos from './../Components/DashNavHos'
import hospitalimage from './../image/hospital.jpg'
import './../CSS/HospitalDashboard.css'

export default function HospitalDashBoard() {
    return (
            <>
                <DashNavHos  icon = "fas fa-hospital" user="City Hospital" val1="Blood Stock" val2 = "Donation Requests" val3="Blood Requests" val4="Logout"/>
                <div className="Banner">
                    <img src= {hospitalimage} alt="City Hospital" />
                </div>
                <div className="content">
                    
                </div>
            </>
    )
}
