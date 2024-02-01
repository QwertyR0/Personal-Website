import React from "react";
import "./Projects.css";

// fetch projects from github
// display them as cards
// github QwertyR0
async function getProjects() {
    const list = await fetch("https://raw.githubusercontent.com/QwertyR0/QwertyR0/main/workingOn.json").then(res => res.json()).catch(err => console.log(err));
    const data = await fetch('https://api.github.com/users/QwertyR0/repos').then(res => res.json());
    const projects = data.filter(item => list.stuff.some(link => link.link === item.html_url));
    for(let i = 0; i < projects.length; i++) {
        projects[i].img = list.stuff.filter(item => item.link === projects[i].html_url)[0].img;
    }
    return projects;
}

function getIcons(name) {
    name = name.toLowerCase();
    return name === "c++" || name === "cpp" ? "./cpp.svg" : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
}

const Projects = (props) => {
    return (
        <div className="projectsDiv">
            <h2 className="projectsTitle" id="projects">Some of My Projects:</h2>
            <div className="projectslistDiv">
                {props.projects.projlist.map((item, value) => {
                    let className = "leftCard";
                    if(value % 2 === 0 || value === 0) {
                        className = "rightCard";
                    }
                    const returnD = (
                        <div id={`c-${value}`}>
                            <h1 className={`${className === "leftCard" ? "cardNumberTextLeft" : "cardNumberTextRight"}`}>{value + 1}</h1>
                            <div className={`card ${className}`}>
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                                <br></br>
                                {item.img && <img src={item.img} alt="Project Image" className="projectImg" />}
                                <img src={getIcons(item.language)} className="langIcon" alt="Language Icon" />
                                <a href={`${item.html_url}`}><button>Go to the repository</button></a>
                            </div>
                        </div>
                    )

                    return returnD;
                })}
            </div>
        </div>
    )
}

// yeah I know... Don't question a lot, ok?

const iNeedRest = () => {
    const cards = document.getElementsByClassName("projectslistDiv");
    Array.from(cards[0].children).forEach(card => {
        const cardNum = card.getElementsByTagName("h1")[0];
        const cardHeight = card.getElementsByClassName("card")[0].offsetHeight;
        const marginPercentage = ((cardHeight / 2 - cardNum.offsetHeight / 2) - 20) / window.innerHeight * 100;
        cardNum.style.marginTop = `${marginPercentage}%`;
    });
}

export {Projects, getProjects, iNeedRest};