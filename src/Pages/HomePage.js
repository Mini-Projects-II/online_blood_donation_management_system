import React from 'react';
import Banner_2 from './../image/Banner_2.jpg';
import Navigation from './../Components/Navigation';
import Footer from './../Components/Footer.js';
import BannerAnimation from '../Components/BannerAnimation';


export default function HomePage() {
    return (
        <>
        <Navigation/>
        <BannerAnimation/>
        <div className = "Banner">
            <img src = {Banner_2} alt = "Banner_1"></img>
        </div>
        <Footer/>

        </>
    )
}
