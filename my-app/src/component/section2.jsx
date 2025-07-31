import React from "react";
import '../component_css/section2.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../component_css/images/IMG_8441.JPG';

function Section2() {
    return (
        <div className="section20" id="about">
             <h1 className="section2-title">About Me</h1>
            <div className="section2 row" >
       

        <div className="section2-image-container col-12 col-md-6" data-aos="fade-right">
        <img
            src={image}
            alt="About Me"
            className="section2-image"
            width="700"
            height="700"
            />

        </div>


        <div className="section2-description  col-12 col-md-6"  data-aos="fade-left">
        <h2 className="section2-subtitle">Who I Am</h2>
        <br />
          <p>I'm Kosisochukwu, a passionate and detail-oriented Full Stack Developer with a strong focus on building scalable, user-friendly web applications. With a solid foundation in both frontend and backend technologies, I enjoy turning complex problems into elegant digital solutions.

My development philosophy blends clean design, efficient architecture, and seamless user experience. Whether I'm designing a responsive interface or architecting a RESTful API, I strive for performance, maintainability, and clarity.

Beyond the code, I'm constantly learning, collaborating on open-source projects, and staying updated with the latest tech trends. I believe in writing meaningful software that not only works but adds real value.

</p>  
             </div>
        </div>
        </div>
    );
}

export default Section2;