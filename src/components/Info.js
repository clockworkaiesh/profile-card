import React from "react"
import ProfilePicture from "../images/profile-image.jpg"


export default function Info(){
    return(
        <div className="info">
            <img src={ProfilePicture} alt="" className="profile-img"/>
            <h1>Ayesha Naveed</h1>
            <h3 className="title">Frontend Developer</h3>
            <a href="mailto:ayeshanaved23@gmail.com" className="btn">Email</a>
        </div>
    )
}