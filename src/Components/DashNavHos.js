import React from 'react';
import './../CSS/DashNav.css';
import { NavLink} from 'react-router-dom';

export default function DashBoardNav(props) {
    return (
     <>
        <div id = "d_nav">
            <ul>

                <li> <i class={props.icon}></i> <p className="u_name">{props.user}</p>  </li>
                <li> <NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/dashboard/hospital">{props.val1}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/hosp/drequests">{props.val2}</NavLink>  </li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/hosp/prequests">{props.val3}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/">{props.val4}</NavLink></li>
            </ul>
        </div>
       </>
            
    )
}