import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <div className="resume container">
            <h2>Resume</h2>
            <p>Here's a little bit about my experience and skills...</p>
            <a href="path-to-your-resume.pdf" download>Download My Resume</a>
        </div>
    );
};

export default Resume;
