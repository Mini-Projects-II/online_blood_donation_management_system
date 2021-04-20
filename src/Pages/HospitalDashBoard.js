import React, {useEffect} from 'react'
import DashNavHos from './../Components/DashNavHos'
import Banner from './../image/hospital.jpg'
import './../CSS/HospitalDashboard.css'
import {useState} from 'react';


export default function HospitalDashBoard() {
    return (
            <>
                <DashNavHos  icon = "fas fa-hospital" user="City Hospital" val1="Home" val2 = "Donation Requests" val3="Patient Requests" val4="Logout"/>
                <div className="BannerHos">
                    <img src={Banner} alt="City Hospital" />
                </div>
            </>
    )
}