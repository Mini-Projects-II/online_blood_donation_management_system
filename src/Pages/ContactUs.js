import React from 'react'
import Navigation from '../Components/Navigation'
import './../CSS/ContactUs.css'

export default function ContactUs() {
  return (
    <div className = "con">
      <Navigation/>
      <div className="header">
        <h1>Contact-Us</h1>
      </div>
      <div className="main">
      <form>
      <label for="username">Username :</label>
      <input type="text" id="username" name="username" placeholder="Name" required></input>
      <label for="email">E-mail :</label>
      <input type="email" id="email" name="email" placeholder="Enter Email" required></input>
      <label for="mobno">Contact No:</label>
      <input type="tel" id="mobno" name="mobno" placeholder="Enter Mobile" pattern="[6-9]{1}[0-9]{3}[0-9]{3}[0-9]{3}" required></input>
      <label for="name">Organization name:</label>
      <input type="text" id="name" name="name" placeholder="Organization Name"  required></input>
      <label for="msg">Query Details</label>
      <textarea type="text" id="msg" name="entry" rows="8" cols="50" placeholder="Write Your Message here..." required></textarea>
      <button type="submit" id="button" name="submit-btn">Submit</button>          
      </form>
      </div>
    </div>
  )
}
