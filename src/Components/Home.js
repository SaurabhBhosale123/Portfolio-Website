import React from 'react'
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../Styles/home.css";


const Home = () => {

   
  return (
    <>

<div className="container-fluid home-container" id="home">
        
        <div className="container home-content">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    " ",
                    "React Developer",
                    "Mern Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href='' download="your_name.pdf">
                My Resume
              </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
