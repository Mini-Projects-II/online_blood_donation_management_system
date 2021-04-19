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
                <ol start="1" id="list1">
                    <li>First you need to fill the DONATE BLOOD FORM.</li>
                    <NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/dbp/form" className="link">Donate Blood</NavLink><br></br><br/>
                    <li>After filling you can see your request on your Dashboard with two dynamic fields
                        <ol type = "i"><li>➢ Status</li><li>➢ Cancel Request</li></ol>
                    </li><br></br>
                    <li>If you want to cancel your request then you can do it by clicking on the button.</li><br></br>
                    <li>If hospital accept your request with your preferred time and date then your status gets update.</li><br></br>
                    <li>Now you have all the details like Hospital name, Hospital address, Time, Date, Room number</li><br></br>
                    <li>You can go there and donate you blood easily.</li>
                </ol>
            </div>
        </div>
    )
}
