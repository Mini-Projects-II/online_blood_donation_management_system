import React from 'react'
import './../CSS/Navigation.css';
export default function Navigation() {
    return (
       <>
        <div id = "nav">
            <ul>
                <li><a href = "#">Home</a></li>
                <li> <a href = "#" >Login</a>
                    <ul id = "subm-1">
                        <li> <a href = "#">Login As Donor </a></li>
                        <li> <a href = "#">Login As Patient </a></li>
                        <li> <a href = "#">Login As Hospital</a></li>
                    </ul>
                </li>
                <li><a href = "#" >Signup</a>
                    <ul id= "subm-2">
                        <li> <a href = "#">Signup As Donor </a></li>
                        <li> <a href = "#">Signup As Patient </a></li>
                        <li> <a href = "#">Signup As Hospital</a></li>
                    </ul>
                </li>
                <li><a href = "#" >About Us</a></li>
                <li><a href = "#" >Contact Us</a></li>
            </ul>
        </div>
       </>
    )
}
