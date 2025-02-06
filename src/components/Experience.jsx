import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience py-5">
      <div className="container">
        <h2 className="display-4 mb-4">Resume</h2>
        <div className="resume-container">
          <div className="resume-actions">
            <a 
              href="/Utkarsh-Tripathi-FlowCV-Resume-20250201.pdf" 
              download
              className="download-btn"
            >
              <FaDownload /> Download PDF
            </a>
          </div>
          <div className="resume-viewer">
            <embed 
              src="/Utkarsh-Tripathi-FlowCV-Resume-20250201.pdf" 
              type="application/pdf" 
              width="100%" 
              height="800px" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 