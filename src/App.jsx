import './App.css';
import React, { useEffect } from 'react';
import NavBar from './components/NavigationBar/NavBar';
import {Projects, getProjects, iNeedRest} from './components/Projects/Projects';
import ProfilePic from './components/profilePic/profilePic.jsx';
import { Route, Routes } from 'react-router-dom';

const projlist = await getProjects();


function App() {
    useEffect(() => {
        // only work if route is /
        if(window.location.pathname === "/#/") {
            setTimeout(() => {
                iNeedRest();
            }, 1000);
        }
    }, []);

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={
                    <div className="App">
                        <div className='container'>
                              <h1 id="title"><span>Hi I'm </span><span className='toFadeIn'>Oğuz!</span></h1>
                              <div className='items'>
                                  <ProfilePic/>
                                  <Projects projects={{projlist}}/>
                              </div>
                        </div>
                    </div>  
                } />
                <Route path="/posts" element={
                    <div className="big">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1 className='center'>W.I.P.</h1>
                    </div>
                } />
                <Route path="*" element={
                    <div className="big">
                        <div className='container'>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h1 className='center'>404</h1>
                            <p className='center' style={{color: "#fff"}}>Page not found</p>
                        </div>
                    </div>
                } />

            </Routes>
            
            <div className="footer">
                <a href="https://github.com/QwertyR0/Personal-Website"><p>Made by Oğuz ● 2024</p></a>
            </div>
        </>
    );
}

export default App;
