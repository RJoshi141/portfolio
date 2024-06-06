import React from 'react';

const Resume = () => {
    return (
        <div className="resume-container">
            <h2>Resume</h2>
            <p>You can view or download my resume <a href={`${process.env.PUBLIC_URL}/Ritika_Joshi_Resume.pdf`} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    );
};

export default Resume;
