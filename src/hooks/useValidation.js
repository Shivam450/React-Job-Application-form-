import { useState, useEffect } from 'react';

const useValidation = (values, validate) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsValid(Object.keys(validationErrors).length === 0);
  }, [values, validate]);

  return [errors, isValid];
};

export default useValidation;
