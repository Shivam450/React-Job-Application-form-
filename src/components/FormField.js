import React from 'react';

const FormField = ({ label, name, type, value, onChange, options, error, required }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === 'select' ? (
        <select className="form-control" name={name} value={value} onChange={onChange} required={required}>
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          className={`form-control ${error ? 'is-invalid' : ''}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default FormField;

