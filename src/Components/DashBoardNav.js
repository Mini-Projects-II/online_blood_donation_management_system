import React from 'react';
import './../CSS/DashNav.css';
import { NavLink} from 'react-router-dom';

export default function DashBoardNav(props) {
    return (
     <>
        <div id = "d_nav">
            <ul>
                <li> <p className="u_name"> Welcome Donor</p>  </li>
                <li> <NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/1">{props.val1}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/2">{props.val2}</NavLink>  </li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/3">{props.val3}</NavLink></li>
                <li><NavLink className= "dnavlink"  exact activeClassName= "d_active" to="/4">{props.val4}</NavLink></li>
            </ul>
        </div>
       </>
            
    )
}
