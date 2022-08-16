import React from "react"

import TwitterIcon from "../images/Twitter.png"
import FacebookIcon from "../images/Facebook.png"
import InstagramIcon from "../images/Instagram.png"
import LinkedinIcon from "../images/Linkedin.png"
import GithubIcon from "../images/GitHub.png"

export default function Footer(){
    return (
        <div className="footer">
            <ul className="socila-icons">
                <li><img src={TwitterIcon} alt="" /></li>
                <li><img src={FacebookIcon} alt="" /></li>
                <li><img src={InstagramIcon} alt="" /></li>
                <li><img src={LinkedinIcon} alt="" /></li>
                <li><img src={GithubIcon} alt="" /></li>
            </ul>
        </div>
    )
}