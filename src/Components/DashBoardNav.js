import React from 'react';
import './../CSS/DashNav.css';
import { NavLink} from 'react-router-dom';

export default function DashBoardNav(props) {
    return (
     <>
        <div id = "d_nav">
            <ul>

                <li> <i class={props.icon}></i> <p className="u_name">{props.user}</p>  </li>
                <li> <NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/dbd/form">{props.val1}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/dbd/inst">{props.val2}</NavLink>  </li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/3">{props.val3}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/4">{props.val4}</NavLink></li>
            </ul>
        </div>
       </>
            
    )
}
