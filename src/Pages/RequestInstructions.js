import React from 'react'
import { NavLink} from 'react-router-dom';
import Banner_3 from './../image/Banner_3.jpg';
import './../CSS/Instruction.css';
import DashNavPat from '../Components/DashNavPat';


export default function RequestInstructions() {
    return (
        <div>
            <DashNavPat icon = "fas fa-user" val1="Home" val2 = "Request" val3="Instruction" val4="Logout"/><br/>
            <h1 className="mainHeading">Request Instruction</h1><br/><br/><hr></hr>
            <div className = "Banner">
            <img src = {Banner_3} alt = "Banner_3" id="img"></img>
            </div>
            <div id="content">
                    <h2 className="heading">Risks for a person receiving blood can be divided into several categories (Precautions) :</h2><br/><br/>
                    <ol start="1" id="list1">
                    <li><b>Blood Type Matching : </b>Blood type should be compatible.</li><br/>
                    <li><b>Allergic and Other Reactions : </b>Delayed hemolytic reactions are usually mild and are caused by certain chemicals in the donor’s blood</li><br></br>
                    <li><b>Infection : </b>Infectious complications receive the most attention, especially since the HIV epidemic.</li><br></br>
                    <li><b>Banking Your Own Blood : </b>An individual may bank his/her own blood for a transfusion during an upcoming surgical procedure.</li><br></br>
                </ol>
            </div>
        </div>
    )
}
