import React from "react"
import ProfilePicture from "../images/profile-image.png"


export default function Info(){
    return(
        <div className="info">
            <img src={ProfilePicture} alt="" className="profile-img"/>
            <h1>Laura Smith</h1>
            <h3 className="title">Frontend Developer</h3>
            <a href="#">websitelink</a>
            <button className="btn">Email</button>
        </div>
    )
}