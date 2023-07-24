import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <h3>Project 1</h3>
                <p>Description of the project...</p>
                <a href="link-to-project">See More</a>
            </div>
            {/* Repeat for more projects... */}
        </div>
    );
};

export default Projects;
