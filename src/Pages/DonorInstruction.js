import React from 'react'
import { NavLink} from 'react-router-dom';
import './../CSS/Instruction.css';
export default function DonorInstruction() {
    return (
        <div>
            <h1>Donor Instruction</h1>
            <div id="content">
                <ol start="1" id="list1">
                    <li>First you need to fill the DONATE BLOOD FORM.</li>
                    <NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/dbd/form">Donate Blood</NavLink><br></br>
                    <li>After filling you can see your request on your Dashboard with two dynamic fields
                        <ol type = "i"><li>Status</li><li>Cancel Request</li></ol>
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