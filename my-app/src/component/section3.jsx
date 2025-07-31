import React, { useEffect } from 'react';
import '../component_css/section3.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SkillBar from './skillbar';

function Section3() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="section3" id='skills'>
      <h1 className="section3-title" data-aos="fade-up">My Skills</h1>
      <div className="section3-content row">
        <div className="section3-description col-12 col-md-5" data-aos="fade-right">
          <h2 className="section3-subtitle">What I Can Do</h2>
          <p>I am proficient in a variety of programming languages and frameworks, including:</p>
          <ul className="section3-skill-list">
            <SkillBar skill="JavaScript (React, Node.js)" value={90} />
            <SkillBar skill="HTML / CSS / Tailwind" value={95} />
            <SkillBar skill="Node.js & Express" value={85} />
            <SkillBar skill="PostgreSQL" value={80} />
            <SkillBar skill="EJS & Server Rendering" value={88} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section3;
