import React from 'react'
import ayush from './../image/Ayush.jpg'
import gopal from './../image/Gopal.jpg'
import naveen from './../image/Naveen.jpg'
import ram from './../image/Ram.jpg'
import vineet from './../image/Vineet.jpg'
import './../CSS/AboutUs.css'
import Navigation from './../Components/Navigation'
import AboutUsComponent from '../Components/AboutUsComponent'

export default function AboutUs() {
    return (
        <div>
            <Navigation/>
            <hr></hr>
            <h1 className = "AboutUsH">About US</h1><hr></hr>
            <AboutUsComponent imageName={ayush} name="Ayush Goyal" email="ayush.goyal_cs18@gla.ac.in" mob="8265881134" add="Goverdhan, Mathura"/>
            <AboutUsComponent imageName={gopal} name="Gopal Tiwari" email="gopal.tiwari_cs18@gla.ac.in" mob="7060455295" add="Goverdhan, Mathura"/>
            <AboutUsComponent imageName={naveen} name="Naveen Gupta" email="naveen.gupta_cs18@gla.ac.in" mob="6397363206" add="Chhata, Mathura"/>
            <AboutUsComponent imageName={ram} name="Ramballabh Agrawal" email="ramballabh.agrawal_cs18@gla.ac.in" mob="6398470556" add="Goverdhan, Mathura"/>
            <AboutUsComponent imageName={vineet} name="Vineet Agrawal" email="vineet.agrawal_cs18@gla.ac.in" mob="7456827602" add="Goverdhan, Mathura"/>
        </div>
    )
}
