import React from 'react';

const Summary = ({ formData, onGoBack }) => {
  const handleFinalSubmit = () => {
    alert("Application submitted successfully!");
    // Add your final submission logic here
  };

  return (
    <div className="summary">
      <h3>Application Summary</h3>
      <p><strong>Full Name:</strong> {formData.fullName}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
      <p><strong>Position:</strong> {formData.position}</p>
      {(formData.position === 'Developer' || formData.position === 'Designer') && (
        <p><strong>Relevant Experience:</strong> {formData.relevantExperience} years</p>
      )}
      {formData.position === 'Designer' && (
        <p><strong>Portfolio URL:</strong> <a href={formData.portfolioURL} target="_blank" rel="noopener noreferrer">{formData.portfolioURL}</a></p>
      )}
      {formData.position === 'Manager' && (
        <p><strong>Management Experience:</strong> {formData.managementExperience}</p>
      )}
      <p><strong>Additional Skills:</strong> {formData.additionalSkills.join(', ')}</p>
      <p><strong>Preferred Interview Time:</strong> {formData.interviewTime}</p>
      <button className="btn btn-secondary" onClick={onGoBack}>Go Back</button>
      <button className="btn btn-primary" onClick={handleFinalSubmit}>Submit</button>
    </div>
  );
};

export default Summary;



