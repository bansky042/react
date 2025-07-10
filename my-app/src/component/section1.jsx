import React, { useState, useEffect } from 'react';
import '../component_css/section1.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../component_css/images/Subject 2.png';

const phrases = [
  'Full Stack Developer',
  'Open Source Contributor',
  'Tech Enthusiast',
  'Problem Solver',
];

function Section1() {
  const [index, setIndex] = useState(0); // phrase index
  const [subIndex, setSubIndex] = useState(0); // letter index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="section1" id='home'>
      <div className="row">
        <div className="section1-left col-12 col-md-6">
          <h1 data-aos="fade-up">Hello, I'm</h1>
          <h2 data-aos="fade-right">Kosisochukwu</h2>
          <h3 data-aos="fade-left">
            {`${phrases[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
          </h3>

          <p data-aos="fade-up" data-aos-delay="100">
            I specialize in building powerful, user-friendly web applications. From designing clean frontends to developing efficient backends, I love bringing ideas to life through code.
          </p>

          <button className="btn" data-aos="zoom-in" data-aos-delay="200">
            Get in Touch
          </button>
        </div>

        <div className="section1-right col-12 col-md-6" data-aos="fade-left" data-aos-delay="300">
          <img src={image} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
