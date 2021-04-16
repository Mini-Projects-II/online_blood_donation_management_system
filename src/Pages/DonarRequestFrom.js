import React from 'react'
import './../CSS/donorfrom';

export default function DonarRequestFrom() {
    return (
        <>
            <div className = "form_cnt">
                <h1 className = "d_r_he"> Donation Request</h1>
                <form className = "d_f">
                    <label> Donor Name</label>
                    <input className = "d_in_1" type = "text" name="dname"></input>
                    <label> Donor Name</label>
                    <input className = "d_in_1" type = "text" name="dname"></input>
                    <label> Donor Name</label>
                    <input className = "d_in_1" type = "text" name="dname"></input>
                    <label> Donor Name</label>
                    <input className = "d_in_1" type = "text" name="dname"></input>

                </form>


            </div>
        </>
    )
}
