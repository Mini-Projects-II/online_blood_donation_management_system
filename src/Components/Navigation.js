import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './../CSS/Navigation.css';
export default function Navigation() {
    return (
       <>
        <div id = "nav">
            <ul>
                <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/">Home</NavLink></li>
                <li> <NavLink className= "navLink"  exact activeClassName= "active_class" to="/login/patient">Login</NavLink>
                    <ul id = "subm-1">
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/login/patient">Patient</NavLink></li>
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/login/donor">Donor</NavLink></li>
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/login/hospital">Hospital</NavLink></li>
                    </ul>
                </li>
                <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/signup/patient">Signup</NavLink>
                    <ul id= "subm-2">
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/signup/patient">Patient</NavLink></li>
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/signup/donor">Donor</NavLink></li>
                        <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/signup/hospital">Hospital</NavLink></li>
                    </ul>               
                </li>
                <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/aboutus">AboutUS</NavLink></li>
                <li><NavLink className= "navLink"  exact activeClassName= "active_class" to="/contactus">ContactUS</NavLink></li>
            </ul>
        </div>
       </>
    )
}
