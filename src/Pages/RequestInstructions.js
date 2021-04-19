import React from 'react'
import { NavLink} from 'react-router-dom';
import Banner_3 from './../image/Banner_3.jpg';
import './../CSS/Instruction.css';
import DashBoardNav from '../Components/DashNavPat';

export default function RequestInstructions() {
    return (
        <div>
            <DashBoardNav  icon = "fas fa-user" val1="Donate Blood" val2 = "Request Instruction" val3="History" val4="Logout"/>
            {/* <br/><br/><br/><br/><br/> */}
            <h1>Request Instruction</h1>
            <div className = "Banner">
            <img src = {Banner_3} alt = "Banner_3" ></img>
            </div>
            <div id="content">
                    <h2>Risks for a person receiving blood can be divided into several categories :</h2><br/>
                    <ol start="1" id="list1">
                    <li><b>Blood Type Matching : </b>Blood type should be compatible</li><br/>
                    <li><b>Allergic and Other Reactions : </b>Delayed hemolytic reactions are usually mild and are caused by certain chemicals in the donor’s blood</li><br></br>
                    <li><b>Infection : </b>Infectious complications receive the most attention, especially since the HIV epidemic.</li><br></br>
                    <li>Hemoglobin level- A minimum of 12.5 g/dL.</li><br></br>
                    <li>Blood pressure- Diastolic: 50–100 mm Hg, Systolic: 100–180 mm Hg.</li><br></br>
                    <li>Body temperature- Should be normal, with an oral temperature not exceeding 37.5 °C.</li><br/>
                    <li>The time period between successive blood donations should be more than 3 months.</li>
                </ol>
            </div>
        </div>
    )
}
