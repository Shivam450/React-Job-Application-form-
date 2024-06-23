import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import useValidation from '../hooks/useValidation';
import FormField from './FormField';
import Summary from './Summary';
import validate from '../utils/validate';

const Form = () => {
  const [formData, handleChange, setFormData] = useForm({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, isValid] = useValidation(formData, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
    }
  };

  const handleGoBack = () => {
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h2>Job Application Form</h2>
      {submitted ? (
        <Summary formData={formData} onGoBack={handleGoBack} />
      ) : (
        <form onSubmit={handleSubmit}>
          <FormField
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <FormField
            label="Phone Number"
            name="phoneNumber"
            type="number"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            required
          />
          <FormField
            label="Applying for Position"
            name="position"
            type="select"
            options={['', 'Developer', 'Designer', 'Manager']}
            value={formData.position}
            onChange={handleChange}
            error={errors.position}
            required
          />
          {(formData.position === 'Developer' || formData.position === 'Designer') && (
            <FormField
              label="Relevant Experience (years)"
              name="relevantExperience"
              type="number"
              value={formData.relevantExperience}
              onChange={handleChange}
              error={errors.relevantExperience}
              required
            />
          )}
          {formData.position === 'Designer' && (
            <FormField
              label="Portfolio URL"
              name="portfolioURL"
              type="text"
              value={formData.portfolioURL}
              onChange={handleChange}
              error={errors.portfolioURL}
              required
            />
          )}
          {formData.position === 'Manager' && (
            <FormField
              label="Management Experience"
              name="managementExperience"
              type="text"
              value={formData.managementExperience}
              onChange={handleChange}
              error={errors.managementExperience}
              required
            />
          )}
          <div className="form-group">
            <label>Additional Skills</label><br />
            {['JavaScript', 'CSS', 'Python'].map(skill => (
              <div key={skill} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="additionalSkills"
                  value={skill}
                  checked={formData.additionalSkills.includes(skill)}
                  onChange={handleChange}
                />
                <label className="form-check-label">{skill}</label>
              </div>
            ))}
            {errors.additionalSkills && <small className="text-danger">{errors.additionalSkills}</small>}
          </div>
          <FormField
            label="Preferred Interview Time"
            name="interviewTime"
            type="datetime-local"
            value={formData.interviewTime}
            onChange={handleChange}
            error={errors.interviewTime}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={!isValid}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;



