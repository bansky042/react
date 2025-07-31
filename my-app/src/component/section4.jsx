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
      title: "Ban-Invest",
      name: "Investment Platform",
      description: "An investment platform with deposits, withdrawals, and referrals.",
      homepageImage: "/src/component_css/images/investment.png", // Replace with your image path
      link: "https://investment-website-qohq.onrender.com/",
    },
    {
      id: 2,
      title: "BanBlog",
      name: "Advanced Blog",
      description: "A modern blog platform with EJS and Node.js backend.",
      homepageImage: "/src/component_css/images/BLOG.png", // Replace with your image path
      link: "https://blog-website-1-mzt1.onrender.com/",
    },
    {
      id: 3,
      title: "BanMarket",
      name: "Ban Market",
      description: "A sleek and responsive eCommerce platform built with Node.js and EJS, offering a seamless shopping experience",
      homepageImage: "/src/component_css/images/shopping.png", // Replace with your image path
      link: "https://e-commerce-website-s6f7.onrender.com/",
    },
  ];

  return (
    <div className="section4" id="projects">
      <div className="container">
        <h1 className="section4-title" data-aos="fade-up">My Projects</h1>

        <div className="section4-content row">
          <div className="section4-description col-12" data-aos="fade-right">
            <h2 className="section4-subtitle">What I Have Built</h2>
            <p>Here are some of the projects I have worked on:</p>

            <div className="section4-project-grid">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="section4-project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <img
                    src={project.homepageImage}
                    alt={`${project.title} homepage`}
                    className="project-homepage-img"
                  />

                  {hoveredProject === project.id && (
                    <div className="project-hover-overlay">
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
