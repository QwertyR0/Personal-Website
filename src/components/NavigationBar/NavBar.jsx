import React from "react";
import "./NavBar.css";
import { useNavigate } from 'react-router-dom';

function clickScroll(id) {
    const element = document.getElementById(id);
    const offset = 90; // Adjust this value to set the desired offset
    const topPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth"
    });
}

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <header id="nb">
            <h2 className="NavTitle">Oğuz's Place</h2>
            <div className="NavLinks">
                <button className="btn2" onClick={clc => {
                    if(window.location.pathname !== "/#/"){
                        navigate("/")
                        setTimeout(() => {
                            clickScroll("abtme");
                        }, 300);
                    } else {
                        clickScroll("abtme");
                    }
                }}><span class="spn2">About Me</span></button>
                <button className="btn2" onClick={clc => {
                    if(window.location.pathname !== "/#/"){
                        navigate("/")
                        setTimeout(() => {
                            clickScroll("projects");
                        }, 300);
                    } else {
                        clickScroll("projects");
                    }
                }}><span class="spn2">Projects</span></button>
                <button className="btn2"><span class="spn2" onClick={
                    clc => {
                        if(window.location.pathname !== "/#/posts"){
                            navigate("/posts")
                        }
                    }
                
                }>Posts</span></button>
                {/* <button className="btn2"><span class="spn2">Other</span></button> */}
            </div>
        </header>
    )
}

export default NavBar;