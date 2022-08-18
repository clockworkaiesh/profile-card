import React from "react"
import LinkedinIcon from "../images/Linkedin.png"
import GithubIcon from "../images/GitHub.png"

export default function Footer(){
    return (
        <div className="footer">
            <ul className="socila-icons">
                <li><a href="https://www.linkedin.com/in/ayeshanaveed/"><img src={LinkedinIcon} alt="" /></a> </li>
                <li><a href="https://github.com/clockworkaiesh"><img src={GithubIcon} alt="" /></a> </li>
            </ul>
        </div>
    )
}