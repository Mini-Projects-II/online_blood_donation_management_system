import React from "react";
import './../CSS/AboutUs.css'
export default function AboutUsComponent(props) {
  return (
    <div>
      <div class="info">
        <img src={props.imageName}></img>
          <div class="info-div">
              <p>Name: {props.name}</p>
              <p>Email: {props.email}</p>
              <p>Contact No: {props.mob}</p>
              <p>Address: {props.add}</p>
          </div>
      </div>
    </div>
  );
}