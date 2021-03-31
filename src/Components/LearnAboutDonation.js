import learn_about_donation from './../image/learn_about_donation.jpg'
import React from 'react'
import './../CSS/learn_about_donation.css'

export default function LearnAboutDonation() {
    return (
        <div className="learn_about_donation">
            <h1>LEARN ABOUT DONATION</h1>
            <div className="learn_donation">
                <img src={learn_about_donation} alt="Learn about donation" />
            </div>
            <div className="table">
                <table border="5" cellPadding = "10px">
                    <caption>Compatible Blood Type Donors</caption>
                    <tr>
                        <th>Blood Type</th>
                        <th>Donate Blood TO</th>
                        <th>Receive Blood From</th>
                    </tr>
                    <tr>
                        <td>A+</td>
                        <td>A+ AB+</td>
                        <td>A+ A- O+ O-</td>
                    </tr>
                    <tr>
                        <td>O+</td>
                        <td>O+ A+ B+ AB+</td>
                        <td>O+ O-</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>B+ AB+</td>
                        <td>B+ B- O+ O-</td>
                    </tr>
                    <tr>
                        <td>AB+</td>
                        <td>AB+</td>
                        <td>EveryOne</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>A+ A- AB+ AB-</td>
                        <td>A- O-</td>
                    </tr>
                    <tr>
                        <td>O-</td>
                        <td>EveryOne</td>
                        <td>O-</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>B+ B- AB+ AB-</td>
                        <td>B- O-</td>
                    </tr>
                    <tr>
                        <td>AB-</td>
                        <td>AB- AB+</td>
                        <td>AB- A- B- O-</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
