import React, { useEffect, useRef, useState } from 'react';
import '../component_css/skillbar.css';

function SkillBar({ skill, value }) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (isVisible && animatedValue < value) {
      const timer = setInterval(() => {
        setAnimatedValue((prev) => {
          if (prev >= value) {
            clearInterval(timer);
            return value;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isVisible, animatedValue, value]);

  return (
    <li className="skill-bar" ref={ref} data-aos="fade-up">
      <div className="skill-label">{skill}</div>
      <div className="skill-range-wrapper">
        <div
          className="skill-range-fill"
          style={{ width: `${animatedValue}%` }}
        >
          <span className="skill-percent-inside">
            {animatedValue}%
          </span>
        </div>
      </div>
    </li>
  );
}

export default SkillBar;
