import React from 'react'
import { NavLink} from 'react-router-dom';
import Banner_3 from './../image/Banner_3.jpg';
import './../CSS/Instruction.css';
import DashBoardNav from './../Components/DashBoardNav';

export default function DonorInstruction() {
    return (
        <div>
            <DashBoardNav  icon = "fas fa-user" val1="Donate Blood" val2 = "Donation Instruction" val3="History" val4="Logout"/>
            <h1>Donor Instruction</h1><hr></hr>
            <div className = "Banner">
            <img src = {Banner_3} alt = "Banner_3" ></img>
            </div>
            <div id="content">
                    <h2>There are several parameters that determine the eligibility of an individual to donate blood. Guidelines laid down by the Ministry of Health, 
                        Government of India have to be followed by blood banks and organizations conducting blood donation camps.</h2><br/>
                    <ol start="1" id="list1">
                    <li>Overall health- The donor must be fit and healthy, and should not be suffering from transmittable diseases.</li><br/>
                    <li>Age and weight- The donor must be 18–65 years old and should weigh a minimum of 50  kg.</li><br></br>
                    <li>Pulse rate- Between 50 and 100 without irregularities.</li><br></br>
                    <li>Hemoglobin level- A minimum of 12.5 g/dL.</li><br></br>
                    <li>Blood pressure- Diastolic: 50–100 mm Hg, Systolic: 100–180 mm Hg.</li><br></br>
                    <li>Body temperature- Should be normal, with an oral temperature not exceeding 37.5 °C.</li><br/>
                    <li>The time period between successive blood donations should be more than 3 months.</li>
                </ol>
            </div>
        </div>
    )
}
