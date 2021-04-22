import React from 'react'
import './../CSS/Footer.css';

export default function Footer() {
    return (
        <>
            <div className = "footer">
                <div className = "about">
                <h2>ABOUT</h2>
                <p >The Online Blood Donation management System is to create an e-Information about the donor and organization that are related to donating the blood. Through this application any person who is interested in donating the blood can register himself in the same way if any organization wants to register itself with this site that can also register. Moreover if any general consumer wants to make request blood online he can also take the help of this site. Admin is the main authority who can do addition, deletion, and modification if required.</p>
                </div>
                
               {/*} <div id = "soc">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>  
    </div>*/}
                
            </div>
            <div className = "contact">
                    <h2>Contact Details</h2>
                    <p>EMAiL: naveen.gupta_cs18@gla.ac.in</p>
                    <p>CONTACT: 6397363206 </p>
                    <p>ADDRESS: 435, Mathura, UttarPradesh</p>
                </div>
        </>
    )
}
