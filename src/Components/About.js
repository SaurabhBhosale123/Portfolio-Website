import React from "react";
import "../Styles/About.css";
const About = () => {
  return (
    <>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src=""
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Welcome to my corner of the internet! I'm a passionate MERN stack developer with a love for crafting robust, scalable, and user-centric web applications. With a blend of creativity and technical expertise, I strive to bring ideas to life through clean code and intuitive user experiences.
              I'm always eager to collaborate on exciting projects or discuss new opportunities. Feel free to reach out to me via [email/LinkedIn/other contact info] to start a conversation. Let's build something extraordinary together!




              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default About;