import React from 'react';
import Banner_1 from './../image/Banner_1.jpg';
import Navigation from './../Components/Navigation';


export default function HomePage() {
    return (
        <>
        <Navigation/>
        <div className = "Banner">
            <img src = {Banner_1} alt = "Banner_1"></img>
        </div>
        </>
    )
}
