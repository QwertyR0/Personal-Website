import React from "react";
import "./profilePic.css";

const ProfilePic = () => {
    return (
        <div className="aboutMediv" id="abtme">
            <img src="./pic.jpg" alt="Avatar" id="profileIcon"></img>
            <p className="subText">This is me!</p>
            <a href="https://github.com/QwertyR0/"><img src="./github-mark-white.png" className="github"></img></a>
            <div className="aboutMe">
                <h2 style={{color: "#F6B17A"}}>Hello There 👋!</h2>
                <p style={{color: ""}}>I'm Oğuz Kağan, I develop software and IoT projects 💻.</p>
                <p className="aboutMeText">I'm a high school student and I use my free time to improve myself 📚.</p>
                <p className="aboutMeText">My hobies consist of;</p>
                <ul className="aboutMeText">
                    <li>🧪 Studying biology,</li>
                    <li>💻 Programming,</li>
                    <li>🎹 Playing and practicing piano,</li>
                    <li>📘 Reading books.</li>
                </ul>
                <p className="aboutMeText">I'm currently working on distinct projects.</p>
                <p className="aboutMeText">Feel free to look around!</p>
                <p className="aboutMeText">Discord: <span style={{
                    color: "#F6B17A",
                    fontStyle: "italic",
                    cursor: "pointer"
                }} onClick={clc => {
                    navigator.clipboard.writeText("qwerty.r0");
                    alert("Copied to clipboard!");
                }}>qwerty.r0</span></p>
            </div>
        </div>
    )
}

export default ProfilePic;