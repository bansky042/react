import React, { useState, useEffect } from "react";
import '../component_css/section4.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Section4() {
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      name: "Project Name",
      description: "A full-stack web application using React and Node.js",
    },
    {
      id: 2,
      title: "Project 2",
      name: "Project Name",
      description: "A responsive portfolio website built with HTML, CSS, and JavaScript",
    },
    {
      id: 3,
      title: "Project 3",
      name: "Project Name",
      description: "An e-commerce platform with user authentication and payment integration",
    },
  ];

  return (
    <div className="section4" id="projects">
      <h1 className="section4-title" data-aos="fade-up">My Projects</h1>

      <div className="section4-content row">
        <div className="section4-description col-12" data-aos="fade-right">
          <h2 className="section4-subtitle">What I Have Built</h2>
          <p>Here are some of the projects I have worked on:</p>

          <ul className="section4-project-list row">
            {projects.map((project) => (
              <li
                key={project.id}
                className="section4-project-item col-12 col-md-3"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {hoveredProject === project.id ? (
                  <>
                    <span className="project-name">{project.name}</span>
                    <p>{project.description}</p>
                  </>
                ) : (
                  project.title
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section4;
